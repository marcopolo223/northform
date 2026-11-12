"use client";

import { BecomePatientButton } from "@/components/BecomePatientButton";
import { Container } from "@/components/Container";
import { LocalizedHeader } from "@/components/LocalizedHeader";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/locale-provider";

export function ApproachView() {
  const { t } = useLocale();

  return (
    <>
      <LocalizedHeader
        section="approach"
        image="/images/spokane-bowl.jpg"
        imageAlt="Bowl and Pitcher basalt formations on the Spokane River"
      />
      <Container className="py-10 sm:py-16 lg:py-28">
        <div className="grid lg:grid-cols-12">
          <Reveal className="lg:col-span-8 lg:col-start-5">
            <p className="type-voice text-[clamp(1.45rem,2.4vw,2.1rem)] leading-[1.35] text-fg">{t.approach.intro}</p>
          </Reveal>
        </div>
        <dl className="mt-16 lg:mt-24">
          {t.approach.terms.map((term, index) => (
            <Reveal
              key={term.name}
              variant="rule"
              delay={(index % 2) * 70}
              className="grid gap-3 py-7 sm:gap-4 sm:py-10 lg:grid-cols-12 lg:gap-8 lg:py-14"
            >
              <dt className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.05] tracking-[-0.03em] lg:col-span-4">
                {term.name}
              </dt>
              <dd className="max-w-2xl text-[1.08rem] leading-[1.75] text-fg/78 lg:col-span-7 lg:col-start-6">
                {term.body}
              </dd>
            </Reveal>
          ))}
        </dl>
        <div className="mt-16 border-t border-fg/15 pt-10">
          <BecomePatientButton />
        </div>
      </Container>
    </>
  );
}
