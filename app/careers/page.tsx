import type { Metadata } from "next";
import CareersClient from "./careers-client";

export const metadata: Metadata = {
  title: "Careers | McD BERL Pvt Ltd",
  description:
    "Join McD BERL and help lead the global transition to net positive built environments. Explore graduate and experienced roles in sustainable building engineering.",
  alternates: { canonical: "/careers/" },
  openGraph: {
    title: "Careers | McD BERL Pvt Ltd",
    description: "Join us in leading the global transition to net positive built environments.",
    url: "/careers/",
    images: [{ url: "/assets/careers/pexels-mikhail-nilov-8297617.jpg", alt: "Careers at McD BERL" }],
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
