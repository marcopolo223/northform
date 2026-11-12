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
    <footer className="on-dark border-t border-fg/10 bg-ground pb-24 lg:pb-0">
      <Container className="grid gap-14 pb-14 pt-20 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:pt-24">
        <div className="sm:col-span-2 lg:col-span-5">
          <p className="type-mark text-[clamp(2.6rem,5vw,4rem)] leading-none text-fg">{site.name}</p>
          <p className="mt-6 text-fg/75">{site.provider.full}</p>
          <p className="mt-1 font-serif italic text-fg/55">
            {site.location} · {t.footer.hours}
          </p>
          <div className="mt-8 flex flex-col gap-2">
            <a className="link-u is-ruled self-start font-serif text-[1.35rem] text-fg" href={`mailto:${site.placeholders.email}`}>
              {site.placeholders.email}
            </a>
            {phoneLink ? (
              <a className="link-u self-start text-fg/80 hover:text-fg" href={phoneLink}>
                {site.placeholders.phone}
              </a>
            ) : (
              <span className="text-fg/80">{site.placeholders.phone}</span>
            )}
          </div>
        </div>
        <nav className="lg:col-span-2 lg:col-start-7" aria-label="Footer">
          <ul className="grid gap-y-3 text-[0.95rem] text-fg/75">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-u transition-colors hover:text-fg">
                  {labelFor(item.href, item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="lg:col-span-2" aria-label="Legal">
          <ul className="grid gap-y-3 text-[0.95rem] text-fg/75">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-u transition-colors hover:text-fg">
                  {labelFor(item.href, item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher variant="footer" className="lg:col-span-2" />
      </Container>
      <Container className="flex flex-col gap-6 border-t border-fg/10 py-6 text-[0.85rem] leading-relaxed text-fg/65 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl space-y-1.5">
          <p className="text-fg/80">
            {interpolate(t.footer.crisis, {
              emergency: site.crisis.emergency,
              line: site.crisis.line,
            })}
          </p>
          <p>
            © {new Date().getFullYear()} {site.name}. <span className="text-fg/55">{t.footer.photos}</span>
          </p>
        </div>
        <BotanicalMark className="self-end" />
      </Container>
    </footer>
  );
}
