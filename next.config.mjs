import { readFileSync } from "node:fs";
import { legacyPageRedirects, wordpressPostSlugs } from "./lib/legacy-redirects.mjs";

const SITE_URL = "https://mcdberl.com";
const ARTICLES_ORIGIN = (process.env.NEXT_PUBLIC_ARTICLES_ORIGIN || SITE_URL).replace(/\/$/, "");

// Article slugs from the old WordPress site (https://mcdberl.com/<slug>/).
const articleSlugs = [
  ...new Set([
    ...JSON.parse(readFileSync(new URL("./app/publications/publications.json", import.meta.url), "utf8")).map((item) => item.slug),
    ...wordpressPostSlugs,
  ]),
];

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Matches the old WordPress URLs (/about/, /contact/ ...) so existing rankings and backlinks keep working.
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    // AVIF is ~20% smaller than WebP; Next falls back to WebP for browsers without it.
    formats: ["image/avif", "image/webp"],
    // Keep optimized images cached for 30 days instead of re-encoding them every minute.
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
      {
        protocol: "https",
        hostname: "mcdberl.com",
      },
    ],
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Files in /public are not content-hashed, so cache for a day and refresh in the background after that.
      {
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
  async redirects() {
    const pageRedirects = [
      { source: "/publications/", destination: "/articles-and-blog/", permanent: true },
      { source: "/case-studiess/", destination: "/case-studies/", permanent: true },
      { source: "/partners/", destination: "/meet-our-partners/", permanent: true },
    ];

    // Until the articles are migrated into this app, send old article URLs to wherever WordPress now lives.
    const articleRedirects =
      ARTICLES_ORIGIN === SITE_URL
        ? [
            // WordPress hasn't moved yet: send archives to the nearest listing page rather than a 404.
            { source: "/publications/:slug/", destination: "/research-paper/", permanent: false },
            { source: "/category/:path*", destination: "/articles-and-blog/", permanent: false },
            { source: "/tag/:path*", destination: "/articles-and-blog/", permanent: false },
            { source: "/author/:path*", destination: "/articles-and-blog/", permanent: false },
          ]
        : [
            ...articleSlugs.map((slug) => ({
              source: `/${slug}/`,
              destination: `${ARTICLES_ORIGIN}/${slug}/`,
              permanent: true,
            })),
            { source: "/publications/:slug/", destination: `${ARTICLES_ORIGIN}/publications/:slug/`, permanent: true },
            { source: "/category/:path*", destination: `${ARTICLES_ORIGIN}/category/:path*`, permanent: true },
            { source: "/tag/:path*", destination: `${ARTICLES_ORIGIN}/tag/:path*`, permanent: true },
            { source: "/author/:path*", destination: `${ARTICLES_ORIGIN}/author/:path*`, permanent: true },
            { source: "/wp-content/:path*", destination: `${ARTICLES_ORIGIN}/wp-content/:path*`, permanent: true },
          ];

    return [...pageRedirects, ...legacyPageRedirects, ...articleRedirects];
  },
};

export default nextConfig;
