export const SITE_URL = "https://mcdberl.com";
export const SITE_NAME = "McD BERL Pvt Ltd";

/**
 * Where the full article pages live. Articles are still served by WordPress,
 * so once this app takes over mcdberl.com, set NEXT_PUBLIC_ARTICLES_ORIGIN
 * (e.g. https://blog.mcdberl.com) and next.config.mjs 301s the old slugs there.
 */
export const ARTICLES_ORIGIN = (process.env.NEXT_PUBLIC_ARTICLES_ORIGIN || SITE_URL).replace(/\/$/, "");

export const articleUrl = (slug: string) => `${ARTICLES_ORIGIN}/${slug}/`;

export const SOCIAL_LINKS = [
  "https://www.linkedin.com/company/mcd-built-environment-research-laboratory/",
  "https://www.instagram.com/mcdberl/",
  "https://youtube.com/@mcd-berl",
  "https://x.com/_mcdberl",
];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: "McD Built Environment Research Laboratory",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/branding/mcd-logo.png`,
  description: "Sustainable building engineering and regenerative built environments.",
  email: "info@mcdberl.com",
  sameAs: SOCIAL_LINKS,
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** Serialises JSON-LD for a <script> tag, escaping "<" so data can't close the tag. */
export const jsonLd = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });
