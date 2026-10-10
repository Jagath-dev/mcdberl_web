import type { Metadata } from "next";
import HomeClient from "./home-client";
import { JsonLd } from "../components/json-ld";
import { organizationJsonLd, websiteJsonLd } from "../lib/site";
import { pageMetadata } from "../lib/seo";
import { ogImage } from "../lib/og-images";

export const metadata: Metadata = pageMetadata({
  title: "McD BERL | Sustainable MEP & Net Zero Building Engineers",
  description:
    "McD BERL engineers energy-efficient, net zero and net positive buildings: MEP design, energy modelling, water and green building consulting from Bengaluru and Mumbai.",
  path: "/",
  image: ogImage("home"),
  imageAlt: "McD BERL sustainable built environment",
});

export default function HomePage() {
  return (
    <>
      <HomeClient />
      <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
    </>
  );
}
