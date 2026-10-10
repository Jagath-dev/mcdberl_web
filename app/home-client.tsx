import Image from "next/image";
import HomeTestimonials from "../components/HomeTestimonials";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import PartnersSection from "../components/PartnersSection";
import HomeProjects, { type HomeProject } from "../components/HomeProjects";
import { sectorProjects } from "../lib/projects-data";

const A = "/assets/";

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

const featured: HomeProject[] = FEATURED_SLUGS.flatMap((slug) => {
  const p = sectorProjects.find((project) => project.slug === slug);
  return p ? [{ title: p.title, location: p.location, image: p.image, slug: p.slug, summary: p.summary, category: p.category }] : [];
});

export default function HomeClient() {
  return (
    <main>
      <SiteHeader />

      <section id="top" className="hero" aria-labelledby="hero-title">
        <video
          className="hero-video"
          poster={`${A}hero/hero-poster.webp`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={`${A}hero/hero-video-480.mp4`} type="video/mp4" media="(max-width: 900px)" />
          <source src={`${A}hero/hero-video-720.mp4`} type="video/mp4" />
        </video>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <div className="hero-meta" aria-label="McD BERL global engineering practice">
            <span>McD BERL</span>
            <span>Global engineering practice · 2026</span>
          </div>
          <div className="hero-content">
            <div className="hero-message">
              <p className="hero-kicker">Buildings / Campuses / Cities</p>
              <h1 id="hero-title">Engineering a<br />Sustainable Future</h1>
              <p className="hero-lede">Regenerative environments, shaped by performance, precision and a belief that every project can leave the world better.</p>
              <div className="hero-actions">
                <a className="hero-cta" href="/projects/">Explore our work <span>↗</span></a>
                <a className="hero-secondary" href="#about">Discover McD BERL <span>↓</span></a>
              </div>
            </div>
            <div className="hero-side-note" aria-hidden="true">
              <span>01 — 04</span>
              <span>Net-positive thinking<br />for the built world</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="intro section-shell">
        <div className="intro-heading"><span className="red-rule" /><h2>McD<br />BERL</h2></div>
        <p>Leading a global transformation in how the world builds—creating regenerative, net-positive environments that serve both people and the planet.</p>
      </section>

      <section id="sectors" className="statement section-shell"><p className="eyebrow">Our point of view</p><div className="statement-grid"><h2>Design, sustainability<br />and shared vision.</h2><p>Every project is a chance to leave the world better than we found it. From high-performance buildings to resilient campuses, our work brings together systems thinking, rigorous engineering and a deep respect for the places we shape.</p></div></section>

      <HomeProjects featured={featured} />

      <section id="services" className="services section-shell">
        <div className="services-heading">
          <div className="services-heading-copy">
            <p className="eyebrow">How we work</p>
            <h2>Engineering systems that make better places.</h2>
            <p>We connect technical precision with the larger life of a building, campus or city.</p>
          </div>
          <div className="services-image">
            <Image src={`${A}services/engineering-systems.webp`} alt="Abstract building services and engineering systems drawing" fill sizes="(max-width: 900px) 100vw, 48vw" />
          </div>
        </div>
        <div className="service-list"><div><span>01</span><h3>Performance-led design</h3><p>We bring energy, water and human comfort into the earliest design conversations.</p></div><div><span>02</span><h3>Systems that endure</h3><p>Practical engineering strategies built for long-term performance, resilience and value.</p></div><div><span>03</span><h3>Measured impact</h3><p>We turn ambitions into measurable outcomes, from first sketch to operational reality.</p></div></div>
      </section>

      <HomeTestimonials />

      {/* <section id="careers" className="careers"><Image src={`${A}team/team-net-zero.webp`} alt="McD BERL team working toward net-zero goals" fill sizes="100vw" /><div className="career-shade" /><div className="career-copy"><p>I've transformed challenges into the success of achieving net-zero goals.</p><a className="text-link light" href="/careers/">Find your opportunity <span>→</span></a></div></section> */}

      <PartnersSection />

      <section id="contact" className="home-contact section-shell">
        <div className="home-contact-grid">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Start the<br />conversation.</h2>
            <p className="home-contact-desc">
              Bring us the hard questions. Reach out today for a consultation to turn net-positive ambitions into measurable reality.
            </p>
            <div className="home-contact-links">
              <a href="mailto:info@mcdberl.com" className="text-link">info@mcdberl.com <span>↗</span></a>
              <a href="tel:+919606456689" className="text-link">+91 96064 56689 <span>↗</span></a>
              <a href="tel:+918105833031" className="text-link">+91 81058 33031 <span>↗</span></a>
            </div>
          </div>
          <div className="home-contact-card">
            <h3>Start a Conversation</h3>
            <p>Tell us about your project brief, scope, and sustainability targets.</p>
            <a href="/contact/" className="home-contact-btn">
              Open Contact Page & Offices <span>→</span>
            </a>
            <div className="home-contact-locations">
              <span>Bengaluru (HQ)</span>
              <span>•</span>
              <span>Mumbai</span>
              <span>•</span>
              <span>Hyderabad</span>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
