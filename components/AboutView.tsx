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
      <LocalizedHeader section="about" image="/images/spokane-bridge.jpg" imageAlt="The swinging bridge over the Spokane River at Riverside State Park" />

      <Container className="grid items-start gap-10 py-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:py-14">
        <Reveal>
          <PortraitPlaceholder />
        </Reveal>
        <Reveal delay={80}>
          <div className="space-y-6 text-[1.08rem] leading-[1.7] text-parchment/85">
            <CredentialStrip />
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <p>{t.about.p4}</p>
            <div className="pt-2">
              <ButtonLink href="/start" variant="light">
                {t.nav.become}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>

      <EducationReel />

      <CtaBand />
    </>
  );
}
