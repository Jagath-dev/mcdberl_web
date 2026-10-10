import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../../components/site-chrome";
import CaseStudiesClient from "./case-studies-client";
import { JsonLd } from "../../components/json-ld";
import { breadcrumbJsonLd } from "../../lib/site";
import { pageMetadata } from "../../lib/seo";
import { ogImage } from "../../lib/og-images";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies | McD BERL Pvt Ltd",
  description: "Case studies on net zero design, high-performance buildings and cooling cities by McD BERL, with proven engineering for campuses and enterprise facilities.",
  path: "/case-studies/",
  image: ogImage("case-studies"),
  imageAlt: "McD BERL case studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CaseStudiesClient />
      </main>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-studies/" }])} />
      <SiteFooter />
    </>
  );
}
