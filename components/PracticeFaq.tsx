"use client";

import { useLocale } from "@/lib/i18n/locale-provider";

export function PracticeFaq() {
  const { t } = useLocale();

  return (
    <div>
      <h2 className="type-heading text-parchment">{t.faq.heading}</h2>
      <dl className="mt-4 divide-y divide-parchment/15 border-y border-parchment/15">
        {t.faq.items.map((item) => (
          <div key={item.q} className="py-5">
            <dt className="font-medium text-parchment">{item.q}</dt>
            <dd className="mt-2 text-parchment/80">{item.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
