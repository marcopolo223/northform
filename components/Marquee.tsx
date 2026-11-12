"use client";

import { useLocale } from "@/lib/i18n/locale-provider";
import { treatCells } from "@/content/treat";

/** Slow, continuous ribbon of what the practice treats. Static when motion is reduced. */
export function Marquee() {
  const { t } = useLocale();
  const items = treatCells.map((cell) => t.treat.cells[cell.slug as keyof typeof t.treat.cells].title);
  const row = [...items, ...items];

  return (
    <div className="on-light overflow-hidden border-b border-fg/15 bg-ground" aria-hidden>
      <div className="marquee flex w-max items-center gap-10 py-6 lg:py-8">
        {row.concat(row).map((label, index) => (
          <span key={`${label}-${index}`} className="flex shrink-0 items-center gap-10">
            <span className="font-serif text-[clamp(1.6rem,3.2vw,2.8rem)] italic leading-none tracking-[-0.03em] text-fg/85">
              {label}
            </span>
            <span className="h-1.5 w-1.5 bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
