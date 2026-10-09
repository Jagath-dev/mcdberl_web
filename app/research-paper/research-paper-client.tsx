"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import {
  RESEARCH_PAPERS,
  RESEARCH_CATEGORIES,
  type ResearchPaperItem
} from "../../lib/research-papers-data";

export default function ResearchPaperClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalPaper, setActiveModalPaper] = useState<ResearchPaperItem | null>(null);

  const filteredPapers = useMemo(() => {
    return RESEARCH_PAPERS.filter((paper) => {
      const matchCat =
        selectedCategory === "All" || paper.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        paper.title.toLowerCase().includes(q) ||
        paper.excerpt.toLowerCase().includes(q) ||
        paper.fullAbstract.toLowerCase().includes(q) ||
        paper.category.toLowerCase().includes(q);

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="research-page-root">
      {/* Hero Section matching mcdberl.com/research-paper/ */}
      <section className="research-hero-section">
        <div className="research-hero-bg">
          <Image
            src="/assets/research-paper/research-banner.jpg"
            alt="Our Research Works - McD BERL"
            fill
            priority
            className="research-hero-img"
            sizes="100vw"
          />
          <div className="research-hero-overlay" />
        </div>
        <div className="research-hero-content">
          <p className="research-hero-eyebrow">Scientific Inquiry &amp; Empirical Data</p>
          <h1 className="research-hero-title">Our Research Works</h1>
          <p className="research-hero-subtitle">
            Explore in-depth research on CO₂ emissions, the One Watt Building Challenge, and wet bulb temperature impacts, offering valuable insights into sustainability and environmental considerations in construction.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="research-content-shell">
        {/* Controls Bar: Category Filter & Search */}
        <div className="research-controls-bar">
          <div className="research-category-tabs">
            {RESEARCH_CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? RESEARCH_PAPERS.length
                  : RESEARCH_PAPERS.filter((p) => p.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`research-tab-btn ${isActive ? "is-active" : ""}`}
                >
                  <span>{cat}</span>
                  <span className="research-tab-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="research-search-wrapper">
            <svg
              className="research-search-icon"
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
              placeholder="Search papers or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="research-search-input"
              aria-label="Search research papers"
            />
            {searchQuery && (
              <button
                type="button"
                className="research-search-clear"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Info Counter */}
        <div className="research-results-info">
          <span>
            Showing <strong>{filteredPapers.length}</strong> of {RESEARCH_PAPERS.length} research publications
          </span>
          {searchQuery && (
            <span className="research-filter-tag">
              Filtered by: &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>

        {/* Papers Grid */}
        {filteredPapers.length > 0 ? (
          <div className="research-cards-grid">
            {filteredPapers.map((paper) => (
              <article key={paper.id} className="research-paper-card">
                <div className="research-card-cover-wrap">
                  <Image
                    src={paper.image}
                    alt={paper.title}
                    width={800}
                    height={500}
                    className="research-card-img"
                  />
                  <div className="research-card-cover-overlay">
                    <button
                      type="button"
                      className="research-quick-view-btn"
                      onClick={() => setActiveModalPaper(paper)}
                    >
                      Read Abstract <span>↗</span>
                    </button>
                  </div>
                </div>

                <div className="research-card-body">
                  <div className="research-card-meta">
                    <span className="research-badge">{paper.category}</span>
                    <span className="research-meta-item">
                      {paper.publishedYear} • {paper.readTime}
                    </span>
                  </div>

                  <h2 className="research-card-title">{paper.title}</h2>
                  <p className="research-card-excerpt">{paper.excerpt}</p>

                  <div className="research-key-findings">
                    <p className="findings-label">Core Findings</p>
                    <ul className="findings-list">
                      {paper.keyFindings.slice(0, 2).map((kf, kIdx) => (
                        <li key={kIdx}>{kf}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="research-card-footer">
                    <button
                      type="button"
                      className="research-read-more-btn"
                      onClick={() => setActiveModalPaper(paper)}
                    >
                      View Full Abstract &amp; Findings <span>→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="research-empty-state">
            <h3>No research papers found</h3>
            <p>
              We couldn&apos;t find any papers matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              className="research-reset-btn"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Academic & Laboratory Collaboration Banner */}
        <section className="research-collab-banner">
          <div className="research-collab-inner">
            <div className="research-collab-text">
              <p className="eyebrow">Academic &amp; Industry Partnerships</p>
              <h2>Partner With Our Research Laboratory</h2>
              <p>
                McD BERL actively collaborates with academic institutions, think tanks, and policy bodies on climate micro-simulation, material performance benchmarking, and net-zero field studies.
              </p>
            </div>
            <div className="research-collab-actions">
              <Link href="/contact" className="research-collab-btn">
                Collaborate On Research <span>↗</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Abstract Modal Popup */}
      {activeModalPaper && (
        <div
          className="research-modal-backdrop"
          onClick={() => setActiveModalPaper(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-paper-title"
        >
          <div
            className="research-modal-window"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="research-modal-close"
              onClick={() => setActiveModalPaper(null)}
              aria-label="Close dialog"
            >
              ✕
            </button>

            <div className="research-modal-header">
              <span className="research-modal-badge">{activeModalPaper.category}</span>
              <h3 id="modal-paper-title" className="research-modal-title">
                {activeModalPaper.title}
              </h3>
              <p className="research-modal-meta">
                Published by McD BERL Research Laboratory • {activeModalPaper.publishedYear} • {activeModalPaper.readTime}
              </p>
            </div>

            <div className="research-modal-body">
              <div className="modal-section-block">
                <h4>Executive Abstract</h4>
                <p className="modal-abstract-text">{activeModalPaper.fullAbstract}</p>
              </div>

              <div className="modal-section-block">
                <h4>Key Empirical Findings</h4>
                <ul className="modal-findings-list">
                  {activeModalPaper.keyFindings.map((finding, idx) => (
                    <li key={idx}>{finding}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-citation-box">
                <span className="citation-label">Suggested Citation</span>
                <code>
                  McD BERL Research Laboratory ({activeModalPaper.publishedYear}). &ldquo;{activeModalPaper.title}&rdquo;. Built Environment Research Publication Series.
                </code>
              </div>
            </div>

            <div className="research-modal-footer">
              <Link
                href="/contact"
                className="modal-request-btn"
                onClick={() => setActiveModalPaper(null)}
              >
                Request Full Technical Paper <span>↗</span>
              </Link>
              <button
                type="button"
                className="modal-close-action"
                onClick={() => setActiveModalPaper(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
