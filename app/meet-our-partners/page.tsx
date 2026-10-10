import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../../components/site-chrome";
import MeetOurPartnersClient from "./partners-client";
import { JsonLd } from "../../components/json-ld";
import { breadcrumbJsonLd } from "../../lib/site";
import { pageMetadata } from "../../lib/seo";
import { ogImage } from "../../lib/og-images";

export const metadata: Metadata = pageMetadata({
  title: "Meet Our Partners | McD BERL Pvt Ltd",
  description: "McD BERL partners with Infosys, Wipro, Godrej Properties, Lodha, Biome Environmental and more to engineer high-performance, sustainable buildings.",
  path: "/meet-our-partners/",
  image: ogImage("partners"),
  imageAlt: "McD BERL partners",
});

export default function MeetOurPartnersPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <MeetOurPartnersClient />
      </main>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Meet Our Partners", path: "/meet-our-partners/" }])} />
      <SiteFooter />
    </>
  );
}
