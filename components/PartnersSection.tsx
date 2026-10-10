"use client";

import React, { useState } from "react";
import { useDialog } from "../lib/use-dialog";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: "Tech & Finance" | "Real Estate & Living" | "Architecture & Planning";
  sector: string;
  highlight: string;
  featuredStat?: string;
}

export const PARTNERS: Partner[] = [
  {
    id: "google",
    name: "Google",
    logo: "/assets/partners/cards/google.png",
    category: "Tech & Finance",
    sector: "Technology & High-Performance Campuses",
    highlight: "Engineering high-efficiency campus systems, smart cooling & net-positive carbon facilities.",
    featuredStat: "Global Campuses"
  },
  {
    id: "ifc",
    name: "IFC",
    logo: "/assets/partners/cards/ifc.png",
    category: "Tech & Finance",
    sector: "World Bank Group / Sustainable Finance",
    highlight: "Collaborating on EDGE green building initiatives and national sustainable policy guidelines.",
    featuredStat: "World Bank Group"
  },
  {
    id: "infosys",
    name: "Infosys",
    logo: "/assets/partners/cards/infosys.png",
    category: "Tech & Finance",
    sector: "Enterprise Technology & IT Campuses",
    highlight: "Long-standing collaboration on energy simulation, smart automation, and low-OPEX campus designs.",
    featuredStat: "Nagpur & Mysore"
  },
  {
    id: "wipro",
    name: "Wipro",
    logo: "/assets/partners/cards/wipro.png",
    category: "Tech & Finance",
    sector: "Enterprise Tech & Sustainability",
    highlight: "Integrated MEP engineering for resilient corporate campuses and zero-discharge water loops.",
    featuredStat: "IT Infrastructure"
  },
  {
    id: "goldman-sachs",
    name: "Goldman Sachs",
    logo: "/assets/partners/cards/goldman-sachs.png",
    category: "Tech & Finance",
    sector: "Global Financial Operations",
    highlight: "LEED Platinum engineering, advanced indoor environmental quality, and high-uptime resilience.",
    featuredStat: "Global Facilities"
  },
  {
    id: "k-raheja",
    name: "K Raheja",
    logo: "/assets/partners/cards/k-raheja.png",
    category: "Real Estate & Living",
    sector: "Commercial Real Estate & IT Parks",
    highlight: "Engineering grade-A commercial complexes, district cooling and life-cycle energy reduction.",
    featuredStat: "Commercial Campuses"
  },
  {
    id: "aga-khan-group",
    name: "Aga Khan Group",
    logo: "/assets/partners/cards/aga-khan-group.png",
    category: "Real Estate & Living",
    sector: "Institutional & Cultural Development",
    highlight: "Sustainable conservation engineering, cultural institutions, and community resilience.",
    featuredStat: "Civic & Cultural"
  },
  {
    id: "puravankara",
    name: "Puravankara",
    logo: "/assets/partners/cards/puravankara.png",
    category: "Real Estate & Living",
    sector: "Urban Residential Communities",
    highlight: "Smart residential townships, smart water metering, and decentralized resource systems.",
    featuredStat: "Residential Towns"
  },
  {
    id: "taj-hotels",
    name: "Taj Hotels",
    logo: "/assets/partners/cards/taj-hotels.png",
    category: "Real Estate & Living",
    sector: "Sustainable Luxury Hospitality",
    highlight: "Decarbonized guest comfort, high-efficiency thermal systems, and water conservation.",
    featuredStat: "Luxury Hospitality"
  },
  {
    id: "lodha",
    name: "Lodha",
    logo: "/assets/partners/cards/lodha.png",
    category: "Real Estate & Living",
    sector: "Premium Real Estate Development",
    highlight: "Net-zero carbon residential towers, passive solar optimization, and advanced MEP.",
    featuredStat: "Urban Developments"
  },
  {
    id: "cnt-architects",
    name: "CnT Architects",
    logo: "/assets/partners/cards/cnt-architects.png",
    category: "Architecture & Planning",
    sector: "Architectural Design Practice",
    highlight: "Seamless integration between architectural expression and building performance systems.",
    featuredStat: "Design Practice"
  },
  {
    id: "biome",
    name: "Biome",
    logo: "/assets/partners/cards/biome.png",
    category: "Architecture & Planning",
    sector: "Ecological & Earth Architecture",
    highlight: "Bioclimatic design, earth construction, decentralized sanitation, and groundwater recharge.",
    featuredStat: "Ecological Living"
  },
  {
    id: "aparna",
    name: "Aparna",
    logo: "/assets/partners/cards/aparna.png",
    category: "Real Estate & Living",
    sector: "Gated Communities & Mixed Use",
    highlight: "Large-scale residential infrastructure, integrated utilities, and energy performance.",
    featuredStat: "Gated Communities"
  },
  {
    id: "ajmera",
    name: "Ajmera",
    logo: "/assets/partners/cards/ajmera.png",
    category: "Real Estate & Living",
    sector: "Urban Real Estate Infrastructure",
    highlight: "Resource-efficient high-density residential towers and long-term durability.",
    featuredStat: "High-Rise Living"
  },
  {
    id: "lt-realty",
    name: "L&T Realty",
    logo: "/assets/partners/cards/lt-realty.png",
    category: "Real Estate & Living",
    sector: "Infrastructure & Mixed-Use Developments",
    highlight: "Transit-oriented developments, resilient urban MEP, and smart infrastructure engineering.",
    featuredStat: "Mixed-Use Megaprojects"
  }
];

