"use client";

import { useLocale } from "@/lib/i18n/locale-provider";
import { site } from "@/site.config";

export function CredentialStrip() {
  const { t } = useLocale();

  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-1 text-[0.82rem] tracking-wide text-parchment/80">
      <li>{site.provider.credentials}</li>
      {site.provider.npi ? <li>NPI {site.provider.npi}</li> : <li>{t.credentials.npiSoon}</li>}
    </ul>
  );
}
