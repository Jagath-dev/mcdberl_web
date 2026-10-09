import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../../components/site-chrome";
import MeetOurPartnersClient from "./partners-client";

export const metadata: Metadata = {
  title: "Meet Our Partners | McD BERL Pvt Ltd",
  description:
    "Meet our valued partners across tech, commercial real estate, institutions, and architecture. McD BERL collaborates with leading organizations to engineer sustainable built environments.",
  openGraph: {
    title: "Meet Our Partners | McD BERL Pvt Ltd",
    description:
      "McD BERL partners with global pioneers like Infosys, Wipro, Godrej Properties, Lodha, Biome Environmental, and more to engineer high-performance sustainable environments.",
    url: "https://mcdberl.com/meet-our-partners/",
    siteName: "McD BERL Pvt Ltd",
    images: [
      {
        url: "/assets/partners/meet-our-partners-banner.webp",
        width: 1920,
        height: 1080,
        alt: "Meet Our Partners - McD BERL"
      }
    ],
    type: "website"
  }
};

export default function MeetOurPartnersPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <MeetOurPartnersClient />
      </main>
      <SiteFooter />
    </>
  );
}
