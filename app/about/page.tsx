import type { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  alternates: { canonical: "/about/" },
  title: "About | McD BERL Pvt Ltd",
  description: "Leading MEP, green buildings and sustainability consultants, McD BERL pioneers energy-efficient and carbon-negative building solutions."
};

export default function AboutPage() {
  return <AboutClient />;
}
