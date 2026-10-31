"use client";

import Link from "next/link";
import { BecomePatientButton } from "@/components/BecomePatientButton";
import { Container } from "@/components/Container";
import { LocalizedHeader } from "@/components/LocalizedHeader";
import { Reveal } from "@/components/Reveal";
import { offerings } from "@/content/services";
import { useLocale } from "@/lib/i18n/locale-provider";

export function CareView() {
  const { t } = useLocale();
  const core = [
    { title: t.care.diagnosisTitle, body: t.care.diagnosisBody },
    { title: t.care.prescribingTitle, body: t.care.prescribingBody },
    { title: t.care.therapyTitle, body: t.care.therapyBody },
  ];

  return (
    <>
      <LocalizedHeader section="care" image="/images/spokane-river.jpg" imageAlt="The Spokane River winding through ponderosa pines at Riverside State Park" />
      <Container className="py-10 lg:py-16">
        <div className="max-w-3xl">
          {core.map((item) => (
            <Reveal key={item.title}>
              <article className="border-t border-parchment/15 py-10">
                <h2 className="type-title text-parchment">{item.title}</h2>
                <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-parchment/85">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <article className="mt-4 max-w-3xl border-t border-parchment/15 py-10">
          <h2 className="type-title text-parchment">{t.care.slidingTitle}</h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-parchment/85">{t.care.slidingBody}</p>
          <p className="mt-4">
            <Link
              href="/billing"
              className="type-ui text-parchment/80 underline-offset-4 hover:text-parchment hover:underline"
            >
              {t.care.ratesLink}
            </Link>
          </p>
        </article>

        <ul className="mt-2">
          {offerings.map((item) => {
            const copy = t.catalog.offerings[item.slug];
            return (
              <Reveal key={item.slug}>
                <li className="grid gap-3 border-t border-parchment/15 py-8 sm:grid-cols-[17rem_minmax(0,1fr)] sm:gap-14">
                  <h3 className="type-heading text-parchment">
                    <Link href={`/services/${item.slug}`} className="hover:text-moss-soft">
                      {copy?.title ?? item.title}
                    </Link>
                  </h3>
                  <p className="leading-relaxed text-parchment/85">{copy?.lede ?? item.lede}</p>
                </li>
              </Reveal>
            );
          })}
        </ul>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-parchment/80">
          {t.care.catalogNote}{" "}
          <Link href="/conditions" className="text-parchment underline-offset-4 hover:underline">
            {t.nav.conditions}
          </Link>
          .
        </p>

        <div className="mt-10">
          <BecomePatientButton />
        </div>
      </Container>
    </>
  );
}
