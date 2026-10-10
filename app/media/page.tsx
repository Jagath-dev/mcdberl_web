import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../../components/site-chrome";
import MediaClient from "./media-client";

export const metadata: Metadata = {
  alternates: { canonical: "/media/" },
  title: "Media | McD BERL Pvt Ltd",
  description:
    "Explore our curated video library featuring insights on sustainable building design, MEP systems, and energy efficiency, delivering innovative solutions through visual content.",
  openGraph: {
    title: "Media | McD BERL Pvt Ltd",
    description:
      "Curated video library and documentaries featuring insights on sustainable building design, MEP systems, and energy efficiency by McD BERL.",
    url: "https://mcdberl.com/media/",
    siteName: "McD BERL Pvt Ltd",
    images: [
      {
        url: "/assets/media/media-hero.jpg",
        width: 1920,
        height: 1080,
        alt: "Media - McD BERL"
      }
    ],
    type: "website"
  }
};

export default function MediaPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <MediaClient />
      </main>
      <SiteFooter />
    </>
  );
}
