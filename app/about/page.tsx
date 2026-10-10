import type { Metadata } from "next";
import AboutClient from "./about-client";
import { JsonLd } from "../../components/json-ld";
import { breadcrumbJsonLd } from "../../lib/site";
import { pageMetadata } from "../../lib/seo";
import { ogImage } from "../../lib/og-images";

export const metadata: Metadata = pageMetadata({
  title: "About Us | McD BERL Pvt Ltd",
  description: "McD BERL is a team of MEP, green building and sustainability consultants pioneering energy-efficient, net zero and carbon-negative buildings.",
  path: "/about/",
  image: ogImage("about"),
  imageAlt: "The McD BERL team",
});

export default function AboutPage() {
  return (
    <>
      <AboutClient />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about/" }])} />
    </>
  );
}
