"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { CrisisNote } from "@/components/CrisisNote";
import { LocalizedHeader } from "@/components/LocalizedHeader";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/locale-provider";
import { telHref } from "@/lib/tel";
import { site } from "@/site.config";

const appointmentLabel = {
  en: "Appointments in",
  es: "Citas en",
  pt: "Consultas em",
  fr: "Rendez-vous en",
} as const;

export function ContactView() {
  const { t, locale } = useLocale();
  const phoneLink = telHref(site.placeholders.phone);

  const details = [
    {
      label: t.contact.phone,
      value: phoneLink ? (
        <a className="link-u" href={phoneLink}>
          {site.placeholders.phone}
        </a>
      ) : (
        site.placeholders.phone
      ),
    },
    { label: t.contact.fax, value: site.placeholders.fax },
    {
      label: t.contact.location,
      value: site.placeholders.address,
      note: site.placeholders.addressNote as string,
    },
    { label: t.contact.hours, value: t.contact.hoursValue },
    {
      label: appointmentLabel[locale],
      value: site.appointmentLanguages.join(" · "),
    },
  ];

  return (
    <>
      <LocalizedHeader section="contact" />

      <Container className="grid gap-16 py-14 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="type-kicker text-fg/60">{t.contact.email}</p>
            <a
              className="link-u is-ruled mt-4 inline-block break-all font-serif text-[clamp(1.6rem,4vw,3.2rem)] leading-tight tracking-[-0.03em] text-fg"
              href={`mailto:${site.placeholders.email}`}
            >
              {site.placeholders.email}
            </a>
          </Reveal>
          <dl className="mt-14 grid sm:grid-cols-2 sm:gap-x-10">
            {details.map((item, index) => (
              <Reveal key={item.label} variant="rule" delay={(index % 2) * 80} className="py-6">
                <dt className="type-kicker text-fg/60">{item.label}</dt>
                <dd className="mt-2 font-serif text-[1.3rem] leading-snug text-fg">{item.value}</dd>
                {item.note ? <dd className="mt-1 text-sm text-fg/65">{item.note}</dd> : null}
              </Reveal>
            ))}
          </dl>
        </div>
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={120}>
          <div className="border-t border-fg/20 pt-8">
            <h2 className="type-heading">{t.contact.begin}</h2>
            <p className="mt-4 leading-relaxed text-fg/78">{t.contact.beginBody}</p>
            <div className="mt-7">
              <ButtonLink href="/start">{t.nav.become}</ButtonLink>
            </div>
            <CrisisNote className="mt-8 border-t border-fg/15 pt-6" />
          </div>
        </Reveal>
      </Container>
    </>
  );
}
