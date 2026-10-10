import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../../components/site-chrome";
import NewsFeaturesClient from "./news-features-client";
import { JsonLd } from "../../components/json-ld";
import { breadcrumbJsonLd } from "../../lib/site";
import { pageMetadata } from "../../lib/seo";
import { ogImage } from "../../lib/og-images";

export const metadata: Metadata = pageMetadata({
  title: "News and Features | McD BERL Pvt Ltd",
  description: "The latest McD BERL news: industry recognition, conclaves, lectures and media features on sustainable construction and climate-positive buildings.",
  path: "/news-and-features/",
  image: ogImage("news"),
  imageAlt: "McD BERL news and features",
});

export default function NewsFeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <NewsFeaturesClient />
      </main>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "News and Features", path: "/news-and-features/" }])} />
      <SiteFooter />
    </>
  );
}
