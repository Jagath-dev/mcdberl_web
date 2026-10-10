import type { Metadata } from "next";
import PublicationsClient, { type PublicationCard } from "../publications/publications-client";
import { PUBLICATIONS_DATA } from "../publications/publications-data";

export const metadata: Metadata = {
  alternates: { canonical: "/articles-and-blog/" },
  title: "Articles and Blogs | McD BERL Pvt Ltd",
  description: "Get expert insights on sustainable building design, MEP systems, energy efficiency, and environmental policies with in-depth articles on green construction, innovative techniques, and industry regulations."
};

const posts: PublicationCard[] = PUBLICATIONS_DATA.map(({ id, slug, title, badge, date, excerpt, displayImage }) => ({
  id,
  slug,
  title,
  badge,
  date,
  excerpt,
  displayImage,
}));

export default function ArticlesAndBlogPage() {
  return <PublicationsClient posts={posts} />;
}
