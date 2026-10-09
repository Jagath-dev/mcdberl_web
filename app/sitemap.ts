import type { MetadataRoute } from "next";
import { projects } from "../lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mcdberl.com";
  const pages = ["", "/about/", "/services/", "/projects/", "/careers/", "/publications/", "/contact/"];
  return [...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date("2026-10-09"), changeFrequency: "monthly" as const })), ...projects.map((project) => ({ url: `${base}/projects/${project.slug}/`, lastModified: new Date("2026-10-09"), changeFrequency: "yearly" as const }))];
}
