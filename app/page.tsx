"use client";

import Image from "next/image";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import PartnersSection from "../components/PartnersSection";

const A = "/assets/";

const projects = [
  ["Bharatiya City School", "Bangalore, India", "projects/bharatiya-school.webp", "bharatiya-school"],
  ["Infosys Nagpur", "Nagpur, India", "projects/infosys-nagpur.webp", "infosys-nagpur"],
  ["3 Times Square", "New York", "projects/3-times-square.webp", "3-times-square"],
  ["Bharatiya City SEZ3", "Bangalore, India", "projects/bharatiya-city-sez3.webp", "bharatiya-city-sez3"],
  ["Indian Pavilion Expo", "Shanghai, China", "projects/indian-pavilion-expo.webp", "indian-pavilion-expo-2010"],
  ["Coachilin MDC", "California", "projects/coachilin-mdc.webp", "coachilin-mdc"],
  ["Mandana Garments", "Tarapur / Boisar, Mumbai", "projects/mandana-garments.webp", "mandana-garments"],
  ["Green Building Regulation Colombia", "Colombia", "projects/green-building-regulation-colombia.webp", "green-building-regulation-colombia"],
  ["240 CPS Apartment", "New York", "projects/240-cps-apartment.webp", "240-cps-school"],
  ["Transit Accommodation Block", "Bangalore, India", "projects/transit-accommodation-block.webp", "transit-accomodation-block-centre-for-human-genetics"],
  ["Green Building Regulation Jakarta", "Jakarta", "projects/green-building-regulation-jakarta.webp", "green-building-regulation-jakarta"],
  ["Umiya Velociti", "Bangalore, India", "projects/umiya-velociti.webp", "umiya-velociti"]
] as const;

const testimonials = [
  ["Dr. B. Ramakrishna Rao", "Bharatiya City Developers", "McD BERL has been a trusted partner from the start, dedicating time, talent, and resources to our projects. They excel in re-engineering and value engineering, optimizing power consumption in our commercial buildings. Their work has led to significant reductions in both CAPEX and OPEX."],
  ["Guruprakash Shastry", "Regional Head-Infrastructure, Infosys", "McD BERL’s dynamic team of young professionals constantly strives to reduce the environmental impact of buildings and campuses. Their skills in data analysis and energy simulations are impressive. It has been a rewarding experience collaborating with them on energy-saving ideas."],
  ["Sanjay Prakash", "Shift Design", "McD BERL is a highly innovative MEP firm based in Bangalore, leading the way in integrating new technologies in building projects. Their expertise in renewable energy, solar generation, and high-performance HVAC is recognized globally."],
  ["Akshay", "The Purple Ink Studio", "Our collaboration with McD BERL has been invaluable as they consistently understand our vision and push the limits of sustainability. They are detail-oriented and use advanced technology to ensure high-performance outcomes."],
  ["Iype Chacko", "Flying Elephant Architects", "Working with McD BERL has been a true collaboration driven by a shared commitment to sustainable design and practices. Their contributions have enriched our projects from start to finish."],
  ["Anupam Bansal", "ABRD Architects", "McD BERL’s system-based, holistic approach to engineering and sustainability sets them apart from conventional firms. Their unwavering commitment to sustainable design is evident in every project."],
  ["Venkat Chalsani", "Samskruti Developers", "Over the last 12 years, McD BERL has consistently risen to the challenges we’ve presented, delivering innovative, feasible solutions—from smart water meters to demand-side smart grids."]
] as const;

export default function Home() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const currentProject = projects[projectIndex];
  const currentTestimonial = testimonials[testimonialIndex];


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
          preload="auto"
          aria-hidden="true"
        >
          <source src={`${A}hero/hero-video.mp4`} type="video/mp4" />
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

      <section id="projects" className="projects-section"><div className="section-shell section-intro"><div><p className="eyebrow">Selected work</p><h2>Built for what’s next.</h2></div><a className="text-link" href="/projects">View all projects <span>↗</span></a></div><div className="project-carousel section-shell"><a className="project-card" href={`https://mcdberl.com/projects/${currentProject[3]}/`}><div className="project-image"><Image src={`${A}${currentProject[2]}`} alt={currentProject[0]} fill sizes="(max-width: 700px) 100vw, 62vw" /></div><div className="project-meta"><div><h3>{currentProject[0]}</h3><p>{currentProject[1]}</p></div><span className="round-arrow">↗</span></div></a><div className="carousel-controls"><button aria-label="Previous project" onClick={() => setProjectIndex((projectIndex - 1 + projects.length) % projects.length)}>←</button><span>{String(projectIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span><button aria-label="Next project" onClick={() => setProjectIndex((projectIndex + 1) % projects.length)}>→</button></div></div></section>

      <section id="services" className="services section-shell"><p className="eyebrow">How we work</p><div className="service-list"><div><span>01</span><h3>Performance-led design</h3><p>We bring energy, water and human comfort into the earliest design conversations.</p></div><div><span>02</span><h3>Systems that endure</h3><p>Practical engineering strategies built for long-term performance, resilience and value.</p></div><div><span>03</span><h3>Measured impact</h3><p>We turn ambitions into measurable outcomes, from first sketch to operational reality.</p></div></div></section>

      <section className="testimonials section-shell"><div className="section-intro"><div><p className="eyebrow">Client voices</p><h2>Hear it straight<br />from our customers.</h2></div><div className="carousel-controls"><button aria-label="Previous testimonial" onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)}>←</button><span>{String(testimonialIndex + 1).padStart(2, "0")} / 07</span><button aria-label="Next testimonial" onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}>→</button></div></div><blockquote>“{currentTestimonial[2]}”</blockquote><div className="quote-author"><strong>{currentTestimonial[0]}</strong><span>{currentTestimonial[1]}</span></div></section>

      <section id="careers" className="careers"><Image src={`${A}team/team-net-zero.jpg`} alt="McD BERL team working toward net-zero goals" fill sizes="100vw" /><div className="career-shade" /><div className="career-copy"><p>I've transformed challenges into the success of achieving net-zero goals.</p><a className="text-link light" href="/careers">Find your opportunity <span>→</span></a></div></section>

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
              <a href="tel:9606456689" className="text-link">+91 96064 56689 <span>↗</span></a>
              <a href="tel:8105833031" className="text-link">+91 81058 33031 <span>↗</span></a>
            </div>
          </div>
          <div className="home-contact-card">
            <h3>Start a Conversation</h3>
            <p>Tell us about your project brief, scope, and sustainability targets.</p>
            <a href="/contact" className="home-contact-btn">
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "McD BERL Pvt Ltd", url: "https://mcdberl.com", description: "Sustainable building engineering and regenerative built environments." }) }} />
    </main>
  );
}
