"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { CrisisNote } from "@/components/CrisisNote";
import { LocalizedHeader } from "@/components/LocalizedHeader";
import { useLocale } from "@/lib/i18n/locale-provider";
import { telHref } from "@/lib/tel";
import { site } from "@/site.config";

export function ContactView() {
  const { t } = useLocale();
  const phoneLink = telHref(site.placeholders.phone);

  return (
    <>
      <LocalizedHeader section="contact" image="/images/spokane-bowl.jpg" imageAlt="Bowl and Pitcher basalt formations on the Spokane River" />

      <Container className="grid gap-12 py-12 lg:grid-cols-12 lg:py-16">
        <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-6">
          <div>
            <dt className="type-kicker text-parchment/70">{t.contact.email}</dt>
            <dd className="mt-2">
              <a className="text-lg text-parchment hover:underline" href={`mailto:${site.placeholders.email}`}>
                {site.placeholders.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="type-kicker text-parchment/70">{t.contact.phone}</dt>
            <dd className="mt-2 text-lg text-parchment">
              {phoneLink ? (
                <a className="hover:underline" href={phoneLink}>
                  {site.placeholders.phone}
                </a>
              ) : (
                site.placeholders.phone
              )}
            </dd>
          </div>
          <div>
            <dt className="type-kicker text-parchment/70">{t.contact.fax}</dt>
            <dd className="mt-2 text-lg text-parchment">{site.placeholders.fax}</dd>
          </div>
          <div>
            <dt className="type-kicker text-parchment/70">{t.contact.location}</dt>
            <dd className="mt-2 text-lg text-parchment">{site.placeholders.address}</dd>
            <dd className="mt-1 text-sm text-parchment/75">{site.placeholders.addressNote}</dd>
          </div>
          <div>
            <dt className="type-kicker text-parchment/70">{t.contact.hours}</dt>
            <dd className="mt-2 text-lg text-parchment">{t.contact.hoursValue}</dd>
          </div>
        </dl>
        <div className="lg:col-span-5 lg:col-start-8">
          <h2 className="type-heading text-parchment">{t.contact.begin}</h2>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-parchment/85">
            {t.contact.beginBody}
          </p>
          <div className="mt-6">
            <ButtonLink href="/start" variant="light">
              {t.nav.become}
            </ButtonLink>
          </div>
          <CrisisNote className="mt-8" />
        </div>
      </Container>
    </>
  );
}
