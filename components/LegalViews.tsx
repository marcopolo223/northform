"use client";

import Link from "next/link";
import { CrisisNote } from "@/components/CrisisNote";
import { LegalPage } from "@/components/LegalPage";
import {
  healthDataSections,
  legalLabels,
  legalLede,
  legalNote,
  nppSections,
  type LegalSection,
} from "@/content/legal";
import { interpolate } from "@/lib/i18n/dictionaries";
import { useLocale } from "@/lib/i18n/locale-provider";
import { site } from "@/site.config";

export function PrivacyView() {
  const { t } = useLocale();
  const copy = t.legal.privacy;

  return (
    <LegalPage eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede}>
      <p>{copy.p1}</p>
      <p>{copy.p2}</p>
      <ul className="divide-y divide-fg/15 border-y border-fg/15">
        <li className="py-3">
          <Link className="text-fg link-u is-ruled" href="/privacy/npp">
            {copy.nppLink}
          </Link>
        </li>
        <li className="py-3">
          <Link className="text-fg link-u is-ruled" href="/privacy/health-data">
            {copy.healthLink}
          </Link>
        </li>
        <li className="py-3">
          <Link className="text-fg link-u is-ruled" href="/terms">
            {copy.termsLink}
          </Link>
        </li>
      </ul>
      <CrisisNote />
    </LegalPage>
  );
}

export function TermsView() {
  const { t } = useLocale();
  const copy = t.legal.terms;

  return (
    <LegalPage eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede}>
      <p>{interpolate(copy.p1, { name: site.name })}</p>
      <p>{interpolate(copy.p2, { provider: site.provider.full })}</p>
      <CrisisNote />
    </LegalPage>
  );
}

function LegalBody({ sections }: { sections: LegalSection[] }) {
  const { locale } = useLocale();
  const date = new Date(2026, 10, 11).toLocaleDateString(locale === "en" ? "en-US" : locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <p className="type-meta text-fg/65">
        {legalLabels.effective[locale]} {date}
      </p>
      {locale !== "en" ? <p className="border-l-2 border-fg/30 pl-4 text-fg/80">{legalNote[locale]}</p> : null}
      {sections.map((section) => (
        <section key={section.heading} className="space-y-4 border-t border-fg/15 pt-8">
          <h2 className="type-heading">{section.heading}</h2>
          {section.paragraphs?.map((text) => <p key={text} lang="en">{text}</p>)}
          {section.items ? (
            <ul className="list-disc space-y-3 pl-5 marker:text-fg/40" lang="en">
              {section.items.map((item) => {
                const cut = item.indexOf(". ");
                const lead = cut > 0 && cut < 48 ? item.slice(0, cut + 1) : "";
                return (
                  <li key={item}>
                    {lead ? <strong className="font-semibold text-fg">{lead}</strong> : null}
                    {lead ? item.slice(cut + 1) : item}
                  </li>
                );
              })}
            </ul>
          ) : null}
          {section.after?.map((text) => <p key={text} lang="en">{text}</p>)}
        </section>
      ))}
      <section className="space-y-2 border-t border-fg/15 pt-8">
        <h2 className="type-heading">{legalLabels.contact[locale]}</h2>
        <p>
          {site.provider.full}
          <br />
          {site.name}
          <br />
          {site.placeholders.address}
          <br />
          <a className="text-fg link-u is-ruled" href={`mailto:${site.placeholders.email}`}>
            {site.placeholders.email}
          </a>
          {" · "}
          <a className="text-fg link-u is-ruled" href={`tel:${site.placeholders.phone.replace(/[^\d+]/g, "")}`}>
            {site.placeholders.phone}
          </a>
        </p>
      </section>
      <CrisisNote />
    </>
  );
}

export function NppView() {
  const { t, locale } = useLocale();
  const copy = t.legal.npp;

  return (
    <LegalPage eyebrow={copy.eyebrow} title={copy.title} lede={legalLede.npp[locale]}>
      <LegalBody sections={nppSections} />
    </LegalPage>
  );
}

export function HealthDataView() {
  const { t, locale } = useLocale();
  const copy = t.legal.healthData;

  return (
    <LegalPage eyebrow={copy.eyebrow} title={copy.title} lede={legalLede.health[locale]}>
      <LegalBody sections={healthDataSections} />
    </LegalPage>
  );
}

export function NondiscriminationView() {
  const { t } = useLocale();
  const copy = t.legal.nondiscrimination;

  return (
    <LegalPage eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede}>
      <p>{copy.p1}</p>
      <p lang="es">
        Atención: si habla español, hay ayuda disponible. Use el selector de idioma en la cabecera o el pie de
        página.
      </p>
      <p lang="pt">
        Atenção: se fala português, há ajuda disponível. Use o seletor de idioma no cabeçalho ou no rodapé.
      </p>
      <p lang="fr">
        Attention : si vous parlez français, une aide est disponible. Utilisez le sélecteur de langue dans l’en-tête
        ou le pied de page.
      </p>
    </LegalPage>
  );
}
