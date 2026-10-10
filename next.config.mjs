import { readFileSync } from "node:fs";

const SITE_URL = "https://mcdberl.com";
const ARTICLES_ORIGIN = (process.env.NEXT_PUBLIC_ARTICLES_ORIGIN || SITE_URL).replace(/\/$/, "");

// Article slugs from the old WordPress site (https://mcdberl.com/<slug>/).
const articleSlugs = JSON.parse(readFileSync(new URL("./app/publications/publications.json", import.meta.url), "utf8")).map(
  (item) => item.slug
);

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
    return [{ source: "/:path*", headers: securityHeaders }];
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
        ? []
        : [
            ...articleSlugs.map((slug) => ({
              source: `/${slug}/`,
              destination: `${ARTICLES_ORIGIN}/${slug}/`,
              permanent: true,
            })),
            { source: "/publications/:slug/", destination: `${ARTICLES_ORIGIN}/publications/:slug/`, permanent: true },
            { source: "/wp-content/:path*", destination: `${ARTICLES_ORIGIN}/wp-content/:path*`, permanent: true },
          ];

    return [...pageRedirects, ...articleRedirects];
  },
};

export default nextConfig;
