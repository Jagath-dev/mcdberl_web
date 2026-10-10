import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";
import { services } from "../../lib/site-data";
import { JsonLd } from "../../components/json-ld";
import { SITE_URL, breadcrumbJsonLd } from "../../lib/site";
import { pageMetadata } from "../../lib/seo";
import { ogImage } from "../../lib/og-images";
import { ServicesCalloutBlueprint, ServicesHeroBlueprint } from "../../components/services-blueprint";

export const metadata: Metadata = pageMetadata({
  title: "Sustainable MEP & Green Building Services | McD BERL",
  description: "Sustainable MEP engineering, energy and performance modelling, net zero strategy and green building certification consulting by McD BERL.",
  path: "/services/",
  image: ogImage("services"),
  imageAlt: "McD BERL engineering services",
});

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "McD BERL services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: { "@type": "Service", name: service.title, description: service.copy, provider: { "@id": `${SITE_URL}/#organization` }, areaServed: "Worldwide" },
  })),
};

export default function ServicesPage() {
  return <><SiteHeader /><main className="inner-page"><section className="inner-hero services-hero"><Image className="services-hero-image" src="/assets/services/services-hero.webp" alt="Abstract wireframe of a building's engineering systems" fill priority sizes="100vw" /><div className="services-hero-shade" aria-hidden="true" /><ServicesHeroBlueprint /><div className="services-hero-content"><p className="eyebrow">What we do</p><h1>Systems that make<br />performance possible.</h1><p>From first principles to operational reality, we bring engineering, sustainability and evidence into one conversation.</p></div></section><section className="service-detail page-shell"><div className="service-detail-intro"><p className="eyebrow">Our services</p><h2>Designed for measurable outcomes.</h2><p>Every project has different constraints. Our job is to make the best path visible early, when decisions have the most leverage.</p></div><div className="service-detail-image"><Image src="/assets/services/engineering-systems.webp" alt="Geometric high-rise architecture viewed from below" fill sizes="(max-width: 900px) 100vw, 1124px" /></div><div className="service-detail-list">{services.map((service, index) => <article key={service.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{service.title}</h3><p>{service.copy}</p></div><Link href="/contact/" aria-label={`Discuss ${service.title}`}>↗</Link></article>)}</div></section><section className="callout-band services-callout"><ServicesCalloutBlueprint /><div className="page-shell"><p className="eyebrow">Start a conversation</p><h2>Have a complex brief?<br />Let’s make it perform.</h2><Link className="text-link light" href="/contact/">Get in touch <span>→</span></Link></div></section></main><JsonLd data={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }]), servicesJsonLd]} /><SiteFooter /></>;
}
