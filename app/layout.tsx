import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

const headlineFont = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-headline",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://veteranmillionaire.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Veteran Millionaire — Build More With the Benefits You Earned",
    template: "%s | Veteran Millionaire",
  },
  description:
    "Helping one million veterans save more, earn more, invest smarter, and build lasting wealth. Veteran discounts, real estate education, business ideas, benefit updates, and a community built for veterans.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Veteran Millionaire",
    title: "Veteran Millionaire — Build More With the Benefits You Earned",
    description:
      "Veteran discounts, real estate education, business ideas, benefit updates, investing resources, and a community built to help veterans create lasting wealth.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veteran Millionaire — Build More With the Benefits You Earned",
    description:
      "Veteran discounts, real estate education, business ideas, benefit updates, investing resources, and a community built to help veterans create lasting wealth.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headlineFont.variable} ${bodyFont.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
