import type { Metadata, Viewport } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { ViewTransition } from "react";
import { JsonLd } from "@/components/JsonLd";
import { SiteChrome } from "@/components/SiteChrome";
import { localeMeta } from "@/lib/i18n/config";
import { getRequestLocale } from "@/lib/i18n/server";
import { medicalBusinessGraph } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { site } from "@/site.config";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source",
  display: "swap",
  style: ["normal", "italic"],
});

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  variable: "--font-news",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: seo.title,
    template: `%s · ${site.name} · Spokane, WA`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: site.provider.full, url: `${site.url}/about` }],
  creator: site.provider.full,
  publisher: site.name,
  category: "health",
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/spokane-river.jpg", alt: "The Spokane River winding through ponderosa pines at Riverside State Park" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/images/spokane-river.jpg"],
  },
  other: { ...seo.geo },
};

export const viewport: Viewport = {
  themeColor: "#0e1612",
  colorScheme: "dark",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getRequestLocale();

  return (
    <html lang={localeMeta[locale].html} data-scroll-behavior="smooth" className={`${sourceSans.variable} ${newsreader.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-pine-deep font-sans text-parchment">
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
        <JsonLd data={medicalBusinessGraph()} />
        <SiteChrome initialLocale={locale}>
          <ViewTransition default="page-fade">{children}</ViewTransition>
        </SiteChrome>
      </body>
    </html>
  );
}
