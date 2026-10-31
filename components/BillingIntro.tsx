"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { useLocale } from "@/lib/i18n/locale-provider";
import { site } from "@/site.config";

export function BillingIntro() {
  const { t } = useLocale();

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <article className="border border-parchment/15 bg-pine px-6 py-7">
          <p className="type-kicker text-parchment/70">{t.billing.eval}</p>
          <p className="mt-3 font-serif text-5xl text-parchment">${site.rates.evaluation}</p>
          <p className="mt-2 text-parchment/80">{t.billing.minutes}</p>
        </article>
        <article className="border border-parchment/15 bg-pine px-6 py-7">
          <p className="type-kicker text-parchment/70">{t.billing.baseline}</p>
          <p className="mt-3 font-serif text-5xl text-parchment">${site.rates.followUp}</p>
          <p className="mt-2 text-parchment/80">
            {t.billing.followMinutes} — {t.billing.hourNote}
          </p>
        </article>
      </div>
      <p className="mt-6 max-w-2xl text-parchment/85">{t.billing.fitCall}</p>
      <div className="mt-6">
        <ButtonLink href="/start" variant="light">
          {t.nav.become}
        </ButtonLink>
      </div>
    </>
  );
}
