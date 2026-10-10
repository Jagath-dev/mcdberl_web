"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";

export default function ContactClient() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "submitted" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    message: "",
    website: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        setErrorMessage(errorData.error || "Unable to send right now. Please try again or email us directly at info@mcdberl.com.");
        setFormState("error");
        return;
      }

      setFormState("submitted");
    } catch {
      setErrorMessage("Unable to send right now. Please try again or email us directly at info@mcdberl.com.");
      setFormState("error");
    }
  };

  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        {/* Contact Hero with Background Image */}
        <section className="contact-page-hero">
          <Image
            src="/assets/contact/contact-hero.webp"
            alt="McD BERL contact and consultation"
            fill
            priority
            sizes="100vw"
            className="contact-hero-image"
          />
          <div className="contact-hero-shade" />
          <div className="contact-hero-copy">
            <p className="eyebrow contact-eyebrow">Contact Us</p>
            <h1>Start the conversation.</h1>
            <p className="contact-hero-sub">
              Reach out to us today for a consultation. Bring us your project briefs, sustainability targets, and engineered building challenges.
            </p>
          </div>
        </section>

        {/* Contact Main Grid */}
        <section className="contact-grid page-shell">
          {/* Left Column: Direct Info & Offices */}
          <div className="contact-info-col">
            <p className="eyebrow">Get In Touch</p>
            <h2>Connect with our team.</h2>
            <p>
              We collaborate with architects, developers, and institutions to turn net-positive ambitions into practical, high-performance reality.
            </p>

            {/* 3 Quick Channel Cards based on live site */}
            <div className="contact-quick-cards-3">
              <a href="mailto:info@mcdberl.com" className="contact-card-link" aria-label="Email info@mcdberl.com">
                <span className="card-badge">Get in touch</span>
                <strong>info@mcdberl.com</strong>
                <span className="card-arrow">↗</span>
              </a>

              <a href="tel:+919606456689" className="contact-card-link" aria-label="Call Business Enquiry at +91 96064 56689">
                <span className="card-badge">Business Enquiry</span>
                <strong>+91 96064 56689</strong>
                <span className="card-arrow">↗</span>
              </a>

              <a href="tel:+918105833031" className="contact-card-link" aria-label="Call Other Enquiry at +91 81058 33031">
                <span className="card-badge">Other Enquiry</span>
                <strong>+91 81058 33031</strong>
                <span className="card-arrow">↗</span>
              </a>
            </div>

            {/* Office Locations */}
            <div className="office-locations">
              <h3 className="offices-heading">Our Offices</h3>

              {/* Bengaluru */}
              <div className="office-card">
                <div className="office-header">
                  <h4>BENGALURU</h4>
                  <span className="office-tag">Headquarters</span>
                </div>
                <p>
                  Subramanya Arcade Tower-B, Bannerghatta Rd,<br />
                  Old Gurappanapalya, 1st Stage, BTM Layout,<br />
                  Bengaluru, Karnataka 560029
                </p>
                <a
                  href="https://maps.app.goo.gl/ubx2v4xZCBQgJhgP9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="office-map-link"
                >
                  Visit Us on Google Maps <span>↗</span>
                </a>
              </div>

              {/* Mumbai */}
              <div className="office-card">
                <div className="office-header">
                  <h4>MUMBAI</h4>
                  <span className="office-tag">Studio</span>
                </div>
                <p>
                  1st Floor, Modi House, C-10,<br />
                  Dalia Industrial Estate, Veera Desai Road,<br />
                  Andheri West, Mumbai 400058
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Modi+House+Dalia+Industrial+Estate+Veera+Desai+Road+Andheri+West+Mumbai+400058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="office-map-link"
                >
                  Visit Us on Google Maps <span>↗</span>
                </a>
              </div>

              {/* Hyderabad */}
              <div className="office-card coming-soon">
                <div className="office-header">
                  <h4>HYDERABAD</h4>
                  <span className="office-tag">Coming Soon</span>
                </div>
                <p>Regional presence and sustainable building consulting practice.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="contact-form-container">
            {formState === "submitted" ? (
              <div className="contact-success-box">
                <div className="success-icon">✓</div>
                <h3>Thank you for reaching out</h3>
                <p>
                  Your enquiry has been received by our engineering leads. We will review your project details and get back to you shortly.
                </p>
                <button
                  type="button"
                  className="form-submit"
                  onClick={() => {
                    setFormData({ name: "", email: "", phone: "", company: "", designation: "", message: "", website: "" });
                    setFormState("idle");
                  }}
                >
                  Send another message <span>→</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-title">Reach out to us today for a consultation!</h3>
                <p className="form-subtitle">
                  Fill in your details below and an engineering consultant will contact you.
                </p>

                {errorMessage && (
                  <div className="form-error-banner">
                    {errorMessage}
                  </div>
                )}

                <input
                  type="text"
                  name="website"
                  className="form-honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />

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
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="phone">Mobile No</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-field-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company / Architecture Firm"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="designation">Designation</label>
                    <input
                      id="designation"
                      name="designation"
                      type="text"
                      placeholder="e.g. Principal Architect, Director"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project location, scope, building type, and sustainability goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  className="form-submit"
                  type="submit"
                  disabled={formState === "submitting"}
                >
                  {formState === "submitting" ? "Sending enquiry..." : "Send Enquiry"} <span>→</span>
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
