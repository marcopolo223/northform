"use client";

import Link from "next/link";
import { BecomePatientButton } from "@/components/BecomePatientButton";
import { TextLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { LocalizedHeader } from "@/components/LocalizedHeader";
import { OpensTag } from "@/components/OpensTag";
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
      <LocalizedHeader
        section="care"
        image="/images/spokane-river.jpg"
        imageAlt="The Spokane River winding through ponderosa pines at Riverside State Park"
      />

      <Container className="py-16 lg:py-28">
        {core.map((item, index) => (
          <Reveal
            key={item.title}
            variant="rule"
            delay={index * 70}
            className="grid gap-4 py-10 lg:grid-cols-12 lg:items-baseline lg:gap-8 lg:py-14"
          >
            <h2 className="font-serif text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.08] tracking-[-0.03em] lg:col-span-4">
              {item.title}
            </h2>
            <p className="max-w-2xl text-[1.08rem] leading-[1.75] text-fg/78 lg:col-span-7 lg:col-start-6">{item.body}</p>
          </Reveal>
        ))}
      </Container>

      <section className="bg-panel">
        <Container className="grid gap-8 py-16 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-5">
            <h2 className="type-title text-[clamp(1.9rem,3.4vw,3rem)]">{t.care.slidingTitle}</h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={80}>
            <p className="type-voice text-fg/85">{t.care.slidingBody}</p>
            <p className="mt-8">
              <TextLink href="/billing">{t.care.ratesLink}</TextLink>
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="py-16 lg:py-28">
        <ul className="list-none border-t border-fg/20">
          {offerings.map((item) => {
            const copy = t.catalog.offerings[item.slug];
            return (
              <li key={item.slug} className="treat-row border-b border-fg/20">
                <Link
                  href={`/services/${item.slug}`}
                  className="group grid gap-3 py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)_auto] sm:items-baseline sm:gap-10"
                >
                  <span className="treat-title font-serif text-[clamp(1.45rem,2.4vw,2.1rem)] leading-[1.1] tracking-[-0.025em]">
                    {copy?.title ?? item.title}
                    <OpensTag slug={item.slug} className="ml-3 align-middle text-fg/60" />
                  </span>
                  <span className="max-w-xl text-fg/75">{copy?.lede ?? item.lede}</span>
                  <span aria-hidden className="btn-arrow hidden text-fg/60 sm:inline">
                    →
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-fg/70">
            {t.care.catalogNote}{" "}
            <Link href="/conditions" className="link-u is-ruled text-fg">
              {t.nav.conditions}
            </Link>
            .
          </p>
          <BecomePatientButton />
        </div>
      </Container>
    </>
  );
}
