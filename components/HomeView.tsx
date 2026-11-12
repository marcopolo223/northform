"use client";

import { ButtonLink, TextLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { HomeHero } from "@/components/HomeHero";
import { PlanSection } from "@/components/PlanSection";
import { PortraitPlaceholder } from "@/components/PortraitPlaceholder";
import { Reveal } from "@/components/Reveal";
import { RevealWords } from "@/components/RevealWords";
import { ScrollWords } from "@/components/ScrollWords";
import { TreatGrid } from "@/components/TreatGrid";
import { useLocale } from "@/lib/i18n/locale-provider";
import { stripArrow } from "@/lib/text";
import { site } from "@/site.config";

export function HomeView() {
  const { t } = useLocale();

  const practical = [
    {
      title: t.home.firstVisitTitle,
      body: t.home.firstVisitBody,
      links: [
        { href: "/start", label: t.home.whatToExpect },
        { href: "/approach", label: t.home.theApproach },
      ],
    },
    {
      title: t.home.cashTitle,
      body: t.home.cashBody,
      links: [{ href: "/billing", label: t.home.rates }],
    },
    {
      title: t.nav.telehealth,
      body: t.home.telehealthBand,
      links: [{ href: "/telehealth", label: stripArrow(t.home.telehealthLink) }],
    },
  ];

  return (
    <>
      <HomeHero />

      <PlanSection />

      <section id="treat" className="on-light border-t border-fg/15 bg-ground">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <Reveal className="lg:col-span-4">
            <p className="type-kicker eyebrow text-accent">{t.nav.care}</p>
            <h2 className="type-title mt-5">
              <RevealWords text={t.treat.titleBefore} />{" "}
              <span className="type-mark">
                <RevealWords text={t.treat.titleMark} delay={3} />
              </span>
              .
            </h2>
            <p className="mt-5 max-w-xs text-fg/72">{t.treat.intro}</p>
            <p className="mt-6">
              <TextLink href="/conditions">{t.treat.named}</TextLink>
            </p>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={100}>
            <TreatGrid />
          </Reveal>
        </div>
      </section>

      <section className="on-dark overflow-hidden bg-ground">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:py-24">
          <div className="lg:col-span-7 lg:pr-12">
            <Reveal>
              <p className="type-kicker eyebrow text-accent">{t.nav.about}</p>
            </Reveal>
            <h2 className="type-title mt-5 text-[clamp(2.2rem,4.4vw,3.8rem)]">
              <RevealWords text={site.provider.name} />
            </h2>
            <p className="type-voice mt-2 text-fg/60">{site.provider.credentials}</p>
            <p className="type-statement mt-8 max-w-xl text-[clamp(1.3rem,2vw,1.75rem)] text-fg">
              <ScrollWords text={t.home.providerLede} />
            </p>
            <Reveal className="mt-8" delay={120}>
              <ButtonLink href="/about">{t.home.aboutMitch}</ButtonLink>
            </Reveal>
          </div>
          <Reveal variant="media" className="relative max-w-sm lg:col-span-4 lg:col-start-9 lg:max-w-none">
            <PortraitPlaceholder />
          </Reveal>
        </div>
      </section>

      <section id="first-visit" className="on-light bg-ground">
        <div className="mx-auto grid max-w-[1400px] gap-x-10 px-5 py-14 sm:px-8 md:grid-cols-3 lg:py-20">
          {practical.map((item, index) => (
            <Reveal key={item.title} variant="rule" delay={index * 70} className="py-7">
              <h2 className="type-heading text-[clamp(1.3rem,1.8vw,1.6rem)] leading-[1.15]">{item.title}</h2>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-fg/72">{item.body}</p>
              <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {item.links.map((link) => (
                  <TextLink key={link.href} href={link.href}>
                    {link.label}
                  </TextLink>
                ))}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
