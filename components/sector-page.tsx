import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { getSector, getSectorProjects, sectors } from "../lib/projects-data";
import { breadcrumbJsonLd, jsonLd } from "../lib/site";

export function sectorMetadata(slug: string) {
  const sector = getSector(slug);
  if (!sector) return {};
  return {
    title: `${sector.label} | Sectors | McD BERL`,
    description: sector.description,
    alternates: { canonical: `/${sector.slug}/` },
    openGraph: { title: `${sector.label} | McD BERL`, description: sector.description, url: `/${sector.slug}/`, images: [{ url: sector.bannerImage, alt: sector.label }] },
  };
}

export default function SectorPage({ slug }: { slug: string }) {
  const sector = getSector(slug);
  if (!sector) notFound();

  const projects = getSectorProjects(sector.slug);
  const index = sectors.findIndex((s) => s.slug === sector.slug);
  const prev = sectors[(index - 1 + sectors.length) % sectors.length];
  const next = sectors[(index + 1) % sectors.length];
  const others = sectors.filter((s) => s.slug !== sector.slug);

  return (
    <>
      <SiteHeader />
      <main className="sector-page">
        {/* Hero */}
        <section className="sector-hero">
          <Image className="sector-hero-img" src={sector.bannerImage} alt="" fill priority sizes="100vw" style={sector.bannerPosition ? { objectPosition: sector.bannerPosition } : undefined} />
          <div className="sector-hero-shade" aria-hidden="true" />
          <div className="sector-hero-copy">
            <nav className="sector-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/projects/">Sectors</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{sector.label}</span>
            </nav>
            <h1>{sector.label}</h1>
            <p>{sector.description}</p>
            <span className="sector-hero-count">
              {String(index + 1).padStart(2, "0")} <i>/</i> {String(sectors.length).padStart(2, "0")}
            </span>
          </div>
        </section>

        {/* Perspective */}
        <section className="sector-intro page-shell">
          <div className="sector-intro-heading">
            <span className="red-rule" aria-hidden="true" />
            <div>
              <p className="eyebrow">Our perspective</p>
              <h2>{sector.heading}</h2>
            </div>
          </div>
          <div className="sector-intro-body">
            {sector.body.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </section>

        {/* Results */}
        {sector.stats && sector.stats.length > 0 && (
          <section className="sector-stats page-shell" aria-label="Results">
            {sector.stats.map((stat) => (
              <div key={stat.label} className="sector-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </section>
        )}

        {/* Approach */}
        <section className="sector-approach">
          <div className="page-shell">
            <div className="sector-approach-head">
              <p className="eyebrow">How we help</p>
              <h2>Our approach to {sector.label.toLowerCase()}.</h2>
            </div>
            <div className="sector-approach-list">
              {sector.approach.map((item, i) => (
                <article key={item.title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="sector-projects page-shell" id="projects">
          <div className="projects-grid-head">
            <p className="eyebrow">Selected projects</p>
            <span>
              {projects.length} project{projects.length !== 1 ? "s" : ""}
            </span>
          </div>
          {projects.length > 0 ? (
            <div className="projects-grid-new">
              {projects.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}/`} className="project-card-new">
                  <div className="project-card-image-wrap">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                      className="project-card-img"
                    />
                    <div className="project-card-overlay" />
                  </div>
                  <div className="project-card-meta">
                    <div className="project-card-text">
                      <h3>{project.title}</h3>
                      <p className="project-card-location">{project.location}</p>
                    </div>
                    <span className="project-card-arrow" aria-hidden="true">↗</span>
                  </div>
                  <p className="sector-project-summary">{project.summary}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="sector-empty">
              <h3>Case studies coming soon.</h3>
              <p>We are documenting our {sector.label.toLowerCase()} work. Talk to us about your brief in the meantime.</p>
              <Link className="text-link" href="/contact/">Get in touch <span>→</span></Link>
            </div>
          )}
        </section>

        {/* Prev / next */}
        <nav className="sector-pager page-shell" aria-label="More sectors">
          <Link href={`/${prev.slug}/`} className="sector-pager-link">
            <span>← Previous sector</span>
            <strong>{prev.label}</strong>
          </Link>
          <Link href={`/${next.slug}/`} className="sector-pager-link is-next">
            <span>Next sector →</span>
            <strong>{next.label}</strong>
          </Link>
        </nav>

        {/* All sectors */}
        <section className="sector-more page-shell">
          <p className="eyebrow">Explore other sectors</p>
          <ul>
            {others.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}/`}>
                  {s.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="callout-band">
          <div className="page-shell">
            <p className="eyebrow">Start a conversation</p>
            <h2>
              Planning a project in {sector.label.toLowerCase()}?
              <br />
              Let’s make it perform.
            </h2>
            <Link className="text-link light" href="/contact/">
              Get in touch <span>→</span>
            </Link>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Sectors", path: "/projects/" },
            { name: sector.label, path: `/${sector.slug}/` },
          ])
        )}
      />
      <SiteFooter />
    </>
  );
}
