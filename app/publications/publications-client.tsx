"use client";

import React, { Suspense, useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";
import type { PublicationItem } from "./publications-data";
import { articleUrl } from "../../lib/site";

// Only the fields the cards use, so the full dataset stays on the server.
export type PublicationCard = Pick<PublicationItem, "id" | "slug" | "title" | "badge" | "date" | "excerpt" | "displayImage">;

function PublicationsView({ posts, typeParam }: { posts: PublicationCard[]; typeParam: string | null }) {

  const [activeType, setActiveType] = useState<"All" | "Blog" | "Article">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(12);

  useEffect(() => {
    if (typeParam === "Blog" || typeParam === "Article") {
      setActiveType(typeParam);
    }
  }, [typeParam]);

  const filteredPosts = useMemo(() => {
    return posts.filter((item) => {
      // Filter by type
      const matchType =
        activeType === "All" ||
        item.badge.toLowerCase() === activeType.toLowerCase();

      // Filter by search query
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q) ||
        item.badge.toLowerCase().includes(q);

      return matchType && matchSearch;
    });
  }, [posts, activeType, searchQuery]);

  const visiblePosts = useMemo(() => {
    return filteredPosts.slice(0, displayCount);
  }, [filteredPosts, displayCount]);

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 12);
  };

  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        {/* Header Hero Section matching https://mcdberl.com/articles-and-blog/ */}
        <section className="publications-hero page-shell">
          <div className="publications-hero-content">
            <p className="eyebrow publications-eyebrow">Publications & Thought Leadership</p>
            <h1>Articles and Blogs</h1>
            <p className="publications-hero-sub">
              Get expert insights on sustainable building design, MEP systems, energy efficiency, and environmental policies with in-depth articles on green construction, innovative techniques, and industry regulations.
            </p>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <section className="publications-controls page-shell">
          <div className="publications-type-filters">
            <button
              type="button"
              className={`pub-filter-pill ${activeType === "All" ? "is-active" : ""}`}
              onClick={() => {
                setActiveType("All");
                setDisplayCount(12);
              }}
            >
              All Publications ({posts.length})
            </button>
            <button
              type="button"
              className={`pub-filter-pill ${activeType === "Blog" ? "is-active" : ""}`}
              onClick={() => {
                setActiveType("Blog");
                setDisplayCount(12);
              }}
            >
              Blogs ({posts.filter((p) => p.badge.toLowerCase() === "blog").length})
            </button>
            <button
              type="button"
              className={`pub-filter-pill ${activeType === "Article" ? "is-active" : ""}`}
              onClick={() => {
                setActiveType("Article");
                setDisplayCount(12);
              }}
            >
              Articles ({posts.filter((p) => p.badge.toLowerCase() === "article").length})
            </button>
          </div>

          <div className="publications-search-box">
            <input
              type="search"
              placeholder="Search by topic, keyword, or system (e.g. water, solar, HVAC, CFD)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setDisplayCount(12);
              }}
              className="pub-search-input"
            />
          </div>
        </section>

        {/* Publications Grid */}
        <section className="publications-grid-section page-shell">
          {filteredPosts.length === 0 ? (
            <div className="publications-empty-state">
              <p>No publications found matching &ldquo;{searchQuery}&rdquo;.</p>
              <button
                type="button"
                className="pub-reset-btn"
                onClick={() => {
                  setSearchQuery("");
                  setActiveType("All");
                }}
              >
                Clear search & filters
              </button>
            </div>
          ) : (
            <div className="publications-grid">
              {visiblePosts.map((post) => (
                <article key={post.id} className="pub-card">
                  <a
                    href={articleUrl(post.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pub-card-image-link"
                    tabIndex={-1}
                  >
                    <div className="pub-card-image-wrap">
                      <Image
                        src={post.displayImage || "/assets/about/about-hero-banner.jpg"}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="pub-card-img"
                        unoptimized={post.displayImage?.startsWith("http")}
                      />
                      <span className={`pub-card-badge ${post.badge.toLowerCase() === "blog" ? "badge-blog" : "badge-article"}`}>
                        {post.badge}
                      </span>
                    </div>
                  </a>

                  <div className="pub-card-content">
                    {post.date && (
                      <span className="pub-card-date">{post.date}</span>
                    )}
                    <h3 className="pub-card-title">
                      <a href={articleUrl(post.slug)} target="_blank" rel="noopener noreferrer">
                        {post.title}
                      </a>
                    </h3>
                    <p className="pub-card-excerpt">{post.excerpt}</p>
                    <div className="pub-card-footer">
                      <a
                        href={articleUrl(post.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pub-card-read-more"
                      >
                        Read More »
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > displayCount && (
            <div className="publications-pagination">
              <button
                type="button"
                className="form-submit pub-load-more"
                onClick={handleLoadMore}
              >
                Load More Articles ({filteredPosts.length - displayCount} remaining) <span>↓</span>
              </button>
            </div>
          )}
        </section>

        {/* Bottom Banner */}
        <section className="callout-band">
          <div className="page-shell">
            <p className="eyebrow">Have a Question?</p>
            <h2>Explore how our research translates to your building brief.</h2>
            <Link
              href="/contact/"
              className="form-submit"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              Get in touch with our team <span>→</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function PublicationsWithParams({ posts }: { posts: PublicationCard[] }) {
  const searchParams = useSearchParams();
  return <PublicationsView posts={posts} typeParam={searchParams.get("type")} />;
}

// The fallback is the full list without URL filters, so the page is in the server HTML
// instead of showing a loading message until JavaScript runs.
export default function PublicationsClient({ posts }: { posts: PublicationCard[] }) {
  return (
    <Suspense fallback={<PublicationsView posts={posts} typeParam={null} />}>
      <PublicationsWithParams posts={posts} />
    </Suspense>
  );
}
