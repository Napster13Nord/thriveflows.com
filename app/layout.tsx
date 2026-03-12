import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
      <body className={`${figtree.variable} ${inter.variable}`}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
              Cal("init", "revenue-recovery-potential-call", {origin:"https://app.cal.com"});
              Cal.ns["revenue-recovery-potential-call"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
            `
          }}
        />
      </body>
    </html>
  );
}
