"use client";

import { BecomePatientButton } from "@/components/BecomePatientButton";
import { BillingIntro } from "@/components/BillingIntro";
import { CancellationPolicy } from "@/components/CancellationPolicy";
import { FeeEstimate } from "@/components/FeeEstimate";
import { PracticeFaq } from "@/components/PracticeFaq";
import { Reveal } from "@/components/Reveal";
import { feeRows } from "@/content/fees";
import { useLocale } from "@/lib/i18n/locale-provider";
import { site } from "@/site.config";

export function BillingBody() {
  const { t } = useLocale();

  const notes = [
    { title: t.billing.superbill, body: <p>{t.billing.superbillBody}</p> },
    { title: t.billing.why, body: <p>{t.billing.whyBody}</p> },
    {
      title: t.billing.insurance,
      body:
        site.insurance.length === 0 ? (
          <p>{t.billing.insuranceNone}</p>
        ) : (
          <ul className="list-disc pl-5">
            {site.insurance.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        ),
    },
    { title: t.billing.sliding, body: <p>{t.billing.slidingBody}</p> },
    { title: t.billing.gfe, body: <p>{t.billing.gfeBody}</p> },
  ];

  return (
    <div className="space-y-16 lg:space-y-24">
      <BillingIntro />

      <Reveal>
        <FeeEstimate />
      </Reveal>

      <section>
        <h2 className="type-heading">{t.billing.standard}</h2>
        <Reveal className="mt-6">
          <ul className="grid list-none gap-px border border-fg/15 bg-fg/15 sm:grid-cols-2 lg:grid-cols-4">
            {feeRows.map((row, index) => {
              const copy = t.catalog.fees.rows[index];
              const includes = copy?.includes ?? row.includes;
              return (
                <li key={row.service} className="flex flex-col bg-ground p-6">
                  <p className="font-serif text-[1.8rem] leading-none tracking-[-0.03em] text-fg">{row.rate}</p>
                  <p className="mt-4 font-serif text-[1.1rem] leading-snug text-fg">{copy?.service ?? row.service}</p>
                  {copy?.duration ? <p className="type-meta mt-1 text-fg/65">{copy.duration}</p> : null}
                  {includes ? <p className="mt-3 text-[0.92rem] leading-relaxed text-fg/72">{includes}</p> : null}
                </li>
              );
            })}
          </ul>
        </Reveal>
        <p className="type-meta mt-4 text-fg/65">{t.billing.ratesNote}</p>
      </section>

      <ul className="grid list-none gap-px border border-fg/15 bg-fg/15 sm:grid-cols-2 lg:grid-cols-5">
        {notes.map((note) => (
          <li key={note.title} className="bg-ground p-6 sm:last:col-span-2 lg:last:col-span-1">
            <h2 className="type-heading text-[1.2rem]">{note.title}</h2>
            <div className="mt-3 text-[0.93rem] leading-relaxed text-fg/75">{note.body}</div>
          </li>
        ))}
      </ul>

      <CancellationPolicy />

      <section className="max-w-3xl">
        <PracticeFaq />
        <p className="mt-10">
          <BecomePatientButton variant="ghost" />
        </p>
      </section>
    </div>
  );
}
