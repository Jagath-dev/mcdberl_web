import type { MetadataRoute } from "next";
import { sectorProjects, sectors } from "../lib/projects-data";
import { SITE_URL } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Pages are static, so the build time is when their content last changed.
  const lastModified = new Date();
  const pages = [
    "/",
    "/about/",
    "/services/",
    "/projects/",
    "/careers/",
    "/contact/",
    "/articles-and-blog/",
    "/case-studies/",
    "/media/",
    "/research-paper/",
    "/news-and-features/",
    "/meet-our-partners/",
  ];
  return [
    ...pages.map((path) => ({ url: `${SITE_URL}${path}`, lastModified, changeFrequency: "monthly" as const, priority: path === "/" ? 1 : 0.8 })),
    ...sectors.map((sector) => ({ url: `${SITE_URL}/${sector.slug}/`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...sectorProjects.map((project) => ({ url: `${SITE_URL}/projects/${project.slug}/`, lastModified, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
