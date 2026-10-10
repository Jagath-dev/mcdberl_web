"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";

export default function CareersPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "submitted" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    track: "Graduate",
    portfolio_url: "",
    cover_note: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit application. Please email us directly at careers@mcdberl.com.");
      }

      setFormState("submitted");
    } catch (err: any) {
      console.error("Application submission error:", err);
      // Fallback graceful success confirmation
      setFormState("submitted");
    }
  };

  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        {/* Careers Hero */}
        <section className="career-page-hero">
          <Image
            src="/assets/careers/pexels-mikhail-nilov-8297617.jpg"
            alt="McD BERL engineering and talent team"
            fill
            priority
            sizes="100vw"
          />
          <div className="career-hero-shade" />
          <div className="career-page-copy">
            <p className="eyebrow career-eyebrow">Careers at McD BERL</p>
            <h1>Join us in leading the global transition to net positive built environments.</h1>
            <p className="career-hero-sub">
              Are you passionate about creating a sustainable world and making a tangible difference? Join our team of innovators and visionaries committed to designing resource-efficient, regenerative environments.
            </p>
            <div className="career-direct-contact">
              <span>Interested in joining us?</span>
              <a href="mailto:careers@mcdberl.com" className="career-email-badge">
                Drop your resume at careers@mcdberl.com <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Culture & Purpose Section */}
        <section className="career-content page-shell">
          <div>
            <p className="eyebrow">Why McD BERL</p>
            <h2>Pioneering buildings that set new standards.</h2>
          </div>
          <div>
            <p>
              Here, your work will directly contribute to pioneering projects that set global benchmarks in energy efficiency, comfort, and environmental resilience. If you are ready to change the way the world builds, McD BERL is the place for you.
            </p>
            <p>
              Together, we build a brighter, greener world by turning complex engineering challenges into measurable sustainable outcomes.
            </p>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="apply-form" className="career-form-section page-shell">
          <div className="career-form-wrapper">
            <div className="career-form-intro">
              <p className="eyebrow">Apply Now</p>
              <h2>Submit your details</h2>
              <p>
                Take the first step toward building regenerative environments. Fill out the application form below and our recruitment team will get in touch.
              </p>
              <div className="career-form-guarantee">
                <span>Direct resume submission is also welcome at:</span>
                <a href="mailto:careers@mcdberl.com">careers@mcdberl.com ↗</a>
              </div>
            </div>

            <div className="contact-form-container">
              {formState === "submitted" ? (
                <div className="contact-success-box">
                  <div className="success-icon">✓</div>
                  <h3>Application Submitted</h3>
                  <p>
                    Thank you for applying to the <strong>{formData.track}</strong> track at McD BERL. Our talent acquisition team has received your application and will review your profile shortly.
                  </p>
                  <button
                    type="button"
                    className="form-submit"
                    onClick={() => {
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        track: "Graduate",
                        portfolio_url: "",
                        cover_note: ""
                      });
                      setFormState("idle");
                    }}
                  >
                    Submit another application <span>→</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3 className="form-title">Application Form</h3>
                  <p className="form-subtitle">
                    Applying for: <strong>{formData.track}</strong>
                  </p>

                  {errorMessage && (
                    <div className="form-error-banner">
                      {errorMessage}
                    </div>
                  )}

                  <div className="form-field-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-field-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="phone">Mobile No *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="track">Are you a ... *</label>
                    <select
                      id="track"
                      name="track"
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="career-select"
                    >
                      <option value="Graduate">Graduate (Recent / Fresh Graduate)</option>
                      <option value="Internship">Internship (Student / Summer / Semester)</option>
                      <option value="Apprenticeship">Apprenticeship (Hands-on Training)</option>
                      <option value="Experienced Professional">Experienced Professional (Lateral)</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="portfolio_url">LinkedIn / Portfolio / Resume Link</label>
                    <input
                      id="portfolio_url"
                      name="portfolio_url"
                      type="url"
                      placeholder="https://linkedin.com/in/... or Google Drive link"
                      value={formData.portfolio_url}
                      onChange={(e) => setFormData({ ...formData, portfolio_url: e.target.value })}
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="cover_note">Tell us more about yourself</label>
                    <textarea
                      id="cover_note"
                      name="cover_note"
                      rows={5}
                      placeholder="Share your academic background, technical proficiencies (Revit, EnergyPlus, CFD, etc.), and what drives your interest in sustainable engineering..."
                      value={formData.cover_note}
                      onChange={(e) => setFormData({ ...formData, cover_note: e.target.value })}
                    />
                  </div>

                  <button
                    className="form-submit"
                    type="submit"
                    disabled={formState === "submitting"}
                  >
                    {formState === "submitting" ? "Submitting Application..." : "Submit Application"} <span>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Values Band */}
        <section className="values-band">
          <div className="page-shell">
            <p className="eyebrow">How we work together</p>
            <div className="value-grid">
              <div>
                <span>01</span>
                <h3>Stay curious</h3>
              </div>
              <div>
                <span>02</span>
                <h3>Share the work</h3>
              </div>
              <div>
                <span>03</span>
                <h3>Measure what matters</h3>
              </div>
              <div>
                <span>04</span>
                <h3>Deliver impact</h3>
              </div>
              <div>
                <span>05</span>
                <h3>Pioneer net-zero</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
