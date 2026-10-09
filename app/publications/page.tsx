import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";

export const metadata = { title: "Publications | McD BERL", description: "Insights and writing from McD BERL on sustainable building engineering." };

export default function PublicationsPage() {
  return <><SiteHeader /><main className="inner-page"><section className="inner-hero"><p className="eyebrow">Publications</p><h1>Ideas for a<br />better built world.</h1><p>We share the lessons, methods and questions that shape our work—from energy and water to the systems behind resilient buildings.</p></section><section className="publication-list page-shell"><article><span>Featured / Sustainability</span><h2>What does net-positive mean in practice?</h2><p>A working view of how energy, water and carbon decisions become measurable project outcomes.</p><Link className="text-link" href="mailto:connect@mcdberl.com?subject=Publications">Read the conversation <span>↗</span></Link></article><article><span>Notes / Engineering</span><h2>Designing systems that do more with less.</h2><p>Why performance-led thinking belongs at the beginning of every brief.</p><Link className="text-link" href="mailto:connect@mcdberl.com?subject=Publications">Start a conversation <span>↗</span></Link></article></section></main><SiteFooter /></>;
}
