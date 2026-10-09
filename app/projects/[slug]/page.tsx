import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../../components/site-chrome";
import { sectorProjects } from "../../../lib/projects-data";

export function generateStaticParams() {
  return sectorProjects.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = sectorProjects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | McD BERL`,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = sectorProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <SiteHeader />
      <main className="project-detail">
        {/* Hero */}
        <section className="project-detail-hero">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="project-detail-hero-img"
          />
          <div className="hero-shade" />
          <div className="project-detail-copy">
            <p className="eyebrow">
              {project.category} / {project.location}
            </p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
          </div>
        </section>

        {/* Body */}
        <section className="project-detail-body page-shell">
          <div>
            <p className="eyebrow">The brief</p>
            <h2>Performance, without compromise.</h2>
          </div>
          <div>
            <p>
              McD BERL brings a whole-systems view to every project. We connect the brief, the
              site and the building systems early so that sustainability becomes an advantage —
              not a layer added at the end.
            </p>
            <div className="focus-list">
              {project.focus.map((item, index) => (
                <div key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back link */}
        <div className="project-back page-shell">
          <Link className="text-link" href="/projects/">
            ← Back to projects
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
