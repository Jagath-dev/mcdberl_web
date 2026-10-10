import { sectorProjects, sectors } from "./projects-data";

/** Source images (in /public) for the 1200x630 social share images served at /og/<name>.jpg. */
const pageImages: Record<string, string> = {
  home: "/assets/team/team-net-zero.jpg",
  about: "/assets/about/about-hero-banner.jpg",
  services: "/assets/services/services-hero.webp",
  projects: "/assets/projects/projects-hero.webp",
  careers: "/assets/careers/pexels-mikhail-nilov-8297617.jpg",
  contact: "/assets/contact/contact-hero.jpg",
  "case-studies": "/assets/case-studies/case-studies-hero.jpg",
  media: "/assets/media/media-hero.jpg",
  partners: "/assets/partners/meet-our-partners-banner.webp",
  news: "/assets/news-and-features/hero-banner.avif",
  research: "/assets/research-paper/research-banner.jpg",
  articles: "/assets/about/about-hero-banner.jpg",
};

export const ogImageSources: Record<string, string> = {
  ...pageImages,
  ...Object.fromEntries(sectors.map((s) => [`sector-${s.slug}`, s.bannerImage])),
  ...Object.fromEntries(sectorProjects.map((p) => [`project-${p.slug}`, p.image])),
};

export type OgImageName = keyof typeof pageImages;

export const ogImage = (name: OgImageName) => `/og/${name}.jpg`;
export const sectorOgImage = (slug: string) => `/og/sector-${slug}.jpg`;
export const projectOgImage = (slug: string) => `/og/project-${slug}.jpg`;
