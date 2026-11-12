"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { useLocale } from "@/lib/i18n/locale-provider";

export function NotFoundView() {
  const { t } = useLocale();

  return (
    <>
      <PageHeader eyebrow="404" title={t.notFound.title} lede={t.notFound.lede} />
      <Container className="py-14 lg:py-20">
        <ButtonLink href="/">{t.notFound.home}</ButtonLink>
      </Container>
    </>
  );
}
