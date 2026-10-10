"use client";

import { useState, useMemo } from "react";
import { useDialog } from "../../lib/use-dialog";
import Image from "next/image";
import Link from "next/link";
import { NEWS_FEATURES_DATA, NewsItem } from "../../lib/news-features-data";

const CATEGORIES = [
  "All",
  "Conclaves & Summits",
  "Academic & Workshops",
  "Industry Forums",
  "Press & Publications",
] as const;

export default function NewsFeaturesClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalItem, setActiveModalItem] = useState<NewsItem | null>(null);
  const dialogRef = useDialog<HTMLDivElement>(activeModalItem !== null, () => setActiveModalItem(null));

  const filteredItems = useMemo(() => {
    return NEWS_FEATURES_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="news-page-root">
      {/* Hero Section */}
      <section className="news-hero-section">
        <div className="news-hero-bg">
          <Image
            src="/assets/news-and-features/hero-banner.avif"
            alt="McD BERL News and Features Banner"
            fill
            priority
            sizes="100vw"
            className="news-hero-img"
          />
          <div className="news-hero-overlay" />
        </div>

        <div className="news-hero-content site-container">
          <span className="news-hero-eyebrow">MEDIA & INDUSTRY UPDATES</span>
          <h1 className="news-hero-title">News That Reflects Our Impact</h1>
          <p className="news-hero-subtitle">
            Stay informed with the latest media features, industry highlights, and recognitions.
            Discover how McD BERL is shaping the future of sustainable infrastructure,
            smart engineering, and built-environment innovation.
          </p>

          <div className="news-hero-stats">
            <div className="news-stat-pill">
              <strong>11+</strong> Featured Engagements
            </div>
            <div className="news-stat-pill">
              <strong>Global & National</strong> Forums
            </div>
            <div className="news-stat-pill">
              <strong>Zero Carbon</strong> Advocacy
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="news-content-section site-container">
        {/* Filter & Search Bar */}
        <div className="news-toolbar">
          <div className="news-filter-tabs" role="tablist" aria-label="Filter news by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`news-tab-btn ${selectedCategory === cat ? "is-active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
                {cat === "All" && <span className="news-tab-count"> ({NEWS_FEATURES_DATA.length})</span>}
              </button>
            ))}
          </div>

          <div className="news-search-box">
            <svg
              className="news-search-icon"
              width="18"
              height="18"
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
              placeholder="Search news, topics, events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="news-search-input"
              aria-label="Search news articles"
            />
            {searchQuery && (
              <button
                type="button"
                className="news-clear-btn"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Results summary */}
        <div className="news-results-count">
          Showing {filteredItems.length} of {NEWS_FEATURES_DATA.length} updates
          {selectedCategory !== "All" && ` in "${selectedCategory}"`}
          {searchQuery && ` matching "${searchQuery}"`}
        </div>

        {/* Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="news-cards-grid">
            {filteredItems.map((item, idx) => (
              <article key={item.id} className="news-card">
                <div className="news-card-media">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={380}
                    className="news-card-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="news-card-badge-wrap">
                    <span className="news-card-category-badge">{item.category}</span>
                    <span className="news-card-tag-badge">{item.tag}</span>
                  </div>
                </div>

                <div className="news-card-body">
                  <h2 className="news-card-title">{item.title}</h2>
                  <p className="news-card-desc">
                    {item.description.length > 210
                      ? `${item.description.slice(0, 210)}...`
                      : item.description}
                  </p>

                  <div className="news-card-actions">
                    <button
                      type="button"
                      className="news-read-modal-btn"
                      onClick={() => setActiveModalItem(item)}
                      aria-label={`Read full summary for ${item.title}`}
                    >
                      <span>Read Overview</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </button>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="news-card-link-btn"
                      aria-label={`${item.linkText} (opens in a new tab)`}
                    >
                      <span>{item.linkText}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="news-empty-state">
            <div className="news-empty-icon">📰</div>
            <h3>No updates found</h3>
            <p>We couldn't find any news or features matching your current search criteria.</p>
            <button
              type="button"
              className="news-reset-btn"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* CTA / Contact Section */}
        <div className="news-cta-banner">
          <div className="news-cta-text">
            <h3>Media Inquiries & Speaking Invitations</h3>
            <p>
              Looking to feature McD BERL in your publication, or invite our experts for keynote
              addresses, masterclasses, and panels on sustainable engineering?
            </p>
          </div>
          <div className="news-cta-action">
            <Link href="/contact/" className="news-cta-btn">
              Get in Touch with Our Team
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Modal Dialog for full details */}
      {activeModalItem && (
        <div
          className="news-modal-overlay"
          onClick={() => setActiveModalItem(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            ref={dialogRef}
            tabIndex={-1}
            className="news-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="news-modal-close"
              onClick={() => setActiveModalItem(null)}
              aria-label="Close dialog"
            >
              ×
            </button>

            <div className="news-modal-media">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                width={800}
                height={450}
                className="news-modal-img"
              />
            </div>

            <div className="news-modal-content">
              <div className="news-modal-meta">
                <span className="news-card-category-badge">{activeModalItem.category}</span>
                <span className="news-card-tag-badge">{activeModalItem.tag}</span>
              </div>

              <h2 id="modal-title" className="news-modal-title">
                {activeModalItem.title}
              </h2>

              <div className="news-modal-desc">
                {activeModalItem.description.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="news-modal-footer">
                <a
                  href={activeModalItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-modal-action-btn"
                >
                  <span>{activeModalItem.linkText}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <button
                  type="button"
                  className="news-modal-dismiss-btn"
                  onClick={() => setActiveModalItem(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
