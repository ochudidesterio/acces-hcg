import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ACES Hotel Consultancy Group | Africa's Premier Hospitality Consultancy",
    template: "%s | ACES HCG",
  },
  description:
    "ACES Hotel Consultancy Group — strategic hospitality advisory, operational excellence and brand transformation for hotels, resorts and restaurants across East Africa.",
  keywords: [
    "hotel consultancy Africa",
    "hospitality consulting Kenya",
    "hotel advisory Nairobi",
    "restaurant consulting East Africa",
    "hotel management Rwanda",
    "ACES HCG",
  ],
  authors: [{ name: "ACES Hotel Consultancy Group", url: "https://www.aceshcg.com" }],
  creator: "ACES Hotel Consultancy Group",
  metadataBase: new URL("https://www.aceshcg.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.aceshcg.com",
    siteName: "ACES Hotel Consultancy Group",
    title: "ACES Hotel Consultancy Group | Africa's Premier Hospitality Consultancy",
    description:
      "Strategic hospitality advisory, operational excellence and brand transformation for hotels, resorts and restaurants across East Africa.",
    images: [
      {
        url: "/og-image.jpg",   // add a 1200×630 image to /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "ACES Hotel Consultancy Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACES Hotel Consultancy Group",
    description: "Africa's Premier Hospitality Consultancy",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}