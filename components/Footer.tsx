"use client";

import Link from "next/link";
import { BotanicalMark } from "@/components/BotanicalMark";
import { Container } from "@/components/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { interpolate, navKeyByHref } from "@/lib/i18n/dictionaries";
import { useLocale } from "@/lib/i18n/locale-provider";
import { telHref } from "@/lib/tel";
import { footerNav, legalNav, site } from "@/site.config";

export function Footer() {
  const { t } = useLocale();
  const phoneLink = telHref(site.placeholders.phone);

  const labelFor = (href: string, fallback: string) => {
    const key = navKeyByHref[href];
    return key ? t.nav[key] : fallback;
  };

  return (
    <footer className="border-t border-parchment/10 bg-pine-deep pb-24 text-parchment lg:pb-0">
      <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="type-mark text-2xl text-parchment">{site.name}</p>
          <p className="mt-3 text-sm text-parchment/80">{site.provider.full}</p>
          <p className="mt-5 text-sm">
            <a className="text-parchment underline-offset-4 hover:underline" href={`mailto:${site.placeholders.email}`}>
              {site.placeholders.email}
            </a>
            <span className="mx-2 text-parchment/40">·</span>
            {phoneLink ? (
              <a className="text-parchment underline-offset-4 hover:underline" href={phoneLink}>
                {site.placeholders.phone}
              </a>
            ) : (
              <span>{site.placeholders.phone}</span>
            )}
          </p>
          <p className="mt-2 text-sm text-parchment/75">
            {site.location} · {t.footer.hours}
          </p>
          <LanguageSwitcher variant="footer" className="mt-8" />
        </div>
        <nav className="lg:col-span-3" aria-label="Footer">
          <ul className="grid gap-y-3 text-sm text-parchment/80">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-parchment">
                  {labelFor(item.href, item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="lg:col-span-3" aria-label="Legal">
          <ul className="grid gap-y-3 text-sm text-parchment/80">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-parchment">
                  {labelFor(item.href, item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-end lg:col-span-1 lg:justify-end">
          <BotanicalMark />
        </div>
      </Container>
      <Container className="border-t border-parchment/10 py-5 text-sm leading-relaxed text-parchment/80">
        <p>
          {interpolate(t.footer.crisis, {
            emergency: site.crisis.emergency,
            line: site.crisis.line,
          })}
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} {site.name}.
        </p>
        <p className="mt-2 text-xs text-parchment/55">{t.footer.photos}</p>
      </Container>
    </footer>
  );
}
