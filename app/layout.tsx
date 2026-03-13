import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import Script from "next/script";
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
  icons: {
    icon: "/logo.webp",
  },
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
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PMY45G2F75" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PMY45G2F75');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tfg1pnr8xf");
          `}
        </Script>

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
