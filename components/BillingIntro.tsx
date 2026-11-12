"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/locale-provider";
import { site } from "@/site.config";

export function BillingIntro() {
  const { t } = useLocale();

  const [evalRow, followRow] = [t.catalog.fees.rows[1], t.catalog.fees.rows[2]];
  const rates = [
    { label: evalRow.service, amount: site.rates.evaluation, note: evalRow.includes },
    { label: followRow.service, amount: site.rates.followUp, note: followRow.duration || followRow.includes },
  ];

  return (
    <>
      <div className="grid border-y border-fg/20 sm:grid-cols-2">
        {rates.map((rate, index) => (
          <Reveal
            key={rate.label}
            delay={index * 90}
            className={index > 0 ? "border-t border-fg/20 py-10 sm:border-l sm:border-t-0 sm:pl-10" : "py-10 sm:pr-10"}
          >
            <p className="type-kicker text-fg/60">{rate.label}</p>
            <p className="type-stat mt-6">
              <span className="align-top text-[0.45em] tracking-normal text-fg/60">$</span>
              {rate.amount}
            </p>
            <p className="mt-5 max-w-xs text-fg/75">{rate.note}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-fg/80">{t.billing.fitCall}</p>
        <ButtonLink href="/start" className="shrink-0">
          {t.nav.become}
        </ButtonLink>
      </div>
    </>
  );
}
