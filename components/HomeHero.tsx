"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { FrameImage } from "@/components/FrameImage";
import { useLocale } from "@/lib/i18n/locale-provider";
import { photos } from "@/lib/photos";

export function HomeHero() {
  const { t } = useLocale();

  return (
    <section data-site-hero className="relative min-h-svh bg-pine-deep text-parchment">
      <div className="absolute inset-0">
        <FrameImage
          src={photos.mist.src}
          alt={photos.mist.alt}
          className="h-full min-h-svh w-full"
          priority
          drift
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-pine-deep/88 via-pine-deep/50 to-pine-deep/15 lg:to-transparent"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/65 via-pine-deep/20 to-pine-deep/35" aria-hidden />

      <div className="relative mx-auto flex min-h-svh w-full max-w-[1400px] items-center px-5 pb-16 pt-[calc(var(--chrome-h,7.5rem)+2.5rem)] sm:px-8 lg:pb-20">
        <div className="hero-copy w-full min-w-0 max-w-xl">
          <p className="type-kicker inline-flex max-w-full rounded-full border border-parchment/35 bg-pine-deep/35 px-3 py-1 text-parchment/90 backdrop-blur-sm">
            {t.hero.tagline}
          </p>
          <h1 className="type-display mt-6 max-w-[16ch] text-parchment">
            {t.hero.h1}
          </h1>
          <p className="type-lede mt-6 w-full text-parchment">{t.hero.lede}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ButtonLink href="/start" variant="light">
              {t.nav.become}
            </ButtonLink>
            <Link
              href="#treat"
              className="type-ui text-parchment/80 underline-offset-4 transition-colors duration-300 ease-out hover:text-parchment hover:underline"
            >
              {t.hero.treat}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
