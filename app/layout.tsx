import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Increase Sales by 10-30% Without Ads | Email Automation for WooCommerce | ThriveFlows",
  description:
    "Done-for-you email automation for WooCommerce stores. Recover sales and increase revenue 10-30%. You only pay if it generates at least 10% of sales. 30-day free trial.",
  openGraph: {
    title: "Increase Sales by 10-30% Without Ads | Email Automation for WooCommerce | ThriveFlows",
    description:
      "Done-for-you email automation for WooCommerce stores. Recover sales and increase revenue 10-30%. You only pay if it generates at least 10% of sales. 30-day free trial.",
    url: "https://thriveflows.com",
    siteName: "ThriveFlows",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Increase Sales by 10-30% Without Ads | Email Automation for WooCommerce | ThriveFlows",
    description:
      "Done-for-you email automation for WooCommerce stores. Recover sales and increase revenue 10-30%.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://app.cal.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://player.vimeo.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://app.cal.com" />
        <link rel="dns-prefetch" href="https://player.vimeo.com" />
      </head>
      <body className={`${figtree.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
