import type { Metadata } from "next";
import CareersClient from "./careers-client";
import { JsonLd } from "../../components/json-ld";
import { breadcrumbJsonLd } from "../../lib/site";
import { pageMetadata } from "../../lib/seo";
import { ogImage } from "../../lib/og-images";

export const metadata: Metadata = pageMetadata({
  title: "Careers | McD BERL Pvt Ltd",
  description: "Join McD BERL and help lead the transition to net positive built environments. Explore graduate and experienced roles in sustainable building engineering.",
  path: "/careers/",
  image: ogImage("careers"),
  imageAlt: "Careers at McD BERL",
});

export default function CareersPage() {
  return (
    <>
      <CareersClient />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Careers", path: "/careers/" }])} />
    </>
  );
}