const CATEGORIES = [
  "All",
  "Tech & Finance",
  "Real Estate & Living",
  "Architecture & Planning"
] as const;

export default function PartnersSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "stream">("grid");
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  const filteredPartners = activeCategory === "All"
    ? PARTNERS
    : PARTNERS.filter((p) => p.category === activeCategory);

  // Focus, Tab, Escape and scroll handling for the partner pop-up
  const dialogRef = useDialog<HTMLDivElement>(selectedPartner !== null, () => setSelectedPartner(null));

  return (
    <section id="partners" className="partners section-shell" aria-label="Our Partners">
      {/* Header with Title and Mode Controls */}
      <div className="partners-header">
        <div>
          <p className="eyebrow partners-reveal">Trusted across disciplines</p>
          <h2 className="partners-reveal">
            Together, we build<br />what matters.
          </h2>
        </div>

        {/* View Mode Toggle */}
        <div className="partners-view-toggle partners-reveal">
          <button
            type="button"
            className={viewMode === "grid" ? "toggle-btn is-active" : "toggle-btn"}
            onClick={() => setViewMode("grid")}
            aria-pressed={viewMode === "grid"}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span>Grid</span>
          </button>
          <button
            type="button"
            className={viewMode === "stream" ? "toggle-btn is-active" : "toggle-btn"}
            onClick={() => setViewMode("stream")}
            aria-pressed={viewMode === "stream"}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="13 17 18 12 13 7"></polyline>
              <polyline points="6 17 11 12 6 7"></polyline>
            </svg>
            <span>Flow Stream</span>
          </button>
        </div>
      </div>

      {/* Category Filter Pills (in Grid View) */}
      <AnimatePresence mode="wait">
        {viewMode === "grid" && (
          <motion.div
            className="partner-filters"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {CATEGORIES.map((cat) => {
              const count = cat === "All" ? PARTNERS.length : PARTNERS.filter(p => p.category === cat).length;
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  className={isSelected ? "filter-pill is-active" : "filter-pill"}
                  aria-pressed={isSelected}
                  onClick={() => setActiveCategory(cat)}
                >
                  <span>{cat}</span>
                  <span className="pill-count">{count}</span>
                  {isSelected && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="filter-pill-bg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Area: Grid or Motion Marquee */}
      {viewMode === "grid" ? (
        <motion.div
          key="grid-view"
          className="partner-grid-motion"
          layout
        >
          <AnimatePresence mode="popLayout" initial={false}>
          {filteredPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              layout
              className="partner-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.03, ease: [0.25, 0.1, 0.25, 1] } }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedPartner(partner)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedPartner(partner);
                }
              }}
              aria-label={`View details for ${partner.name}`}
            >
              <div className="partner-card-inner">
                {/* Logo Image */}
                <div className="partner-logo-box">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={360}
                    height={144}
                    className="partner-logo-img"
                  />
                </div>

                {/* Company Name */}
                <div className="partner-card-body">
                  <h3 className="partner-name">{partner.name}</h3>
                  <p className="partner-sector">{partner.sector}</p>
                </div>

                {/* Accent red indicator line */}
                <div className="partner-hover-indicator" />
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Sector Rails: one scrolling rail per category */
        <motion.div
          key="stream-view"
          className="partner-rails"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {CATEGORIES.filter((c) => c !== "All").map((cat, railIndex) => {
            const railPartners = PARTNERS.filter((p) => p.category === cat);
            // Repeat short lists so the loop fills the rail, then double for a seamless -50% scroll
            const repeats = Math.max(2, Math.ceil(10 / railPartners.length));
            const loop: Partner[] = [];
            for (let i = 0; i < repeats; i++) loop.push(...railPartners);
            const items = [...loop, ...loop];
            return (
              <div className="partner-rail" key={cat}>
                <div className="partner-rail-label">
                  <span className="partner-rail-num">{String(railIndex + 1).padStart(2, "0")}</span>
                  <h3>{cat}</h3>
                  <span className="partner-rail-count">
                    {railPartners.length} partner{railPartners.length !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="partner-rail-window">
                  <div
                    className={`partner-rail-track${railIndex % 2 === 1 ? " is-reverse" : ""}`}
                    style={{ animationDuration: `${Math.max(36, items.length * 2.6)}s` }}
                  >
                    {items.map((partner, idx) => {
                      const isClone = idx >= railPartners.length;
                      return (
                        <button
                          type="button"
                          key={`${cat}-${partner.id}-${idx}`}
                          className="partner-rail-tile"
                          onClick={() => setSelectedPartner(partner)}
                          tabIndex={isClone ? -1 : 0}
                          aria-hidden={isClone ? true : undefined}
                          aria-label={`View details for ${partner.name}`}
                        >
                          <span className="partner-rail-logo">
                            <Image src={partner.logo} alt="" width={96} height={48} />
                          </span>
                          <span className="partner-rail-text">
                            <span className="partner-rail-name">{partner.name}</span>
                            <span className="partner-rail-sector">{partner.sector}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
          <p className="partner-rails-hint">Hover a rail to pause · select a partner for details</p>
        </motion.div>
      )}

      {/* Footer Link / CTA */}
      <div className="partners-footer partners-reveal">
        <Link className="text-link partners-cta" href="/meet-our-partners/">
          Know more about our partners
          <span className="arrow-motion" aria-hidden="true">↗</span>
        </Link>
      </div>

      {/* Interactive Detail Modal on Click */}
      <AnimatePresence>
        {selectedPartner && (
          <div
            className="partner-modal-backdrop"
            onClick={() => setSelectedPartner(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-partner-title"
          >
            <motion.div
              ref={dialogRef}
              tabIndex={-1}
              className="partner-modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedPartner(null)}
                aria-label="Close dialog"
              >
                ✕
              </button>

              <div className="modal-header">
                <div className="modal-logo-container">
                  <Image
                    src={selectedPartner.logo}
                    alt={`${selectedPartner.name} logo`}
                    width={100}
                    height={60}
                    className="modal-logo"
                  />
                </div>
                <div>
                  <span className="modal-tag">{selectedPartner.category}</span>
                  <h3 id="modal-partner-title" className="modal-title">{selectedPartner.name}</h3>
                  <p className="modal-sector">{selectedPartner.sector}</p>
                </div>
              </div>

              <div className="modal-body">
                <h4 className="modal-subheading">Engineering & Design Synergy</h4>
                <p className="modal-description">{selectedPartner.highlight}</p>

                {selectedPartner.featuredStat && (
                  <div className="modal-stat-badge">
                    <span className="stat-label">Key Focus Area</span>
                    <span className="stat-value">{selectedPartner.featuredStat}</span>
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <Link
                  href="/meet-our-partners/"
                  className="modal-action-btn"
                  onClick={() => setSelectedPartner(null)}
                >
                  Meet All Partners <span>↗</span>
                </Link>
                <a
                  href="#contact"
                  className="modal-secondary-btn"
                  onClick={() => setSelectedPartner(null)}
                >
                  Partner With Us
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
