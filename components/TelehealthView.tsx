"use client";

import { BecomePatientButton } from "@/components/BecomePatientButton";
import { Container } from "@/components/Container";
import { LocalizedHeader } from "@/components/LocalizedHeader";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/locale-provider";

export function TelehealthView() {
  const { t } = useLocale();

  return (
    <>
      <LocalizedHeader section="telehealth" />
      <Container className="grid py-16 lg:grid-cols-12 lg:py-28">
        <div className="space-y-8 lg:col-span-7 lg:col-start-5">
          <Reveal>
            <p className="type-statement">{t.telehealth.p1}</p>
          </Reveal>
          <Reveal>
            <p className="text-[1.08rem] leading-[1.75] text-fg/78">{t.telehealth.p2}</p>
          </Reveal>
          <div className="pt-4">
            <BecomePatientButton />
          </div>
        </div>
      </Container>
    </>
  );
}
