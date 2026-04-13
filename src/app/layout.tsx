import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Keystone OS | All-in-One Roofing Business Software",
    template: "%s | Keystone OS",
  },
  description:
    "Keystone OS is the all-in-one platform for roofing contractors. Manage leads, estimates, contracts, crews, photos, invoicing, and more from one app. Try free for 14 days.",
  keywords: [
    "roofing software",
    "roofing CRM",
    "roofing contractor software",
    "roofing estimating software",
    "roofing business management",
    "roofing crew management",
    "roofing invoice software",
    "AccuLynx alternative",
    "JobNimbus alternative",
    "CompanyCam alternative",
    "roofing app",
    "roofing project management",
  ],
  authors: [{ name: "Keystone OS" }],
  creator: "Keystone OS",
  publisher: "Keystone OS",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Keystone OS",
    title: "Keystone OS | All-in-One Roofing Business Software",
    description:
      "Manage your entire roofing business from one app. Leads, estimates, contracts, crews, photos, and invoicing. Try free for 14 days.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keystone OS | All-in-One Roofing Business Software",
    description:
      "Manage your entire roofing business from one app. Try free for 14 days.",
  },
  alternates: {
    canonical: "https://keystoneos.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Keystone OS",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "All-in-one roofing business management platform with CRM, estimating, contracts, crew management, photo documentation, and AI assistant.",
  offers: {
    "@type": "Offer",
    price: "149",
    priceCurrency: "USD",
    priceValidUntil: "2027-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "127",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
