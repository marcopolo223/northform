"use client";

import { interpolate } from "@/lib/i18n/dictionaries";
import { useLocale } from "@/lib/i18n/locale-provider";
import { site } from "@/site.config";

export function ReviewedBy({ date }: { date?: string }) {
  const { t } = useLocale();
  const stamp = date ?? new Date().toISOString().slice(0, 10);
  return (
    <p className="text-[0.72rem] tracking-wide text-moss-soft">
      {interpolate(t.article.reviewed, { name: site.provider.reviewedBy, date: stamp })}
    </p>
  );
}
