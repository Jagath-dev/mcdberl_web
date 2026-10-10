"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";
import type { MapCountry } from "./world-map-data";
import { AboutApproach, AboutOutcomes } from "../../components/about-sections";

interface ProjectLocation {
  id: string;
  name: string;
  country: string;
  category: string;
  lat: number;
  lng: number;
}

const GLOBAL_PROJECTS: ProjectLocation[] = [
  // United States
  { id: "3-times-square", name: "3 Times Square", country: "United States", category: "Commercial & High-Rise", lat: 40.7567, lng: -73.9871 },
  { id: "240-cps", name: "240 CPS Apartment", country: "United States", category: "High-End Residential", lat: 40.767, lng: -73.9812 },
  { id: "coachilin-mdc", name: "Coachilin MDC", country: "United States", category: "Mission-Critical / Industrial", lat: 36.5362, lng: -119.8895 },
  { id: "texas-residence", name: "Private Residence with Biome Environmental", country: "United States", category: "Regenerative Living", lat: 31.5012, lng: -99.2056 },

  // Colombia
  { id: "cartagena", name: "Ciudad del Bicentenario", country: "Colombia", category: "Sustainable Master Planning", lat: 10.3931, lng: -75.4838 },
  { id: "ecociudades", name: "Ecociudades, Monteria", country: "Colombia", category: "Ecological Urban Habitat", lat: 8.7514, lng: -75.8785 },
  { id: "colombia-reg", name: "National Green Building Regulations", country: "Colombia", category: "Public Policy & Codes", lat: 4.5709, lng: -74.2973 },

  // Indonesia
  { id: "jakarta-reg", name: "Green Building Regulation Framework", country: "Indonesia", category: "National Policy & Codes", lat: -6.1922, lng: 106.8185 },

  // China
  { id: "expo-shanghai", name: "Indian Pavilion, World Expo", country: "China", category: "Civic & International Pavilion", lat: 31.182, lng: 121.474 },

  // UAE
  { id: "bearys-wafira", name: "Beary's Wafira Residential Tower", country: "United Arab Emirates", category: "High-Rise Residential", lat: 25.2366, lng: 55.2772 },

  // Kenya
  { id: "aga-khan", name: "Aga Khan International School", country: "Kenya", category: "Institutional & Education", lat: -4.0761, lng: 39.6684 },

  // Qatar
  { id: "qatar-campus", name: "Qatar Sustainability & Master Planning", country: "Qatar", category: "Corporate & Master Planning", lat: 25.2854, lng: 51.531 },

  // India
  { id: "infosys-jaipur", name: "Infosys Campus, Jaipur", country: "India", category: "Net-Zero Corporate Campus", lat: 26.8087, lng: 75.6482 },
  { id: "infosys-pune", name: "Infosys Campus, Pune", country: "India", category: "Corporate Headquarters", lat: 18.5868, lng: 73.7348 },
  { id: "infosys-nagpur", name: "Infosys Campus, Nagpur", country: "India", category: "Ultra-Low Energy Campus", lat: 21.0495, lng: 79.0312 },
  { id: "wipro-kolkata", name: "Wipro Campus, Kolkata", country: "India", category: "IT Park & Technology Campus", lat: 22.5796, lng: 88.429 },
  { id: "umiya-velociti", name: "Umiya Velociti, Bangalore", country: "India", category: "Commercial Workplace", lat: 13.0524, lng: 77.5939 },
  { id: "cmti-bangalore", name: "CMTI - Nano Manufacturing Centre", country: "India", category: "Advanced Research / Cleanroom", lat: 13.0345, lng: 77.5373 },
  { id: "govardhan-mumbai", name: "Govardhan Eco Village, Mumbai", country: "India", category: "Regenerative Eco-Tourism", lat: 19.6557, lng: 72.9652 },
  { id: "palava-lodha", name: "Palava City by Lodha, Mumbai", country: "India", category: "Smart Green Megacity", lat: 19.165, lng: 73.074 },
  { id: "iim-trichy", name: "IIM Trichy Campus", country: "India", category: "Higher Education & Research", lat: 10.6665, lng: 78.7449 },
  { id: "mnlu-nagpur", name: "Maharashtra National Law University", country: "India", category: "Academic & Campus Planning", lat: 20.9445, lng: 79.0291 },
  { id: "taj-kanha", name: "Taj Kanha, Madhya Pradesh", country: "India", category: "Luxury Eco-Hospitality", lat: 22.144, lng: 80.6573 },
  { id: "kaladham", name: "Kaladham, Vijayanagar", country: "India", category: "Cultural Heritage & Arts", lat: 15.1765, lng: 76.6259 },
  { id: "ncscm-chennai", name: "National Center for Sustainable Coastal Management", country: "India", category: "Coastal Research Institute", lat: 13.0137, lng: 80.2332 },
  { id: "organo-hyderabad", name: "Organo Eco-Habitat, Hyderabad", country: "India", category: "Rurban Regenerative Living", lat: 17.3131, lng: 78.3164 },
  { id: "azim-premji", name: "Azim Premji School, Dineshpur", country: "India", category: "Community Education", lat: 29.0466, lng: 79.3231 },
  { id: "iiit-delhi", name: "IIIT Delhi", country: "India", category: "Advanced Technology University", lat: 28.5461, lng: 77.2732 }
];

