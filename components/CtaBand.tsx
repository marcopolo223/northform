"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { FrameImage } from "@/components/FrameImage";
import { useLocale } from "@/lib/i18n/locale-provider";

export function CtaBand() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden text-parchment">
      <FrameImage
        src="/images/spokane-bowl.jpg"
        alt=""
        className="absolute inset-0 min-h-[420px] w-full"
        sizes="100vw"
        parallax
      />
      <div className="absolute inset-0 bg-gradient-to-r from-pine-deep/88 via-pine-deep/70 to-pine-deep/45" aria-hidden />
      <div className="relative flex items-end px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
        <div className="rise mx-auto w-full max-w-[1400px]">
          <div className="max-w-xl">
            <h2 className="type-title">{t.cta.title}</h2>
            <p className="type-lede mt-5 text-parchment/85">{t.cta.body}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <ButtonLink href="/start" variant="light">
                {t.nav.become}
              </ButtonLink>
              <Link
                href="/billing"
                className="type-ui text-parchment/75 underline-offset-4 hover:text-parchment hover:underline"
              >
                {t.cta.billing}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
