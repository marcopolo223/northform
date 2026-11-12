"use client";

import { useLocale } from "@/lib/i18n/locale-provider";

export function SkipLink() {
  const { t } = useLocale();
  return (
    <a
      href="#content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-panel focus:px-3 focus:py-2 focus:text-fg"
    >
      {t.skip}
    </a>
  );
}
