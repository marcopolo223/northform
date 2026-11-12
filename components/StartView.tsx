"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { CrisisNote } from "@/components/CrisisNote";
import { IntakeWidget } from "@/components/IntakeWidget";
import { LocalizedHeader } from "@/components/LocalizedHeader";
import { useLocale } from "@/lib/i18n/locale-provider";
import { site } from "@/site.config";

/**
 * Services, durations and prices on this page come only from the live IntakeQ
 * widget. Nothing here is hand-written copy about a service or a fee.
 */
export function StartView() {
  const { t } = useLocale();
  const external = Boolean(site.intakeUrl);

  return (
    <>
      <LocalizedHeader section="start">
        <div className="mt-6">
          <ButtonLink href={site.intakeUrl || "#booking"} external={external}>
            {t.start.begin}
          </ButtonLink>
        </div>
      </LocalizedHeader>

      <Container className="grid items-start gap-10 py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
        <div className="lg:col-span-4 lg:sticky lg:top-[calc(var(--chrome-h)+1.5rem)]">
          <ul className="grid list-none border-t border-fg/15">
            {[
              { href: "/billing", label: t.start.rates },
              { href: "/telehealth", label: t.start.telehealth },
              { href: "/privacy", label: t.nav.privacy },
            ].map((item) => (
              <li key={item.href} className="border-b border-fg/15">
                <Link
                  href={item.href}
                  className="type-ui group flex items-center justify-between py-3 text-fg/80 transition-colors hover:text-fg"
                >
                  {item.label}
                  <span aria-hidden className="btn-arrow text-fg/50">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <CrisisNote className="mt-6" />
        </div>

        <div id="booking" className="scroll-mt-[calc(var(--chrome-h)+1rem)] lg:col-span-8">
          <IntakeWidget mode="intake" />
        </div>
      </Container>
    </>
  );
}
