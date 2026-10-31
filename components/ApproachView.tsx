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
      <LocalizedHeader section="approach" image="/images/spokane-bowl.jpg" imageAlt="Bowl and Pitcher basalt formations on the Spokane River" />
      <Container className="py-8 sm:py-12 lg:py-16">
        <Reveal>
          <p className="mb-8 max-w-2xl text-[1.05rem] leading-relaxed text-parchment/85 lg:mb-12">
            {t.approach.intro}
          </p>
        </Reveal>
        <dl>
          {t.approach.terms.map((term, index) => (
            <Reveal key={term.name} delay={index * 70}>
              <div className="grid gap-3 border-t border-parchment/15 py-8 sm:grid-cols-[18rem_minmax(0,1fr)] sm:gap-14 lg:py-10">
                <dt className="font-serif text-[clamp(1.7rem,2.4vw,2.35rem)] leading-tight text-parchment">
                  {term.name}
                </dt>
                <dd className="max-w-2xl text-[1.05rem] leading-relaxed text-parchment/85">{term.body}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
      <Container className="pb-16">
        <BecomePatientButton />
      </Container>
    </>
  );
}
