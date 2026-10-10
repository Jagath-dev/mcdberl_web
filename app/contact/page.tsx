import type { Metadata } from "next";
import ContactClient from "./contact-client";
import { JsonLd } from "../../components/json-ld";
import { SITE_URL, breadcrumbJsonLd, organizationJsonLd } from "../../lib/site";
import { pageMetadata } from "../../lib/seo";
import { ogImage } from "../../lib/og-images";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | McD BERL Pvt Ltd",
  description: "Contact McD BERL in Bengaluru or Mumbai for MEP design, energy modelling, green building certification and net zero consulting. Share your project brief.",
  path: "/contact/",
  image: ogImage("contact"),
  imageAlt: "Contact McD BERL",
});

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact/`,
  name: "Contact McD BERL",
  mainEntity: organizationJsonLd,
};

export default function ContactPage() {
  return (
    <>
      <ContactClient />
      <JsonLd data={[breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }]), contactPageJsonLd]} />
    </>
  );
}
