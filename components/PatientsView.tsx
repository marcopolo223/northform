"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { IntakeWidget } from "@/components/IntakeWidget";
import { LocalizedHeader } from "@/components/LocalizedHeader";
import { useLocale } from "@/lib/i18n/locale-provider";
import { site } from "@/site.config";

export function PatientsView() {
  const { t } = useLocale();
  const portal = site.patientPortalUrl;

  return (
    <>
      <LocalizedHeader section="patients" />
      <Container className="grid items-start gap-10 py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
        <div className="lg:col-span-4">
          <p className="type-statement text-[clamp(1.3rem,2vw,1.7rem)]">{t.patients.body}</p>
          <p className="mt-6">
            <a className="link-u is-ruled font-serif text-[1.2rem] text-fg" href={`mailto:${site.placeholders.email}`}>
              {site.placeholders.email}
            </a>
          </p>
          <div className="mt-8 border-t border-fg/15 pt-6">
            <ButtonLink href="/start" variant="ghost">
              {t.nav.become}
            </ButtonLink>
          </div>
        </div>
        <div className="lg:col-span-8">
          {portal ? (
            <ButtonLink href={portal} external>
              {t.patients.login}
            </ButtonLink>
          ) : (
            <IntakeWidget mode="portal" />
          )}
        </div>
      </Container>
    </>
  );
}
