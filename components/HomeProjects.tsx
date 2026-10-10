"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { sectorProjects } from "../lib/projects-data";

// Homepage "Selected work" — the order here is the order shown.
const FEATURED_SLUGS = [
  "infosys-nagpur",
  "bharatiya-school",
  "3-times-square",
  "bharatiya-city-sez3",
  "indian-pavilion-expo-2010",
  "coachilin-mdc",
  "mandana-garments",
  "green-building-regulation-colombia",
  "240-cps-school",
  "transit-accomodation-block-centre-for-human-genetics",
  "green-building-regulation-jakarta",
  "umiya-velociti",
];

const featured = FEATURED_SLUGS.map((slug) => sectorProjects.find((p) => p.slug === slug)).filter(
  (p): p is (typeof sectorProjects)[number] => Boolean(p)
);

export default function HomeProjects() {
  const [index, setIndex] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const total = featured.length;
  const project = featured[index];

  const go = (next: number) => setIndex((next + total) % total);

  // Keep the active thumbnail in view inside the strip (without scrolling the page)
  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip?.querySelector<HTMLElement>('[aria-current="true"]');
    if (strip && thumb) {
      const left = thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2;
      strip.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
    }
  }, [index]);

  if (!project) return null;

  return (
    <section
      id="projects"
      className="projects-section"
      aria-roledescription="carousel"
      aria-label="Selected work"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
    >
      <div className="section-shell section-intro">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Built for what’s next.</h2>
        </div>
        <Link className="text-link" href="/projects/">
          View all projects <span>↗</span>
        </Link>
      </div>

      <div className="section-shell home-work">
        <div className="home-work-stage">
          <Link
            href={`/projects/${project.slug}/`}
            className="home-work-image"
            aria-label={`View project: ${project.title}`}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              touchX.current = null;
              if (Math.abs(dx) > 50) {
                e.preventDefault();
                go(dx < 0 ? index + 1 : index - 1);
              }
            }}
          >
            {featured.map((p, i) => (
              <Image
                key={p.slug}
                src={p.image}
                alt={i === index ? p.title : ""}
                fill
                sizes="(max-width: 900px) 100vw, 62vw"
                className={i === index ? "is-active" : undefined}
                priority={i === 0}
              />
            ))}
          </Link>

          <div className="home-work-progress" aria-hidden="true">
            <span style={{ width: `${((index + 1) / total) * 100}%` }} />
          </div>

          <div className="home-work-panel" aria-live="polite">
            <div className="home-work-info">
              <p className="home-work-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="home-work-location">{project.location}</p>
            </div>
            <p className="home-work-summary">{project.summary}</p>
            <div className="home-work-nav">
              <span className="home-work-count">
                <strong>{String(index + 1).padStart(2, "0")}</strong> / {String(total).padStart(2, "0")}
              </span>
              <div className="carousel-controls">
                <button type="button" aria-label="Previous project" onClick={() => go(index - 1)}>←</button>
                <button type="button" aria-label="Next project" onClick={() => go(index + 1)}>→</button>
              </div>
              <Link className="round-arrow home-work-go" href={`/projects/${project.slug}/`} aria-label={`View project: ${project.title}`}>↗</Link>
            </div>
          </div>
        </div>

        <div className="home-work-thumbs" ref={thumbsRef} role="group" aria-label="Choose a project">
          {featured.map((p, i) => (
            <button
              type="button"
              key={p.slug}
              className="home-work-thumb"
              aria-current={i === index ? "true" : undefined}
              aria-label={`Show ${p.title}`}
              onClick={() => setIndex(i)}
            >
              <span className="home-work-thumb-img">
                <Image src={p.image} alt="" fill sizes="180px" />
              </span>
              <span className="home-work-thumb-title">{p.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
