import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mcdberl.com"),
  title: "McD BERL | Engineering a Sustainable Future",
  applicationName: "McD BERL",
  description: "McD BERL leads the transformation toward regenerative, net-positive environments through sustainable building engineering.",
  keywords: ["McD BERL", "sustainable building engineering", "MEP engineering", "net zero", "Bangalore"],
  openGraph: {
    title: "McD BERL | Engineering a Sustainable Future",
    description: "Leading a global transformation in how the world builds.",
    type: "website",
    siteName: "McD BERL Pvt Ltd",
    locale: "en_IN",
    url: "https://mcdberl.com",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630, alt: "McD BERL sustainable built environment" }]
  },
  twitter: { card: "summary_large_image", site: "@_mcdberl", title: "McD BERL | Engineering a Sustainable Future", description: "Leading a global transformation in how the world builds.", images: ["/og/home.jpg"] },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