const COUNTRIES = [
  "All",
  "India",
  "United States",
  "Colombia",
  "United Arab Emirates",
  "Indonesia",
  "China",
  "Kenya",
  "Qatar"
];

// Miller cylindrical projection matching WORLD_COUNTRIES (1000 x 500)
function projectCoords(lat: number, lng: number): [number, number] {
  const x = ((lng + 180) * (1000 / 360));
  const lat_c = Math.max(-65, Math.min(83, lat));
  const phi = (lat_c * Math.PI) / 180;
  const y_raw = 1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * phi));
  const y = 230 - y_raw * 135;
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}

export default function AboutClient() {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<ProjectLocation | null>(null);
  // The country outlines are ~125 KB, so load them only when the map is about to scroll into view.
  const [worldCountries, setWorldCountries] = useState<MapCountry[]>([]);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const load = () => import("./world-map-data").then((m) => setWorldCountries(m.WORLD_COUNTRIES));
    if (!("IntersectionObserver" in window)) {
      load();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          load();
        }
      },
      { rootMargin: "600px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCountry === "All") return GLOBAL_PROJECTS;
    return GLOBAL_PROJECTS.filter((p) => p.country === selectedCountry);
  }, [selectedCountry]);

  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        {/* Full-width official banner matching live site */}
        <section className="about-hero-banner" aria-label="About McD BERL banner">
          <Image
            src="/assets/about/about-team-illustration.jpg"
            alt="McD BERL - Leading MEP, Green Buildings and Sustainability Consultants"
            fill
            priority
            sizes="100vw"
          />
        </section>

        {/* Section 1: Who we are */}
        <section className="about-who-section page-shell">
          <div>
            <p className="eyebrow">Who we are</p>
            <h1>Engineering a better way to build.</h1>
          </div>
          <div className="about-who-body">
            <p>
              With over two decades of experience in designing self-sustainable, net-zero built environments and MEP systems, McD BERL is at the forefront of engineering innovation.
            </p>
            <p>
              We specialize in creating highly resource-efficient built environments that deliver net positive water and energy outcomes. Our approach not only minimizes capital expenditure and operational expenses but also reduces maintenance costs significantly. Our engineers have pioneered the design of some of the world’s lowest energy-consuming buildings, setting new standards for sustainability and efficiency.
            </p>
          </div>
        </section>

        {/* Section 2: Values & Mission */}
        <section className="about-values-mission-section page-shell">
          <div className="about-vm-grid">
            {/* Values Card */}
            <div className="about-vm-card values-card">
              <p className="eyebrow">Core Principles</p>
              <h2>Values</h2>
              <p>
                Every project we work on, the design we deliver, and the insights we share stem from a holistic foundation of our core values:
              </p>
              <ul className="about-values-list">
                {[
                  { num: "01", name: "Innovation", desc: "Pioneering non-conventional MEP and passive building physics" },
                  { num: "02", name: "Integrity", desc: "Uncompromising precision in simulations, audit, and client delivery" },
                  { num: "03", name: "Efficiency", desc: "Optimizing life-cycle resource use across every engineered system" },
                  { num: "04", name: "Collaboration", desc: "Partnering seamlessly with architects, builders, and developers" },
                  { num: "05", name: "Commitment to a truly sustainable world", desc: "Restoring natural ecosystems and driving the net-positive transition" }
                ].map((val) => (
                  <li key={val.num} className="about-value-item">
                    <span className="about-value-num">{val.num}</span>
                    <span>{val.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission Card */}
            <div className="about-vm-card mission-card">
              <p className="eyebrow">Mission</p>
              <h2>Leading the global transition to net positive built environments.</h2>
              <p>
                We lead the way to a resource-efficient, net-positive world where communities thrive, developers unlock exponential lifecycle value, and built assets operate as active producers of clean energy and recycled water.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: What can we do for you */}
        <AboutOutcomes />

        {/* Section 4: Our Approach */}
        <AboutApproach />

        {/* Section 5: Our Global Footprint */}
        <section className="about-footprint-section page-shell">
          <div className="about-section-header">
            <p className="eyebrow">International Reach</p>
            <h2>Our Global Footprint</h2>
            <p>
              With pioneering projects across 8 countries, McD BERL shapes sustainable policy, master plans, and high-performance landmarks worldwide.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="footprint-filter-bar">
            {COUNTRIES.map((c) => {
              const count = c === "All" ? GLOBAL_PROJECTS.length : GLOBAL_PROJECTS.filter((p) => p.country === c).length;
              return (
                <button
                  key={c}
                  type="button"
                  className={`footprint-filter-btn ${selectedCountry === c ? "is-active" : ""}`}
                  aria-pressed={selectedCountry === c}
                  onClick={() => setSelectedCountry(c)}
                >
                  {c} ({count})
                </button>
              );
            })}
          </div>

          {/* Interactive World Map SVG */}
          <div className="footprint-map-wrapper" ref={mapRef}>
            <svg
              className="footprint-map-svg"
              viewBox="0 0 1000 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Interactive world map showing McD BERL global project footprint"
            >
              <defs>
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ff5247" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ff5247" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Subtle navigation graticule / grid lines */}
              <g stroke="rgba(255,255,255,0.06)" strokeDasharray="3 4" strokeWidth="0.8">
                <line x1="0" y1="120" x2="1000" y2="120" />
                <line x1="0" y1="230" x2="1000" y2="230" stroke="rgba(255,255,255,0.12)" />
                <line x1="0" y1="340" x2="1000" y2="340" />
                <line x1="250" y1="0" x2="250" y2="500" />
                <line x1="500" y1="0" x2="500" y2="500" stroke="rgba(255,255,255,0.12)" />
                <line x1="750" y1="0" x2="750" y2="500" />
              </g>

              {/* Realistic World Map Countries */}
              <g className="world-countries-group">
                {worldCountries.map((country, idx) => {
                  const isSelected = selectedCountry === country.name;
                  const isCountryActive = country.isActive;

                  return (
                    <path
                      key={`${country.iso}-${idx}`}
                      d={country.d}
                      className={`map-country-path ${isCountryActive ? "is-active-region" : ""} ${isSelected ? "is-selected-region" : ""}`}
                      onClick={() => {
                        if (country.isActive) {
                          setSelectedCountry(country.name);
                        }
                      }}
                      style={{
                        cursor: country.isActive ? "pointer" : "default"
                      }}
                    >
                      <title>{country.name}</title>
                    </path>
                  );
                })}
              </g>

              {/* Plotted Project Pins */}
              {GLOBAL_PROJECTS.map((proj) => {
                const [cx, cy] = projectCoords(proj.lat, proj.lng);
                const isMatch = selectedCountry === "All" || selectedCountry === proj.country;
                const isHovered = hoveredProject?.id === proj.id;

                return (
                  <g
                    key={proj.id}
                    className="map-pin-group"
                    onMouseEnter={() => setHoveredProject(proj)}
                    onMouseLeave={() => setHoveredProject(null)}
                    style={{ cursor: "pointer", transition: "all 0.25s ease" }}
                  >
                    {isMatch && (
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isHovered ? 18 : 10}
                        fill="url(#mapGlow)"
                        opacity={isHovered ? 1 : 0.6}
                      />
                    )}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isMatch ? (isHovered ? 5.5 : 3.5) : 2}
                      fill={isMatch ? "#ff5247" : "#556f77"}
                      stroke="#ffffff"
                      strokeWidth={isMatch ? 1.5 : 0.5}
                    />
                  </g>
                );
              })}

              {/* Tooltip on hover */}
              {hoveredProject && (() => {
                const [cx, cy] = projectCoords(hoveredProject.lat, hoveredProject.lng);
                const tipY = cy > 70 ? cy - 24 : cy + 30;
                const tipX = Math.min(840, Math.max(160, cx));
                return (
                  <g transform={`translate(${tipX}, ${tipY})`} pointerEvents="none">
                    <rect
                      x="-140"
                      y="-22"
                      width="280"
                      height="38"
                      rx="6"
                      fill="#0b1a1f"
                      stroke="#ff5247"
                      strokeWidth="1.2"
                    />
                    <text
                      x="0"
                      y="-4"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="11.5"
                      fontFamily="system-ui, sans-serif"
                      fontWeight="700"
                    >
                      {hoveredProject.name}
                    </text>
                    <text
                      x="0"
                      y="10"
                      textAnchor="middle"
                      fill="#ff8e87"
                      fontSize="9.5"
                      fontFamily="system-ui, sans-serif"
                    >
                      {hoveredProject.country} • {hoveredProject.category}
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

          {/* Project Cards Grid */}
          <div className="footprint-projects-grid">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="footprint-project-card"
                onMouseEnter={() => setHoveredProject(proj)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div>
                  <div className="footprint-project-top">
                    <span className="footprint-country-tag">{proj.country}</span>
                  </div>
                  <h3>{proj.name}</h3>
                </div>
                <p>{proj.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Contact Callout */}
        <section className="callout-band">
          <div className="page-shell">
            <p className="eyebrow">Collaborate With Us</p>
            <h2>Ready to pioneer your next net-positive project?</h2>
            <Link href="/contact/" className="form-submit" style={{ textDecoration: "none", display: "inline-block" }}>
              Start the conversation <span>→</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
