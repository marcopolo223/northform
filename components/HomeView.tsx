"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { FrameImage } from "@/components/FrameImage";
import { HomeHero } from "@/components/HomeHero";
import { PlanSection } from "@/components/PlanSection";
import { Reveal } from "@/components/Reveal";
import { TreatGrid } from "@/components/TreatGrid";
import { useLocale } from "@/lib/i18n/locale-provider";
import { photos } from "@/lib/photos";
import { site } from "@/site.config";

export function HomeView() {
  const { t } = useLocale();

  return (
    <>
      <HomeHero />

      <PlanSection />

      <section id="treat" className="bg-pine-deep pb-20 text-parchment sm:pb-24">
        <div className="mx-auto max-w-[1400px] px-5 pt-16 sm:px-8 lg:pt-24">
          <Reveal>
            <h2 className="type-title max-w-2xl">
              {t.treat.titleBefore} <span className="type-mark">{t.treat.titleMark}</span>.
            </h2>
            <p className="mt-4 max-w-xl text-parchment/85">{t.treat.intro}</p>
          </Reveal>
          <div className="mt-10">
            <TreatGrid />
          </div>
          <p className="mt-8">
            <Link
              href="/conditions"
              className="type-ui text-parchment/80 underline-offset-4 transition-colors hover:text-parchment hover:underline"
            >
              {t.treat.named}
            </Link>
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <FrameImage
          src={photos.pines.src}
          alt={photos.pines.alt}
          className="min-h-[420px] lg:min-h-[560px]"
          sizes="100vw"
          share
          parallax
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pine-deep via-pine-deep/70 to-pine-deep/25" aria-hidden />
        <div className="absolute inset-0 flex items-center">
          <Reveal className="relative z-10 max-w-xl px-5 py-16 sm:px-8 lg:ml-[8%] lg:px-0">
            <h2 className="type-title text-parchment">{site.provider.full}</h2>
            <p className="type-lede mt-5 text-parchment/85">{t.home.providerLede}</p>
            <div className="mt-8">
              <ButtonLink href="/about" variant="light">
                {t.home.aboutMitchell}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="first-visit" className="border-b border-parchment/10 bg-pine-deep text-parchment">
        <Reveal className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-20">
          <h2 className="type-title max-w-2xl">{t.home.firstVisitTitle}</h2>
          <p className="mt-4 max-w-lg text-parchment/85">{t.home.firstVisitBody}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ButtonLink href="/start" variant="light">
              {t.home.whatToExpect}
            </ButtonLink>
            <Link
              href="/approach"
              className="type-ui text-parchment/80 underline-offset-4 transition-colors hover:text-parchment hover:underline"
            >
              {t.home.theApproach}
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="border-b border-parchment/15 bg-pine text-parchment">
        <Reveal className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:py-16">
          <h2 className="type-title max-w-2xl">{t.home.cashTitle}</h2>
          <p className="mt-4 max-w-lg text-parchment/85">{t.home.cashBody}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ButtonLink href="/start" variant="light">
              {t.nav.become}
            </ButtonLink>
            <Link
              href="/billing"
              className="type-ui text-parchment/80 underline-offset-4 transition-colors duration-300 hover:text-parchment hover:underline"
            >
              {t.home.rates}
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="border-b border-parchment/10 bg-pine-deep text-parchment">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-5 py-8 sm:px-8">
          <p className="max-w-xl text-parchment/85">{t.home.telehealthBand}</p>
          <Link
            href="/telehealth"
            className="type-ui text-parchment/80 underline-offset-4 hover:text-parchment hover:underline"
          >
            {t.home.telehealthLink}
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
