import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us | McD BERL Pvt Ltd",
  description:
    "Get in touch with McD BERL for sustainable building engineering, MEP design, energy modelling and net zero consulting. Share your project brief and our team will respond.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Us | McD BERL Pvt Ltd",
    description: "Reach out to McD BERL for a consultation on sustainable, high-performance buildings.",
    url: "/contact/",
    images: [{ url: "/assets/contact/contact-hero.jpg", alt: "Contact McD BERL" }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
