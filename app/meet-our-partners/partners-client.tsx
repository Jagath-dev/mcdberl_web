"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { PARTNERS_DATA, type PartnerDetail } from "../../lib/partners-data";

const CATEGORIES = [
  "All",
  "Real Estate & Communities",
  "Architecture & Design",
  "Tech & Enterprise",
  "Institutions & Hospitality"
] as const;

export default function MeetOurPartnersClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPartners = useMemo(() => {
    return PARTNERS_DATA.filter((partner) => {
      const matchesCategory =
        selectedCategory === "All" || partner.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        partner.name.toLowerCase().includes(q) ||
        partner.sector.toLowerCase().includes(q) ||
        partner.description.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="partners-page-root">
      {/* Hero Banner Section */}
      <section className="partners-hero-section">
        <div className="partners-hero-bg">
          <Image
            src="/assets/partners/meet-our-partners-banner.webp"
            alt="Meet Our Partners McD BERL"
            fill
            priority
            className="partners-hero-img"
            sizes="100vw"
          />
          <div className="partners-hero-overlay" />
        </div>
        <div className="partners-hero-content">
          <p className="partners-hero-eyebrow">Alliances in Excellence</p>
          <h1 className="partners-hero-title">Meet Our Partners</h1>
          <p className="partners-hero-subtitle">
            Collaborating with industry pioneers, developers, institutions, and architects to engineer high-performance, regenerative built environments.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="partners-content-shell">
        {/* Filter and Search Bar */}
        <div className="partners-controls-bar">
          <div className="partners-category-tabs">
            {CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? PARTNERS_DATA.length
                  : PARTNERS_DATA.filter((p) => p.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`partners-tab-btn ${isActive ? "is-active" : ""}`}
                >
                  <span>{cat}</span>
                  <span className="partners-tab-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="partners-search-wrapper">
            <svg
              className="partners-search-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search partner or focus..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="partners-search-input"
              aria-label="Search partners"
            />
            {searchQuery && (
              <button
                type="button"
                className="partners-search-clear"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="partners-results-info">
          <span>
            Showing <strong>{filteredPartners.length}</strong> of{" "}
            {PARTNERS_DATA.length} partners
          </span>
          {searchQuery && (
            <span className="partners-filter-tag">
              Filtered by: &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>

        {/* Partners Grid */}
        {filteredPartners.length > 0 ? (
          <div className="partners-card-grid">
            {filteredPartners.map((partner) => (
              <article key={partner.id} className="partner-item-card">
                <div className="partner-logo-container">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={180}
                    height={72}
                    className="partner-card-logo"
                  />
                </div>

                <div className="partner-card-content">
                  <div className="partner-meta-header">
                    <span className="partner-category-badge">
                      {partner.category}
                    </span>
                    <h2 className="partner-title">{partner.name}</h2>
                    <p className="partner-sector-label">{partner.sector}</p>
                  </div>

                  <p className="partner-desc-text">{partner.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="partners-empty-state">
            <h3>No partners found</h3>
            <p>
              We couldn&apos;t find any partners matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              className="partners-reset-btn"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Call to Action Section */}
        <section className="partners-cta-banner">
          <div className="partners-cta-inner">
            <div className="partners-cta-text">
              <p className="eyebrow">Collaborate With Us</p>
              <h2>Have a landmark project in mind?</h2>
              <p>
                Join our network of forward-thinking partners pushing the boundaries of sustainable engineering, climate resilience, and building physics.
              </p>
            </div>
            <div className="partners-cta-actions">
              <Link href="/contact" className="partners-cta-btn">
                Contact McD BERL <span>↗</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
