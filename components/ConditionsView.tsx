"use client";

import Link from "next/link";
import { BecomePatientButton } from "@/components/BecomePatientButton";
import { ConditionCards } from "@/components/ConditionCards";
import { Container } from "@/components/Container";
import { LocalizedHeader } from "@/components/LocalizedHeader";
import { conditions } from "@/content/conditions";
import { useLocale } from "@/lib/i18n/locale-provider";

export function ConditionsView() {
  const { t } = useLocale();

  return (
    <>
      <LocalizedHeader section="conditions" image="/images/spokane-river.jpg" imageAlt="The Spokane River winding through ponderosa pines at Riverside State Park" />
      <Container className="py-10 lg:py-16">
        <ConditionCards items={conditions} />
        <p className="mt-10">
          <Link
            href="/#treat"
            className="type-ui text-parchment/80 underline-offset-4 hover:text-parchment hover:underline"
          >
            {t.conditions.treatLink}
          </Link>
        </p>
        <div className="mt-8">
          <BecomePatientButton />
        </div>
      </Container>
    </>
  );
}
