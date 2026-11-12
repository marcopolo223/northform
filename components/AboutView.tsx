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

      <Container className="grid items-start gap-14 py-14 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:sticky lg:top-[calc(var(--chrome-h)+2rem)] lg:col-span-5">
          <Reveal variant="media">
            <PortraitPlaceholder />
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <CredentialStrip />
            <p className="type-statement mt-8 text-[clamp(1.45rem,2.2vw,2rem)]">{t.about.p1}</p>
          </Reveal>
          <div className="mt-10 space-y-6 text-[1.08rem] leading-[1.75] text-fg/80">
            <Reveal>
              <p>{t.about.p2}</p>
            </Reveal>
            <Reveal>
              <p>{t.about.p3}</p>
            </Reveal>
            <Reveal>
              <p className="border-l border-fg/25 pl-6 font-serif text-[1.25rem] leading-[1.55] text-fg">{t.about.p4}</p>
            </Reveal>
          </div>
          <div className="mt-12">
            <ButtonLink href="/start">{t.nav.become}</ButtonLink>
          </div>
        </div>
      </Container>

      <EducationReel />

      <CtaBand />
    </>
  );
}
