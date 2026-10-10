import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../../components/site-chrome";
import ResearchPaperClient from "./research-paper-client";

export const metadata: Metadata = {
  alternates: { canonical: "/research-paper/" },
  title: "Our Research Works | McD BERL Pvt Ltd",
  description:
    "Explore in-depth research on CO₂ emissions, the One Watt Building Challenge, and wet bulb temperature impacts, offering valuable insights into sustainability and environmental considerations in construction.",
  openGraph: {
    title: "Our Research Works | McD BERL Pvt Ltd",
    description:
      "Explore in-depth research on CO₂ emissions, the One Watt Building Challenge, and wet bulb temperature impacts by McD BERL Research Laboratory.",
    url: "https://mcdberl.com/research-paper/",
    siteName: "McD BERL Pvt Ltd",
    images: [
      {
        url: "/assets/research-paper/research-banner.jpg",
        width: 1920,
        height: 1080,
        alt: "Research Papers - McD BERL"
      }
    ],
    type: "website"
  }
};

export default function ResearchPaperPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ResearchPaperClient />
      </main>
      <SiteFooter />
    </>
  );
}
