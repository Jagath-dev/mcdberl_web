"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { sectors, sectorProjects } from "../../lib/projects-data";

const countFor = (slug: string) => sectorProjects.filter((p) => p.sectors.includes(slug)).length;

function ProjectsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const paramSector = searchParams.get("sector");
  const validParam = paramSector && sectors.some((s) => s.slug === paramSector) ? paramSector : null;
  const [activeSector, setActiveSector] = useState<string | null>(validParam);
  const resultsRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  // Keep state in sync with back/forward navigation
  useEffect(() => {
    setActiveSector(validParam);
  }, [validParam]);

  // Keep the active chip visible inside the scrollable chip row
  useEffect(() => {
    const row = chipsRef.current;
    const chip = row?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (row && chip) {
      const left = chip.offsetLeft - row.clientWidth / 2 + chip.clientWidth / 2;
      row.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
    }
  }, [activeSector]);

  const counts = useMemo(() => Object.fromEntries(sectors.map((s) => [s.slug, countFor(s.slug)])), []);

  const handleSectorChange = (slug: string | null) => {
    setActiveSector(slug);
    router.replace(slug ? `/projects?sector=${slug}` : "/projects", { scroll: false });
    // If the user has scrolled past the top of the results, bring them back to it
    const el = resultsRef.current;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 150;
      if (window.scrollY > top) window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const filteredProjects = activeSector
    ? sectorProjects.filter((p) => p.sectors.includes(activeSector))
    : sectorProjects;

  const activeSectorData = activeSector ? sectors.find((s) => s.slug === activeSector) : null;

  return (
    <>
      {/* Hero */}
      <section className="projects-hero">
        <div className="projects-hero-bg">
          <Image
            src="/assets/projects/projects-hero.webp"
            alt="McD BERL Projects Landscape"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="projects-hero-img"
          />
          <div className="projects-hero-overlay" />
        </div>
        <div className="projects-hero-inner page-shell">
          <p className="eyebrow projects-hero-eyebrow">Our Work</p>
          <h1 className="projects-hero-title">
            Projects across
            <br />
            every sector.
          </h1>
          <p className="projects-hero-sub">
            McD BERL showcases diverse projects across Advanced Manufacturing, Arts and Culture,
            Cities, Commercial Property and many more sectors — each shaped by precision
            engineering and measurable sustainability outcomes.
          </p>
        </div>
      </section>

      {/* Sticky sector filter */}
      <div className="projects-filter-bar">
        <div className="projects-filter-inner page-shell">
          <label className="projects-filter-select">
            <span>Sector</span>
            <select
              value={activeSector ?? ""}
              onChange={(e) => handleSectorChange(e.target.value || null)}
            >
              <option value="">All sectors ({sectorProjects.length})</option>
              {sectors.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.label} ({counts[s.slug]})
                </option>
              ))}
            </select>
          </label>
          <div className="projects-filter-chips" ref={chipsRef} role="group" aria-label="Filter projects by sector">
            <button
              type="button"
              className="projects-chip"
              aria-pressed={activeSector === null}
              onClick={() => handleSectorChange(null)}
            >
              All <span>{sectorProjects.length}</span>
            </button>
            {sectors.map((sector) => (
              <button
                type="button"
                key={sector.slug}
                className="projects-chip"
                aria-pressed={activeSector === sector.slug}
                onClick={() => handleSectorChange(activeSector === sector.slug ? null : sector.slug)}
              >
                {sector.label} <span>{counts[sector.slug]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <section className="projects-grid-section page-shell" ref={resultsRef} aria-live="polite">
        <div className="projects-results-head">
          {activeSectorData ? (
            <div className="projects-results-sector">
              <p className="eyebrow">Sector</p>
              <h2>{activeSectorData.label}</h2>
              <p>{activeSectorData.description}</p>
              <div className="projects-results-actions">
                <Link className="text-link" href={`/${activeSectorData.slug}/`}>
                  Explore this sector <span>→</span>
                </Link>
                <button type="button" className="projects-clear" onClick={() => handleSectorChange(null)}>
                  Clear filter ×
                </button>
              </div>
            </div>
          ) : (
            <div className="projects-results-sector">
              <p className="eyebrow">All projects</p>
              <h2>Selected work</h2>
            </div>
          )}
          <span className="projects-results-count">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
          </span>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="projects-grid-new">
            {filteredProjects.map((project) => (
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
                  {!activeSector && <span className="project-card-category">{project.category}</span>}
                </div>
                <div className="project-card-meta">
                  <div className="project-card-text">
                    <h3>{project.title}</h3>
                    <p className="project-card-location">{project.location}</p>
                  </div>
                  <span className="project-card-arrow" aria-hidden="true">↗</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="sector-empty">
            <h3>Case studies coming soon.</h3>
            <p>We are documenting our {activeSectorData?.label.toLowerCase()} work. Talk to us about your brief in the meantime.</p>
            <Link className="text-link" href="/contact/">
              Get in touch <span>→</span>
            </Link>
          </div>
        )}
      </section>

      {/* Sector pages */}
      <section className="projects-sector-index page-shell">
        <div className="projects-sector-index-head">
          <p className="eyebrow">Sector pages</p>
          <h2>Explore our expertise in depth.</h2>
        </div>
        <ul>
          {sectors.map((s) => (
            <li key={s.slug}>
              <Link href={`/${s.slug}/`}>
                <span className="projects-sector-index-name">{s.label}</span>
                <span className="projects-sector-index-count">
                  {counts[s.slug]} project{counts[s.slug] !== 1 ? "s" : ""}
                </span>
                <span aria-hidden="true" className="projects-sector-index-arrow">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default function ProjectsClient() {
  return (
    <Suspense fallback={<div style={{ padding: "120px 28px" }}>Loading projects…</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
