import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "Page not found | McD BERL",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page not-found page-shell">
        <p className="eyebrow">404</p>
        <h1>We couldn’t find that page.</h1>
        <p>It may have moved when we redesigned the site. These are good places to pick up from:</p>
        <ul className="not-found-links">
          <li><Link className="text-link" href="/projects/">Projects <span>→</span></Link></li>
          <li><Link className="text-link" href="/services/">Services <span>→</span></Link></li>
          <li><Link className="text-link" href="/articles-and-blog/">Articles and Blogs <span>→</span></Link></li>
          <li><Link className="text-link" href="/contact/">Contact us <span>→</span></Link></li>
        </ul>
      </main>
      <SiteFooter />
    </>
  );
}
