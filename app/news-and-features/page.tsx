import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../../components/site-chrome";
import NewsFeaturesClient from "./news-features-client";

export const metadata: Metadata = {
  title: "News and Features | McD BERL Pvt Ltd",
  description:
    "We advance sustainable construction with research on MEP design, smart buildings, and climate-positive innovations to reduce CO₂ emissions. Stay updated with McD BERL's latest industry recognitions, conclaves, lectures, and media features.",
  alternates: {
    canonical: "https://mcdberl.com/news-and-features/",
  },
  openGraph: {
    title: "News and Features | McD BERL Pvt Ltd",
    description:
      "Stay informed with the latest media features, industry highlights, and recognitions from McD BERL Built Environment Research Laboratory.",
    url: "https://mcdberl.com/news-and-features/",
    siteName: "McD BERL Pvt Ltd",
    images: [
      {
        url: "/assets/news-and-features/hero-banner.avif",
        width: 1920,
        height: 1080,
        alt: "News and Features - McD BERL",
      },
    ],
    type: "website",
  },
};

export default function NewsFeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <NewsFeaturesClient />
      </main>
      <SiteFooter />
    </>
  );
}
