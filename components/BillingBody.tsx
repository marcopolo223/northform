"use client";

import { BecomePatientButton } from "@/components/BecomePatientButton";
import { BillingIntro } from "@/components/BillingIntro";
import { FeeEstimate } from "@/components/FeeEstimate";
import { PracticeFaq } from "@/components/PracticeFaq";
import { feeRows } from "@/content/fees";
import { useLocale } from "@/lib/i18n/locale-provider";
import { site } from "@/site.config";

export function BillingBody() {
  const { t } = useLocale();

  return (
    <>
      <BillingIntro />

      <div className="mt-14">
        <FeeEstimate />
      </div>

      <section className="mt-14">
        <h2 className="type-heading text-parchment">{t.billing.standard}</h2>
        <div className="mt-6 overflow-x-auto border border-parchment/15">
          <table className="w-full min-w-[40rem] text-left text-[0.92rem]">
            <thead className="type-kicker border-b border-parchment/15 text-parchment/70">
              <tr>
                <th className="px-5 py-4 font-medium">{t.billing.tableService}</th>
                <th className="px-5 py-4 font-medium">{t.billing.tableRate}</th>
                <th className="px-5 py-4 font-medium">{t.billing.tableIncludes}</th>
              </tr>
            </thead>
            <tbody>
              {feeRows.map((row, index) => {
                const copy = t.catalog.fees.rows[index];
                return (
                  <tr key={row.service} className="border-t border-parchment/10 align-top">
                    <td className="px-5 py-5 text-parchment">
                      {copy?.service ?? row.service}
                      {copy?.duration ? (
                        <span className="mt-1 block text-[0.78rem] text-parchment/75">{copy.duration}</span>
                      ) : null}
                    </td>
                    <td className="px-5 py-5 whitespace-nowrap text-parchment">{row.rate}</td>
                    <td className="px-5 py-5 leading-relaxed text-parchment/80">{copy?.includes ?? row.includes}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="type-meta mt-4 text-parchment/75">{t.billing.ratesNote}</p>
      </section>

      <section className="mt-14 grid gap-8 leading-relaxed text-parchment/85 sm:grid-cols-2">
        <div>
          <h2 className="type-heading text-parchment">{t.billing.why}</h2>
          <p className="mt-3">{t.billing.whyBody}</p>
        </div>
        <div>
          <h2 className="type-heading text-parchment">{t.billing.superbill}</h2>
          <p className="mt-3">{t.billing.superbillBody}</p>
        </div>
        <div>
          <h2 className="type-heading text-parchment">{t.billing.insurance}</h2>
          {site.insurance.length === 0 ? (
            <p className="mt-3">{t.billing.insuranceNone}</p>
          ) : (
            <ul className="mt-3 list-disc pl-5">
              {site.insurance.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h2 className="type-heading text-parchment">{t.billing.sliding}</h2>
          <p className="mt-3">{t.billing.slidingBody}</p>
        </div>
      </section>

      <section className="mt-10 max-w-2xl leading-relaxed text-parchment/85">
        <h2 className="type-heading text-parchment">{t.billing.gfe}</h2>
        <p className="mt-3">{t.billing.gfeBody}</p>
      </section>

      <section className="mt-14 max-w-3xl">
        <PracticeFaq />
        <p className="mt-6">
          <BecomePatientButton variant="ghost" />
        </p>
      </section>
    </>
  );
}
