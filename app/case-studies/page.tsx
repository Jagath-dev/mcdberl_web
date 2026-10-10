import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../../components/site-chrome";
import CaseStudiesClient from "./case-studies-client";

export const metadata: Metadata = {
  alternates: { canonical: "/case-studies/" },
  title: "Case Studies | McD BERL Pvt Ltd",
  description:
    "Explore case studies on Net Zero Design, High Performance Buildings, and Cooling Cities by McD BERL. Proven engineering for academic campuses and enterprise facilities.",
  openGraph: {
    title: "Case Studies | McD BERL Pvt Ltd",
    description:
      "Explore case studies on Net Zero Design, High Performance Buildings, and Cooling Cities by McD BERL. Proven engineering for academic campuses and enterprise facilities.",
    url: "https://mcdberl.com/case-studies/",
    siteName: "McD BERL Pvt Ltd",
    images: [
      {
        url: "/assets/case-studies/case-studies-hero.jpg",
        width: 1920,
        height: 1080,
        alt: "Case Studies - McD BERL"
      }
    ],
    type: "website"
  }
};

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CaseStudiesClient />
      </main>
      <SiteFooter />
    </>
  );
}
