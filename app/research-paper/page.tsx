import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../../components/site-chrome";
import ResearchPaperClient from "./research-paper-client";
import { JsonLd } from "../../components/json-ld";
import { breadcrumbJsonLd } from "../../lib/site";
import { pageMetadata } from "../../lib/seo";
import { ogImage } from "../../lib/og-images";

export const metadata: Metadata = pageMetadata({
  title: "Research Papers | McD BERL Pvt Ltd",
  description: "McD BERL research on building-sector CO₂ emissions, the One Watt Building Challenge, wet bulb temperature and urban water resilience.",
  path: "/research-paper/",
  image: ogImage("research"),
  imageAlt: "McD BERL research papers",
});

export default function ResearchPaperPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ResearchPaperClient />
      </main>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Research Papers", path: "/research-paper/" }])} />
      <SiteFooter />
    </>
  );
}
