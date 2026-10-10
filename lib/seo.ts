import type { Metadata } from "next";
import { SITE_NAME } from "./site";

type PageSeo = {
  title: string;
  description: string;
  /** Path with trailing slash, e.g. "/about/". Used for the canonical and og:url. */
  path: string;
  /** Social share image, ideally a 1200x630 JPEG from /og/ (see app/og/[image]/route.ts). */
  image: string;
  imageAlt?: string;
  type?: "website" | "article";
};

/** Google shows ~155 characters; cut longer descriptions at a word boundary. */
export function clampDescription(text: string, max = 158) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s–-]+$/, "")}…`;
}

/**
 * Full metadata for one page. Next only shallow-merges openGraph/twitter with the
 * root layout, so every page sets them in full here to avoid inheriting the
 * homepage's title, URL and image when shared.
 */
export function pageMetadata({ title, description, path, image, imageAlt, type = "website" }: PageSeo): Metadata {
  const desc = clampDescription(description);
  const images = [{ url: image, width: 1200, height: 630, alt: imageAlt ?? title }];
  return {
    title,
    description: desc,
    alternates: { canonical: path },
    openGraph: { title, description: desc, url: path, siteName: SITE_NAME, locale: "en_IN", type, images },
    twitter: { card: "summary_large_image", site: "@_mcdberl", title, description: desc, images },
  };
}
