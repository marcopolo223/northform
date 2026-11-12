"use client";

import { useLocale } from "@/lib/i18n/locale-provider";

export function PracticeFaq() {
  const { t } = useLocale();

  return (
    <div>
      <h2 className="type-kicker eyebrow text-accent">{t.faq.heading}</h2>
      <div className="mt-6 border-t border-fg/15">
        {t.faq.items.map((item) => (
          <details key={item.q} className="group border-b border-fg/15">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-5 font-serif text-[1.2rem] leading-snug tracking-[-0.01em] text-fg [&::-webkit-details-marker]:hidden">
              {item.q}
              <span
                aria-hidden
                className="shrink-0 font-sans text-lg font-light text-fg/60 transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-2xl pb-6 text-fg/75">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
