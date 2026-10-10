import type { Metadata } from "next";
import HomeClient from "./home-client";
import { jsonLd, organizationJsonLd } from "../lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationJsonLd)} />
    </>
  );
}
