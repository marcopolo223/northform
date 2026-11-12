"use client";

import { opensOn } from "@/content/services";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/i18n/locale-provider";

const label = { en: "Opens", es: "Disponible desde", pt: "Disponível a partir de", fr: "Dès" } as const;

/** Shows a quiet "Opens Jan 2027" mark for services that are announced but not yet offered. */
export function OpensTag({ slug, className }: { slug: string; className?: string }) {
  const { locale } = useLocale();
  const when = opensOn[slug];
  if (!when) return null;

  const [year, month] = when.split("-").map(Number);
  const text = new Date(year, month - 1, 1).toLocaleDateString(locale === "en" ? "en-US" : locale, {
    month: "long",
    year: "numeric",
  });

  return (
    <span className={cn("type-kicker inline-flex items-center gap-2 border border-current px-2.5 py-1 text-[0.62rem]", className)}>
      {label[locale]} {text}
    </span>
  );
}
