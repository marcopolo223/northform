"use client";

import { BecomePatientButton } from "@/components/BecomePatientButton";
import { TextLink } from "@/components/ButtonLink";
import { ConditionCards } from "@/components/ConditionCards";
import { Container } from "@/components/Container";
import { LocalizedHeader } from "@/components/LocalizedHeader";
import { conditions } from "@/content/conditions";
import { useLocale } from "@/lib/i18n/locale-provider";

export function ConditionsView() {
  const { t } = useLocale();

  return (
    <>
      <LocalizedHeader section="conditions" />
      <Container className="py-14 lg:py-20">
        <ConditionCards items={conditions} />
        <div className="mt-14 flex flex-col gap-8 border-t border-fg/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <TextLink href="/#treat">{t.conditions.treatLink}</TextLink>
          <BecomePatientButton />
        </div>
      </Container>
    </>
  );
}
