import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../../components/site-chrome";
import MediaClient from "./media-client";
import { JsonLd } from "../../components/json-ld";
import { breadcrumbJsonLd } from "../../lib/site";
import { pageMetadata } from "../../lib/seo";
import { ogImage } from "../../lib/og-images";

export const metadata: Metadata = pageMetadata({
  title: "Media | McD BERL Pvt Ltd",
  description: "Watch McD BERL’s video library on sustainable building design, MEP systems, passive cooling, water and energy efficiency.",
  path: "/media/",
  image: ogImage("media"),
  imageAlt: "McD BERL media and videos",
});

export default function MediaPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <MediaClient />
      </main>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Media", path: "/media/" }])} />
      <SiteFooter />
    </>
  );
}
