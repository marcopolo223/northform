import type { Metadata } from "next";
import Link from "next/link";
import { FrameImage } from "@/components/FrameImage";
import { IntentSelect } from "@/components/preview/IntentSelect";
import { nav, site } from "@/site.config";

export const metadata: Metadata = {
  title: "Preview A",
  robots: { index: false, follow: false },
};

export default function PreviewAPage() {
  return (
    <div className="min-h-svh bg-pine-deep text-parchment">
      <section className="relative min-h-svh">
        <div className="absolute inset-0">
          <FrameImage
            src="/images/spokane-bowl.jpg"
            alt="Bowl and Pitcher basalt formations on the Spokane River"
            className="h-full min-h-full w-full"
            priority
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-pine-deep/95 via-pine-deep/55 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine/90 via-transparent to-pine-deep/40" aria-hidden />

        <div className="relative flex min-h-svh flex-col">
          <header>
            <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-5 py-5 sm:px-8">
              <Link href="/preview/a" className="flex items-baseline gap-2">
                <span className="text-[0.95rem] font-medium tracking-[-0.03em] text-parchment">
                  {site.shortName}
                </span>
                <span className="hidden text-[0.7rem] tracking-[0.22em] text-moss-soft uppercase sm:inline">
                  Psychiatry
                </span>
              </Link>
              <nav
                className="hidden items-center gap-6 text-[0.82rem] text-parchment/70 lg:flex"
                aria-label="Preview A"
              >
                {nav.map((item) => (
                    <Link key={item.href} href={item.href} className="hover:text-parchment">
                      {item.label}
                    </Link>
                  ))}
              </nav>
              <Link
                href="/start"
                className="bg-parchment px-5 py-2.5 text-[0.78rem] tracking-[0.06em] text-pine hover:bg-parchment-deep"
              >
                Start here
              </Link>
            </div>
          </header>

          <div className="mx-auto grid w-full max-w-[1240px] flex-1 items-end gap-10 px-5 pb-10 pt-10 sm:px-8 lg:grid-cols-2 lg:items-center lg:pb-16 lg:pt-6">
            <div className="max-w-xl">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-moss-soft">{site.tagline}</p>
              <h1 className="mt-4 max-w-[16ch] font-serif text-[clamp(2.35rem,4.6vw,3.5rem)] leading-[1.08] tracking-[-0.035em] text-parchment">
                Psychiatric care for anxiety, depression, and ADHD
              </h1>
              <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-parchment/75">
                Sixty-minute sessions with {site.provider.name}, {site.provider.credentials}.
                Diagnosis, thoughtful prescribing, pharmacogenomics, and a plan you
                can return to — not a thirty-minute medication check.
              </p>
              <IntentSelect />
              <p className="mt-8 text-[0.78rem] leading-relaxed text-moss-soft">
                Sixty-minute sessions · Prescribing · Genomic support
              </p>
            </div>
            <div className="lg:justify-self-end">
              <div className="max-w-sm border border-parchment/20 bg-pine/80 px-5 py-4 backdrop-blur-sm">
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-moss-soft">
                  Provider photograph forthcoming
                </p>
                <p className="mt-2 font-serif text-xl text-parchment">{site.provider.name}</p>
                <p className="text-sm text-parchment/70">{site.provider.credentials}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-parchment/10 bg-pine">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-[1.7rem] tracking-[-0.02em] text-parchment">
              Billing and insurance
            </h2>
            <p className="mt-3 max-w-lg leading-relaxed text-parchment/70">
              Self-pay first. Sliding scale and payment plans for those who may be
              eligible. Contracted insurance will be listed here when it is in
              place.
            </p>
            <Link
              href="/billing"
              className="mt-4 inline-flex text-[0.82rem] text-parchment underline-offset-4 hover:underline"
            >
              Billing
            </Link>
          </div>
          <p className="text-sm leading-relaxed text-moss-soft lg:col-span-5 lg:text-right">
            Based in Spokane · telehealth in Washington · Spanish available
            <br />
            {site.provider.credentials}
          </p>
        </div>
      </section>
    </div>
  );
}
