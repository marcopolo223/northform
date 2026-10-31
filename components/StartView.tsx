"use client";

import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { CrisisNote } from "@/components/CrisisNote";
import { LocalizedHeader } from "@/components/LocalizedHeader";
import { PracticeFaq } from "@/components/PracticeFaq";
import { useLocale } from "@/lib/i18n/locale-provider";
import { site } from "@/site.config";

export function StartView() {
  const { t } = useLocale();
  const intakeHref = site.intakeUrl || "#intake";
  const intakeReady = Boolean(site.intakeUrl);

  return (
    <>
      <LocalizedHeader section="start" image="/images/spokane-river.jpg" imageAlt="The Spokane River winding through ponderosa pines at Riverside State Park">
        <div className="mt-8">
          <ButtonLink href={intakeHref} variant="light" external={intakeReady}>
            {t.start.begin}
          </ButtonLink>
        </div>
      </LocalizedHeader>

      <Container className="grid items-start gap-14 py-12 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="relative lg:col-span-7">
          <div
            className="pointer-events-none absolute top-2 bottom-2 left-0 hidden w-px bg-parchment/12 sm:block"
            aria-hidden
          >
            <span className="spine-fill absolute inset-0 origin-top bg-parchment/55" />
          </div>

          <ol className="list-none space-y-0 sm:pl-10">
            {t.start.chapters.map((chapter) => (
              <li key={chapter.title} className="rise border-t border-parchment/15 py-10 first:border-t-0 first:pt-0 sm:border-t-0 sm:py-12 sm:first:pt-2">
                <h2 className="type-title max-w-[16ch] text-parchment">{chapter.title}</h2>
                <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-parchment/85">
                  {chapter.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="sm:pl-10">
            <PracticeFaq />
          </div>
        </div>

        <aside
          id="intake"
          className="border border-parchment/20 bg-pine/80 px-7 py-10 text-parchment backdrop-blur-md lg:sticky lg:top-28 lg:col-span-5 lg:col-start-8 lg:self-start lg:px-9 lg:py-12"
        >
          <p className="type-kicker text-parchment/70">{t.start.ready}</p>
          <h2 className="type-heading mt-3 text-parchment">{t.start.beginHeading}</h2>
          <p className="mt-4 leading-relaxed text-parchment/85">
            {intakeReady ? t.start.beginReady : t.start.beginSoon}
          </p>
          <div className="mt-8">
            <ButtonLink href={intakeHref} variant="light" external={intakeReady} className="w-full">
              {t.start.begin}
            </ButtonLink>
          </div>
          <p className="type-meta mt-6 text-parchment/75">{t.start.meta}</p>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href="/billing"
              className="type-ui text-parchment/80 underline-offset-4 transition-colors hover:text-parchment hover:underline"
            >
              {t.start.rates}
            </Link>
            <Link
              href="/telehealth"
              className="type-ui text-parchment/80 underline-offset-4 transition-colors hover:text-parchment hover:underline"
            >
              {t.start.telehealth}
            </Link>
            <Link
              href="/privacy"
              className="type-ui text-parchment/80 underline-offset-4 transition-colors hover:text-parchment hover:underline"
            >
              {t.nav.privacy}
            </Link>
          </div>
          <CrisisNote className="mt-8" />
        </aside>
      </Container>
    </>
  );
}
