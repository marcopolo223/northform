"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { FrameImage } from "@/components/FrameImage";
import { SplitWords } from "@/components/SplitWords";
import { useLocale } from "@/lib/i18n/locale-provider";
import { seasonFor, seasonPhoto } from "@/lib/season";

export function HomeHero() {
  const { t } = useLocale();
  const photo = seasonPhoto(seasonFor());

  return (
    <section data-site-hero className="on-dark relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ground">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <FrameImage
          src={photo.src}
          alt={photo.alt}
          className="absolute inset-0"
          imageClassName="hero-drift"
          sizes="100vw"
          position={photo.position}
          quality={92}
          priority
          share
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_top,rgb(12_19_16/0.78)_0%,rgb(12_19_16/0.3)_45%,rgb(12_19_16/0.1)_72%,rgb(12_19_16/0.4)_100%),linear-gradient(to_right,rgb(12_19_16/0.4),transparent_62%)]"
        />
      </div>

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-5 pb-14 pt-[calc(var(--chrome-h)+3rem)] sm:px-8 lg:pb-20">
        <p className="type-kicker eyebrow hero-fade text-fg">{t.hero.tagline}</p>
        <h1 className="type-display mt-5 max-w-[14ch] text-[clamp(2.7rem,6.4vw,6rem)] text-fg [text-shadow:0_1px_24px_rgb(12_19_16/0.35)]">
          <SplitWords text={t.hero.h1} />
        </h1>
        <p
          className="type-voice hero-fade mt-6 max-w-[34rem] text-fg [text-shadow:0_1px_16px_rgb(12_19_16/0.4)]"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          {t.hero.lede}
        </p>
        <div
          className="hero-fade mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          <ButtonLink href="/start">{t.nav.become}</ButtonLink>
          <ButtonLink href="/#treat" variant="ghost">
            {t.hero.treat}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
