"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { LocalizedHeader } from "@/components/LocalizedHeader";
import { photos } from "@/lib/photos";
import { useLocale } from "@/lib/i18n/locale-provider";
import { site } from "@/site.config";

export function PatientsView() {
  const { t } = useLocale();
  const portal = site.patientPortalUrl;

  return (
    <>
      <LocalizedHeader
        section="patients"
        image={photos.pines.src}
        imageAlt={photos.pines.alt}
      />
      <Container className="max-w-2xl space-y-6 py-12 lg:py-16">
        <p className="text-lg leading-relaxed text-parchment/80">{t.patients.body}</p>
        {portal ? (
          <p>
            <ButtonLink href={portal} external>
              {t.patients.login}
            </ButtonLink>
          </p>
        ) : (
          <p className="text-parchment/75">{t.patients.soon}</p>
        )}
        <p className="pt-4">
          <a
            className="type-ui text-parchment/80 underline-offset-4 hover:text-parchment hover:underline"
            href={`mailto:${site.placeholders.email}`}
          >
            {site.placeholders.email}
          </a>
        </p>
        <p>
          <ButtonLink href="/start" variant="ghost">
            {t.nav.become}
          </ButtonLink>
        </p>
      </Container>
    </>
  );
}
