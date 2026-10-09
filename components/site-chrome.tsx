"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { sectorNav } from "../lib/sector-nav";

const A = "/assets/";

const sectorSubItems = sectorNav.map((s) => ({ label: s.label, href: `/${s.slug}/` }));

const publicationSubItems = [
  { label: "Articles and Blogs", href: "/publications" },
  { label: "Case Studies", href: "/case-studiess" },
  { label: "Media", href: "/media" },
  { label: "Research Paper", href: "/research-paper" },
  { label: "News and Features", href: "/news-and-features" },
];

type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  const nav: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Sectors", href: "/projects", children: sectorSubItems },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Publications", href: "/publications", children: publicationSubItems },
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

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  const trimmed = pathname.replace(/\/$/, "") || "/";
  const isSectorPage = sectorSubItems.some((s) => s.href.replace(/\/$/, "") === trimmed);

  const isActive = (item: NavItem) => {
    if (item.label === "Sectors") return isSectorPage;
    const [path, anchor] = item.href.split("#");
    if (anchor) return trimmed === path && hash === `#${anchor}`;
    if (path === "/publications") {
      return (
        trimmed === "/publications" ||
        trimmed === "/articles-and-blog" ||
        trimmed === "/case-studiess" ||
        trimmed === "/case-studies" ||
        trimmed === "/media" ||
        trimmed === "/research-paper" ||
        trimmed === "/news-and-features"
      );
    }
    return trimmed === path || (path !== "/" && trimmed.startsWith(`${path}/`));
  };

  const closeAll = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="McD BERL home">
        <Image src={`${A}branding/mcd-logo.png`} alt="McD BERL" width={255} height={47} priority />
      </Link>
      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
        {nav.map((item) => {
          const active = isActive(item);
          if (item.children) {
            const isOpen = openDropdown === item.label;
            const menuId = `nav-menu-${item.label.toLowerCase()}`;
            return (
              <div
                key={item.label}
                className={`nav-dropdown-item ${isOpen ? "is-open" : ""}`}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setOpenDropdown(null);
                }}
              >
                <div className="nav-dropdown-trigger">
                  <Link
                    className={active ? "is-active" : undefined}
                    aria-current={active ? "page" : undefined}
                    href={item.href}
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    className="nav-dropdown-toggle"
                    aria-label={`${isOpen ? "Hide" : "Show"} ${item.label} menu`}
                    aria-expanded={isOpen}
                    aria-controls={menuId}
                    onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                  >
                    <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </button>
                </div>
                <div id={menuId} className={`nav-dropdown-menu ${isOpen ? "is-open" : ""}`}>
                  {item.children.map((sub) => {
                    const subPath = sub.href.split("?")[0].replace(/\/$/, "");
                    const isSubActive =
                      item.label === "Sectors"
                        ? subPath === trimmed
                        : sub.label === "Articles and Blogs"
                        ? trimmed === "/publications" || trimmed === "/articles-and-blog"
                        : sub.label === "Case Studies"
                        ? trimmed === "/case-studiess" || trimmed === "/case-studies"
                        : sub.label === "Media"
                        ? trimmed === "/media"
                        : sub.label === "Research Paper"
                        ? trimmed === "/research-paper"
                        : sub.label === "News and Features"
                        ? trimmed === "/news-and-features"
                        : false;
                    return (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className={`nav-dropdown-link ${isSubActive ? "is-sub-active" : ""}`}
                        aria-current={isSubActive ? "page" : undefined}
                        onClick={closeAll}
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
              className={active ? "is-active" : undefined}
              aria-current={active ? "page" : undefined}
              key={item.label}
              href={item.href}
              onClick={closeAll}
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
