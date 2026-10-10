"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import {
  MEDIA_VIDEOS,
  MEDIA_CATEGORIES,
  type MediaVideoItem
} from "../../lib/media-data";

export default function MediaClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredVideos = useMemo(() => {
    return MEDIA_VIDEOS.filter((video) => {
      const matchCat =
        selectedCategory === "All" || video.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        video.title.toLowerCase().includes(q) ||
        video.description.toLowerCase().includes(q) ||
        video.tag.toLowerCase().includes(q);

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="media-page-root">
      {/* Hero Section matching mcdberl.com/media/ */}
      <section className="media-hero-section">
        <div className="media-hero-bg">
          <Image
            src="/assets/media/media-hero.jpg"
            alt="Media - McD BERL"
            fill
            priority
            className="media-hero-img"
            sizes="100vw"
          />
          <div className="media-hero-overlay" />
        </div>
        <div className="media-hero-content">
          <p className="media-hero-eyebrow">Curated Visual Library</p>
          <h1 className="media-hero-title">Media</h1>
          <p className="media-hero-subtitle">
            Explore our curated video library featuring insights on sustainable building design, MEP systems, and energy efficiency, delivering innovative solutions and industry advancements through engaging visual content.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="media-content-shell">
        {/* Controls Bar: Categories & Search */}
        <div className="media-controls-bar">
          <div className="media-category-tabs">
            {MEDIA_CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? MEDIA_VIDEOS.length
                  : MEDIA_VIDEOS.filter((v) => v.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`media-tab-btn ${isActive ? "is-active" : ""}`}
                >
                  <span>{cat}</span>
                  <span className="media-tab-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="media-search-wrapper">
            <svg
              className="media-search-icon"
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
              placeholder="Search videos by topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="media-search-input"
              aria-label="Search media videos"
            />
            {searchQuery && (
              <button
                type="button"
                className="media-search-clear"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="media-results-info">
          <span>
            Showing <strong>{filteredVideos.length}</strong> of {MEDIA_VIDEOS.length} videos
          </span>
          {searchQuery && (
            <span className="media-filter-tag">
              Filtered by: &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>

        {/* Video Cards Grid (3 Columns) */}
        {filteredVideos.length > 0 ? (
          <div className="media-video-grid">
            {filteredVideos.map((video) => (
              <article key={video.id} className="media-video-card">
                <div className="media-player-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="media-iframe"
                  />
                </div>

                <div className="media-card-body">
                  <div className="media-card-meta">
                    <span className="media-tag-badge">{video.tag}</span>
                    <span className="media-author-label">{video.author}</span>
                  </div>

                  <h2 className="media-card-title">{video.title}</h2>
                  <p className="media-card-desc">{video.description}</p>

                  <div className="media-card-footer">
                    <a
                      href={`https://youtu.be/${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="media-yt-link"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="yt-icon"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span>Watch on YouTube ↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="media-empty-state">
            <h3>No videos found</h3>
            <p>
              We couldn&apos;t find any videos matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              className="media-reset-btn"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* YouTube Channel Banner */}
        <section className="media-channel-banner">
          <div className="media-channel-content">
            <div className="media-channel-badge">Official YouTube Channel</div>
            <h2>Subscribe to @mcd-berl</h2>
            <p>
              Stay updated with our latest documentaries, masterclasses, and project walkthroughs on passive building physics and sustainable MEP engineering.
            </p>
            <a
              href="https://youtube.com/@mcd-berl"
              target="_blank"
              rel="noopener noreferrer"
              className="media-subscribe-btn"
            >
              Visit YouTube Channel <span>↗</span>
            </a>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="media-cta-banner">
          <div className="media-cta-inner">
            <div className="media-cta-text">
              <p className="eyebrow">Press & Speaking Engagements</p>
              <h2>Have a media inquiry or conference invitation?</h2>
              <p>
                Our engineering leadership regularly shares insights at national and global forums on decarbonization, climate resilience, and building sciences.
              </p>
            </div>
            <div className="media-cta-actions">
              <Link href="/contact/" className="media-cta-btn">
                Contact Media Team <span>↗</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
