"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const A = "/assets/";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const nav = [["Home", "/"], ["Sectors", "/#sectors"], ["Services", "/services"], ["Projects", "/projects"], ["Publications", "/publications"], ["About", "/about"], ["Careers", "/careers"], ["Contact", "/contact"]] as const;

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const isActive = (href: string) => {
    const [path, anchor] = href.split("#");
    if (anchor) return pathname === path && hash === `#${anchor}`;
    return pathname === path || (path !== "/" && pathname.startsWith(`${path}/`));
  };

  return <header className="site-header"><Link className="brand" href="/" aria-label="McD BERL home"><Image src={`${A}branding/mcd-logo.png`} alt="McD BERL" width={255} height={47} priority /></Link><nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">{nav.map(([label, href]) => <Link className={isActive(href) ? "is-active" : undefined} aria-current={isActive(href) ? "page" : undefined} key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav><button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-top"><Link className="brand" href="/"><Image src={`${A}branding/mcd-logo.png`} alt="McD BERL" width={222} height={41} /></Link><div className="footer-links"><Link href="/careers">Careers</Link><Link href="/contact">Get in touch</Link><Link href="/publications">Blogs</Link></div></div><div className="footer-bottom"><p>© McD BERL 2026. All rights reserved.</p><div className="socials"><a href="https://www.linkedin.com/company/mcd-built-environment-research-laboratory/" aria-label="LinkedIn">in</a><a href="https://www.instagram.com/mcdberl/" aria-label="Instagram">ig</a><a href="https://youtube.com/@mcd-berl" aria-label="YouTube">yt</a><a href="https://x.com/_mcdberl" aria-label="X">x</a></div></div></footer>;
}
