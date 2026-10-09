"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const A = "/assets/";

const publicationSubItems = [
  { label: "Articles and Blogs", href: "/publications" },
  { label: "Case Studies", href: "/publications?category=case-studies" },
  { label: "Media", href: "/publications?category=media" },
  { label: "Research Paper", href: "/publications?category=research-paper" },
  { label: "News and Features", href: "/publications?category=news-and-features" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  const nav = [
    { label: "Home", href: "/" },
    { label: "Sectors", href: "/#sectors" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Publications", href: "/publications", hasDropdown: true },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" }
  ];

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const isActive = (href: string) => {
    const [path, anchor] = href.split("#");
    if (anchor) return pathname === path && hash === `#${anchor}`;
    if (path === "/publications") {
      return pathname === "/publications" || pathname === "/articles-and-blog";
    }
    return pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));
  };

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="McD BERL home">
        <Image src={`${A}branding/mcd-logo.png`} alt="McD BERL" width={255} height={47} priority />
      </Link>
      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
        {nav.map((item) => {
          if (item.hasDropdown) {
            return (
              <div
                key={item.href}
                className="nav-dropdown-item"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  className={isActive(item.href) ? "is-active" : undefined}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                <div className={`nav-dropdown-menu ${dropdownOpen ? "is-open" : ""}`}>
                  {publicationSubItems.map((sub) => {
                    const isSubActive =
                      (sub.label === "Articles and Blogs" &&
                        (pathname === "/publications" || pathname === "/articles-and-blog"));
                    return (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className={`nav-dropdown-link ${isSubActive ? "is-sub-active" : ""}`}
                        onClick={() => {
                          setOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        {sub.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }

          return (
            <Link
              className={isActive(item.href) ? "is-active" : undefined}
              aria-current={isActive(item.href) ? "page" : undefined}
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <button
        className="menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="brand" href="/">
          <Image src={`${A}branding/mcd-logo.png`} alt="McD BERL" width={222} height={41} />
        </Link>
        <div className="footer-links">
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Get in touch</Link>
          <Link href="/publications">Blogs</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© McD BERL 2026. All rights reserved.</p>
        <div className="socials">
          <a href="https://www.linkedin.com/company/mcd-built-environment-research-laboratory/" aria-label="LinkedIn">
            in
          </a>
          <a href="https://www.instagram.com/mcdberl/" aria-label="Instagram">
            ig
          </a>
          <a href="https://youtube.com/@mcd-berl" aria-label="YouTube">
            yt
          </a>
          <a href="https://x.com/_mcdberl" aria-label="X">
            x
          </a>
        </div>
      </div>
    </footer>
  );
}
