"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { CredentialStrip } from "@/components/CredentialStrip";
import { CtaBand } from "@/components/CtaBand";
import { EducationReel } from "@/components/EducationReel";
import { LocalizedHeader } from "@/components/LocalizedHeader";
import { PortraitPlaceholder } from "@/components/PortraitPlaceholder";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/locale-provider";

export function AboutView() {
  const { t } = useLocale();

  return (
    <>
      <LocalizedHeader section="about" />

      <Container className="grid items-start gap-8 py-8 sm:gap-14 sm:py-14 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:sticky lg:top-[calc(var(--chrome-h)+2rem)] lg:col-span-5">
          <Reveal variant="media">
            <PortraitPlaceholder className="aspect-[4/3] sm:aspect-[3/4]" />
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <CredentialStrip />
            <p className="type-statement mt-5 text-[clamp(1.3rem,2.2vw,2rem)] sm:mt-8">{t.about.p1}</p>
          </Reveal>
          <div className="mt-6 space-y-4 text-[1rem] leading-[1.65] text-fg/80 sm:mt-10 sm:space-y-6 sm:text-[1.08rem] sm:leading-[1.75]">
            <Reveal>
              <p>{t.about.p2}</p>
            </Reveal>
            <Reveal>
              <p>{t.about.p3}</p>
            </Reveal>
            <Reveal>
              <p className="border-l border-fg/25 pl-4 font-serif text-[1.12rem] leading-[1.5] text-fg sm:pl-6 sm:text-[1.25rem] sm:leading-[1.55]">{t.about.p4}</p>
            </Reveal>
          </div>
          <div className="mt-8 sm:mt-12">
            <ButtonLink href="/start">{t.nav.become}</ButtonLink>
          </div>
        </div>
      </Container>

      <EducationReel />

      <CtaBand />
    </>
  );
}
