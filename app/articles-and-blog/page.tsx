import type { Metadata } from "next";
import PublicationsClient, { type PublicationCard } from "../publications/publications-client";
import { PUBLICATIONS_DATA } from "../publications/publications-data";
import { JsonLd } from "../../components/json-ld";
import { SITE_URL, articleUrl, breadcrumbJsonLd } from "../../lib/site";
import { pageMetadata } from "../../lib/seo";
import { ogImage } from "../../lib/og-images";

export const metadata: Metadata = pageMetadata({
  title: "Articles and Blog | McD BERL Pvt Ltd",
  description: "Expert articles on sustainable building design, MEP systems, energy efficiency, water, net zero and green building policy from the McD BERL team.",
  path: "/articles-and-blog/",
  image: ogImage("articles"),
  imageAlt: "McD BERL articles and blog",
});

const posts: PublicationCard[] = PUBLICATIONS_DATA.map(({ id, slug, title, badge, date, excerpt, displayImage }) => ({
  id,
  slug,
  title,
  badge,
  date,
  excerpt,
  displayImage,
}));

/** "August 4, 2026" -> "2026-08-04" (formatted from local date parts so the day never shifts). */
function isoDate(date: string) {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return undefined;
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/articles-and-blog/#blog`,
  url: `${SITE_URL}/articles-and-blog/`,
  name: "McD BERL Articles and Blog",
  publisher: { "@id": `${SITE_URL}/#organization` },
  blogPost: PUBLICATIONS_DATA.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title.replace(/\s+/g, " ").trim(),
    url: articleUrl(post.slug),
    datePublished: isoDate(post.date),
    description: post.excerpt.replace(/\s+/g, " ").trim(),
    image: post.displayImage?.startsWith("/") ? `${SITE_URL}${post.displayImage}` : post.displayImage,
    author: { "@type": "Organization", name: "McD BERL" },
  })),
};

export default function ArticlesAndBlogPage() {
  return (
    <>
      <PublicationsClient posts={posts} />
      <JsonLd data={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Articles and Blog", path: "/articles-and-blog/" }]), blogJsonLd]} />
    </>
  );
}
