"use client";

import { BecomePatientButton } from "@/components/BecomePatientButton";
import { Container } from "@/components/Container";
import { LocalizedHeader } from "@/components/LocalizedHeader";
import { useLocale } from "@/lib/i18n/locale-provider";

export function TelehealthView() {
  const { t } = useLocale();

  return (
    <>
      <LocalizedHeader section="telehealth" image="/images/spokane-bowl.jpg" imageAlt="Bowl and Pitcher basalt formations on the Spokane River" />
      <Container className="max-w-3xl space-y-5 py-10 leading-relaxed text-parchment/85 sm:py-12">
        <p>{t.telehealth.p1}</p>
        <p>{t.telehealth.p2}</p>
        <BecomePatientButton />
      </Container>
    </>
  );
}
