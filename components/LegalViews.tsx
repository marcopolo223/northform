"use client";

import Link from "next/link";
import { CrisisNote } from "@/components/CrisisNote";
import { LegalPage } from "@/components/LegalPage";
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
      <ul className="divide-y divide-parchment/15 border-y border-parchment/15">
        <li className="py-3">
          <Link className="text-parchment underline-offset-4 hover:underline" href="/privacy/npp">
            {copy.nppLink}
          </Link>
        </li>
        <li className="py-3">
          <Link className="text-parchment underline-offset-4 hover:underline" href="/privacy/health-data">
            {copy.healthLink}
          </Link>
        </li>
        <li className="py-3">
          <Link className="text-parchment underline-offset-4 hover:underline" href="/terms">
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

export function NppView() {
  const { t } = useLocale();
  const copy = t.legal.npp;

  return (
    <LegalPage eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede}>
      <p>{copy.p1}</p>
      <p>{copy.p2}</p>
      <CrisisNote />
    </LegalPage>
  );
}

export function HealthDataView() {
  const { t } = useLocale();
  const copy = t.legal.healthData;

  return (
    <LegalPage eyebrow={copy.eyebrow} title={copy.title} lede={copy.lede}>
      <p>{copy.p1}</p>
      <p>{copy.p2}</p>
      <p>{copy.p3}</p>
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
