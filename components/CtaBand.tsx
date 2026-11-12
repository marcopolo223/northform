"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { RevealWords } from "@/components/RevealWords";
import { useLocale } from "@/lib/i18n/locale-provider";

export function CtaBand() {
  const { t } = useLocale();

  return (
    <section className="on-dark overflow-hidden bg-ground">
      <Container className="grid items-end gap-12 py-12 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="scale-in origin-left lg:col-span-8">
          <h2 className="type-display max-w-[12ch] text-fg">
            <RevealWords text={t.cta.title} />
          </h2>
          <p className="type-voice mt-8 max-w-xl text-fg/78">{t.cta.body}</p>
        </div>
        <div className="flex flex-col gap-5 lg:col-span-4 lg:items-end lg:pb-2">
          <ButtonLink href="/start">{t.nav.become}</ButtonLink>
          <ButtonLink href="/billing" variant="ghost">
            {t.cta.billing}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
