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
    images: [{ url: "/assets/team/team-net-zero.jpg", width: 1500, height: 1000, alt: "McD BERL sustainable built environment" }]
  },
  twitter: { card: "summary_large_image", title: "McD BERL", description: "Engineering a Sustainable Future" },
  icons: {
    icon: [
      { url: "/assets/branding/mcd-icon.jpg" },
      { url: "/assets/branding/mcd-icon.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/assets/branding/mcd-icon.jpg", sizes: "192x192", type: "image/jpeg" }
    ],
    shortcut: "/assets/branding/mcd-icon.jpg",
    apple: [
      { url: "/assets/branding/mcd-icon.jpg", sizes: "180x180", type: "image/jpeg" }
    ]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
