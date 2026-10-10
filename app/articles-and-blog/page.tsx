import type { Metadata } from "next";
import { Suspense } from "react";
import PublicationsClient from "../publications/publications-client";

export const metadata: Metadata = {
  alternates: { canonical: "/articles-and-blog/" },
  title: "Articles and Blogs | McD BERL Pvt Ltd",
  description: "Get expert insights on sustainable building design, MEP systems, energy efficiency, and environmental policies with in-depth articles on green construction, innovative techniques, and industry regulations."
};

export default function ArticlesAndBlogPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "60vh", padding: "100px 28px" }}>Loading articles...</div>}>
      <PublicationsClient />
    </Suspense>
  );
}
