"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { sectors, sectorProjects } from "../../lib/projects-data";

function ProjectsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialSector = searchParams.get("sector");
  const [activeSector, setActiveSector] = useState<string | null>(initialSector);

  const handleSectorChange = (slug: string | null) => {
    setActiveSector(slug);
    if (slug) {
      router.replace(`/projects?sector=${slug}`, { scroll: false });
    } else {
      router.replace("/projects", { scroll: false });
    }
  };

  const filteredProjects = activeSector
    ? sectorProjects.filter((p) => p.sectors.includes(activeSector))
    : sectorProjects;

  const activeSectorData = activeSector
    ? sectors.find((s) => s.slug === activeSector)
    : null;

  return (
    <>
      {/* Hero */}
      <section className="projects-hero">
        <div className="projects-hero-inner page-shell">
          <p className="eyebrow">Our Work</p>
          <h1>
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

      {/* Sector Filter */}
      <section className="sector-filter-section page-shell">
        <div className="sector-filter-head">
          <p className="eyebrow">Filter by sector</p>
        </div>
        <div className="sector-filter-tabs">
          <button
            className={`sector-tab ${activeSector === null ? "is-active" : ""}`}
            onClick={() => handleSectorChange(null)}
          >
            All Projects
          </button>
          {sectors.map((sector) => (
            <button
              key={sector.slug}
              className={`sector-tab ${activeSector === sector.slug ? "is-active" : ""}`}
              onClick={() => handleSectorChange(sector.slug === activeSector ? null : sector.slug)}
            >
              {sector.label}
            </button>
          ))}
        </div>
      </section>

      {/* Sector Banner (when a sector is selected) */}
      {activeSectorData && (
        <section className="sector-banner-section">
          <div className="sector-banner-image-wrap">
            <Image
              src={activeSectorData.bannerImage}
              alt={activeSectorData.label}
              fill
              sizes="100vw"
              className="sector-banner-img"
              priority
            />
            <div className="sector-banner-overlay" />
            <div className="sector-banner-copy page-shell">
              <p className="eyebrow">Sector</p>
              <h2>{activeSectorData.label}</h2>
              <p>{activeSectorData.description}</p>
            </div>
          </div>
          <div className="sector-long-desc page-shell">
            <p>{activeSectorData.longDescription}</p>
          </div>
        </section>
      )}

      {/* Project Grid */}
      <section className="projects-grid-section page-shell">
        <div className="projects-grid-head">
          <p className="eyebrow">
            {activeSector ? `${activeSectorData?.label} projects` : "All projects"}
          </p>
          <span>
            {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
          </span>
        </div>
        <div className="projects-grid-new">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}/`}
              className="project-card-new"
            >
              <div className="project-card-image-wrap">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="project-card-img"
                />
                <div className="project-card-overlay" />
                <span className="project-card-category">{project.category}</span>
              </div>
              <div className="project-card-meta">
                <div className="project-card-text">
                  <h3>{project.title}</h3>
                  <p className="project-card-location">{project.location}</p>
                </div>
                <span className="project-card-arrow">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sector Grid (shown when no filter is active) */}
      {!activeSector && (
        <section className="sectors-showcase page-shell">
          <div className="sectors-showcase-head">
            <p className="eyebrow">Browse by sector</p>
            <h2>Explore our expertise</h2>
          </div>
          <div className="sectors-grid">
            {sectors.map((sector) => {
              const count = sectorProjects.filter((p) =>
                p.sectors.includes(sector.slug)
              ).length;
              return (
                <button
                  key={sector.slug}
                  className="sector-card"
                  onClick={() => handleSectorChange(sector.slug)}
                >
                  <div className="sector-card-image-wrap">
                    <Image
                      src={sector.bannerImage}
                      alt={sector.label}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      className="sector-card-img"
                    />
                    <div className="sector-card-overlay" />
                    <div className="sector-card-inner">
                      <h3>{sector.label}</h3>
                      <p>{count} project{count !== 1 ? "s" : ""}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}
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
