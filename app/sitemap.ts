import type { MetadataRoute } from "next";
import { sectorProjects, sectors } from "../lib/projects-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mcdberl.com";
  const lastModified = new Date("2026-10-09");
  const pages = ["", "/about/", "/services/", "/projects/", "/careers/", "/publications/", "/contact/", "/meet-our-partners/", "/case-studiess/", "/media/", "/research-paper/", "/news-and-features/"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, lastModified, changeFrequency: "monthly" as const })),
    ...sectors.map((sector) => ({ url: `${base}/${sector.slug}/`, lastModified, changeFrequency: "monthly" as const })),
    ...sectorProjects.map((project) => ({ url: `${base}/projects/${project.slug}/`, lastModified, changeFrequency: "yearly" as const })),
  ];
}
