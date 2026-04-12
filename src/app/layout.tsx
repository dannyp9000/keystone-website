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
    default: "Keystone OS — The Operating System for Roofing Contractors",
    template: "%s | Keystone OS",
  },
  description:
    "AI-powered, all-in-one SaaS platform for roofing contractors. CRM, estimates, contracts, crew management, photo documentation, and Knox AI assistant — replace 5 tools with one.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Keystone OS",
    title: "Keystone OS — The Operating System for Roofing Contractors",
    description:
      "AI-powered, all-in-one SaaS platform for roofing contractors. Replace your fragmented stack with one platform built for roofing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keystone OS — The Operating System for Roofing Contractors",
    description:
      "AI-powered, all-in-one SaaS platform for roofing contractors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
