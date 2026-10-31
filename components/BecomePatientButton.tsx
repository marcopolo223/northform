"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { useLocale } from "@/lib/i18n/locale-provider";

export function BecomePatientButton({
  href = "/start",
  variant = "light",
  className,
  external,
}: {
  href?: string;
  variant?: "primary" | "ghost" | "light";
  className?: string;
  external?: boolean;
}) {
  const { t } = useLocale();
  return (
    <ButtonLink href={href} variant={variant} className={className} external={external}>
      {t.nav.become}
    </ButtonLink>
  );
}
