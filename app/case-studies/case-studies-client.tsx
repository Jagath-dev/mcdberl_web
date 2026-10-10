"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  CASE_STUDIES_DATA,
  CASE_STUDIES_CATEGORIES,
  type CaseStudyItem
} from "../../lib/case-studies-data";

export default function CaseStudiesClient() {
  const [activeModalItem, setActiveModalItem] = useState<CaseStudyItem | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: ""
  });

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // simulate download or close after success
      setTimeout(() => {
        setActiveModalItem(null);
        setFormSubmitted(false);
        setFormData({ name: "", email: "", organization: "", phone: "", message: "" });
      }, 2500);
    }, 500);
  };

  const netZeroStudies = CASE_STUDIES_DATA.filter(
    (item) => item.category === "Net Zero Design"
  );
  const hpStudies = CASE_STUDIES_DATA.filter(
    (item) => item.category === "High Performance Buildings"
  );
  const coolingStudies = CASE_STUDIES_DATA.filter(
    (item) => item.category === "Cooling Cities"
  );

  return (
    <div className="casestudies-page-root">
      {/* Hero Banner */}
      <section className="casestudies-hero">
        <div className="casestudies-hero-bg">
          <Image
            src="/assets/case-studies/case-studies-hero.jpg"
            alt="Case Studies Banner - McD BERL"
            fill
            priority
            className="casestudies-hero-img"
            sizes="100vw"
          />
          <div className="casestudies-hero-overlay" />
        </div>
        <div className="casestudies-hero-content">
          <p className="casestudies-hero-eyebrow">Evidence & Performance</p>
          <h1 className="casestudies-hero-title">Case Studies</h1>
          <p className="casestudies-hero-subtitle">
            Measured outcomes, renewable microgrids, and net-zero engineering benchmarks delivered across academic campuses, corporate workspaces, and cooling cities.
          </p>
        </div>
      </section>

      {/* Category Quick Navigation Bar */}
      <div className="casestudies-nav-bar">
        <div className="casestudies-nav-inner">
          {CASE_STUDIES_CATEGORIES.map((cat) => (
            <button
              key={cat.sectionId}
              type="button"
              className="casestudies-nav-pill"
              onClick={() => handleScrollTo(cat.sectionId)}
            >
              <span>{cat.label}</span>
              <span className="casestudies-pill-arrow">↓</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="casestudies-container">
        {/* Section 1: Net Zero Design */}
        <section id="sec-netzero" className="casestudies-category-section">
          <div className="casestudies-category-header">
            <h2 className="casestudies-category-title">Net Zero Design</h2>
            <div className="casestudies-divider" />
          </div>

          <div className="casestudies-items-list">
            {netZeroStudies.map((study, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <article
                  key={study.id}
                  className={`casestudy-card-row ${isEven ? "is-reversed" : ""}`}
                >
                  <div className="casestudy-media-col">
                    {study.mediaType === "video" && (
                      <div className="casestudy-video-frame">
                        <iframe
                          src={`${study.mediaSrc}?rel=0`}
                          title={study.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="casestudy-iframe"
                        />
                      </div>
                    )}
                  </div>

                  <div className="casestudy-info-col">
                    <span className="casestudy-tag-badge">{study.tag}</span>
                    <h3 className="casestudy-item-title">{study.title}</h3>
                    <p className="casestudy-item-desc">{study.description}</p>

                    <div className="casestudy-highlights-box">
                      <p className="casestudy-highlights-label">Key Highlights</p>
                      <ul className="casestudy-highlights-list">
                        {study.keyHighlights.map((hl, hIdx) => (
                          <li key={hIdx}>{hl}</li>
                        ))}
                      </ul>
                    </div>

                    <button
                      type="button"
                      className="casestudy-download-btn"
                      onClick={() => setActiveModalItem(study)}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      <span>Download</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Section 2: High Performance Buildings */}
        <section id="sec-hpbuildings" className="casestudies-category-section">
          <div className="casestudies-category-header">
            <h2 className="casestudies-category-title">High Performance Buildings</h2>
            <div className="casestudies-divider" />
          </div>

          <div className="casestudies-items-list">
            {hpStudies.map((study) => (
              <article key={study.id} className="casestudy-card-row">
                <div className="casestudy-media-col">
                  {study.mediaType === "video" && (
                    <div className="casestudy-video-frame">
                      <iframe
                        src={`${study.mediaSrc}?rel=0`}
                        title={study.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="casestudy-iframe"
                      />
                    </div>
                  )}
                </div>

                <div className="casestudy-info-col">
                  <span className="casestudy-tag-badge">{study.tag}</span>
                  <h3 className="casestudy-item-title">{study.title}</h3>
                  <p className="casestudy-item-desc">{study.description}</p>

                  <div className="casestudy-highlights-box">
                    <p className="casestudy-highlights-label">Key Highlights</p>
                    <ul className="casestudy-highlights-list">
                      {study.keyHighlights.map((hl, hIdx) => (
                        <li key={hIdx}>{hl}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    className="casestudy-download-btn"
                    onClick={() => setActiveModalItem(study)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>Download</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: Cooling Cities */}
        <section id="sec-coolcities" className="casestudies-category-section">
          <div className="casestudies-category-header">
            <h2 className="casestudies-category-title">Cooling Cities</h2>
            <div className="casestudies-divider" />
          </div>

          <div className="casestudies-items-list">
            {coolingStudies.map((study) => (
              <article key={study.id} className="casestudy-card-row">
                <div className="casestudy-media-col">
                  {study.mediaType === "image" && (
                    <div className="casestudy-image-frame">
                      <Image
                        src={study.mediaSrc}
                        alt={study.title}
                        width={1200}
                        height={850}
                        className="casestudy-cover-img"
                      />
                    </div>
                  )}
                </div>

                <div className="casestudy-info-col">
                  <span className="casestudy-tag-badge">{study.tag}</span>
                  <h3 className="casestudy-item-title">{study.title}</h3>
                  <p className="casestudy-item-desc">{study.description}</p>

                  <div className="casestudy-highlights-box">
                    <p className="casestudy-highlights-label">Key Highlights</p>
                    <ul className="casestudy-highlights-list">
                      {study.keyHighlights.map((hl, hIdx) => (
                        <li key={hIdx}>{hl}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    className="casestudy-download-btn"
                    onClick={() => setActiveModalItem(study)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>Download</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Footer Banner */}
        <section className="casestudies-cta-box">
          <div className="casestudies-cta-content">
            <p className="eyebrow">Collaborative Research</p>
            <h2>Turn simulation into certified performance</h2>
            <p>
              Looking to design net-zero energy facilities, low-OPEX academic campuses, or resilient urban microclimates?
            </p>
          </div>
          <Link href="/contact/" className="casestudies-contact-btn">
            Connect With Our Engineers <span>↗</span>
          </Link>
        </section>
      </div>

      {/* Download Modal */}
      {activeModalItem && (
        <div
          className="casestudy-modal-backdrop"
          onClick={() => {
            if (!formSubmitted) setActiveModalItem(null);
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-case-title"
        >
          <div
            className="casestudy-modal-window"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="casestudy-modal-close"
              onClick={() => setActiveModalItem(null)}
              aria-label="Close dialog"
            >
              ✕
            </button>

            {formSubmitted ? (
              <div className="casestudy-modal-success">
                <div className="success-icon">✓</div>
                <h3>Download Request Received!</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Your requested case study for{" "}
                  <strong>{activeModalItem.title}</strong> has been sent to{" "}
                  <strong>{formData.email}</strong>.
                </p>
                <div className="success-progress-bar" />
              </div>
            ) : (
              <>
                <div className="casestudy-modal-header">
                  <span className="casestudy-modal-badge">{activeModalItem.category}</span>
                  <h3 id="modal-case-title" className="casestudy-modal-title">
                    Fill the form to Download
                  </h3>
                  <p className="casestudy-modal-subtitle">
                    Access the complete technical whitepaper & engineering specifications for{" "}
                    <strong>{activeModalItem.title}</strong>.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="casestudy-form">
                  <div className="form-group">
                    <label htmlFor="cs-name">Full Name *</label>
                    <input
                      id="cs-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cs-email">Work Email *</label>
                    <input
                      id="cs-email"
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="cs-org">Organization / Firm</label>
                      <input
                        id="cs-org"
                        type="text"
                        placeholder="Company or Institution"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cs-phone">Phone Number</label>
                      <input
                        id="cs-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cs-msg">Project Interest (Optional)</label>
                    <textarea
                      id="cs-msg"
                      rows={2}
                      placeholder="Briefly tell us about your upcoming project scope..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>

                  <button type="submit" className="form-submit-btn">
                    Submit &amp; Download Document <span>→</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
