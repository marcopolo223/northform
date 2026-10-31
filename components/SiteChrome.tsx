"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkipLink } from "@/components/SkipLink";
import { LocaleProvider } from "@/lib/i18n/locale-provider";
import type { Locale } from "@/lib/i18n/config";

export function SiteChrome({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const pathname = usePathname();
  const isPreview = pathname.startsWith("/preview");

  return (
    <LocaleProvider initialLocale={initialLocale}>
      {isPreview ? (
        <main id="content" className="flex-1">
          {children}
        </main>
      ) : (
        <>
          <SkipLink />
          <Header />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </>
      )}
    </LocaleProvider>
  );
}
