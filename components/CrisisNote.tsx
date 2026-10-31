"use client";

import { interpolate } from "@/lib/i18n/dictionaries";
import { useLocale } from "@/lib/i18n/locale-provider";
import { cn } from "@/lib/cn";
import { site } from "@/site.config";

export function CrisisNote({ className }: { className?: string }) {
  const { t } = useLocale();

  return (
    <p className={cn("text-sm leading-relaxed text-parchment/80", className)}>
      {interpolate(t.crisis, {
        emergency: site.crisis.emergency,
        line: site.crisis.line,
      })}
    </p>
  );
}
