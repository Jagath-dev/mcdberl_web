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
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["McD BERL", "McD Built Environment Research Laboratory"],
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/assets/branding/mcd-logo.png`,
  description:
    "MEP, green building and sustainability consultants engineering energy-efficient, net zero and net positive buildings across India and worldwide.",
  email: "info@mcdberl.com",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Subramanya Arcade Tower-B, Bannerghatta Rd, Old Gurappanapalya, 1st Stage, BTM Layout",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560029",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "1st Floor, Modi House, C-10, Dalia Industrial Estate, Veera Desai Road, Andheri West",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400058",
      addressCountry: "IN",
    },
  ],
  contactPoint: [
    { "@type": "ContactPoint", contactType: "sales", telephone: "+91-96064-56689", email: "info@mcdberl.com", areaServed: "Worldwide", availableLanguage: ["en"] },
    { "@type": "ContactPoint", contactType: "customer service", telephone: "+91-81058-33031", availableLanguage: ["en"] },
  ],
  sameAs: SOCIAL_LINKS,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "McD BERL",
  url: `${SITE_URL}/`,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
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
