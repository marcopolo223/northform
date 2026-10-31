import type { Metadata } from "next";
import Link from "next/link";
import { FrameImage } from "@/components/FrameImage";
import { BrainSlot } from "@/components/preview/BrainSlot";
import { nav, site } from "@/site.config";

export const metadata: Metadata = {
  title: "Preview C",
  robots: { index: false, follow: false },
};

export default function PreviewCPage() {
  return (
    <div className="relative min-h-svh overflow-hidden bg-pine-deep text-parchment">
      <div className="absolute inset-0">
        <FrameImage
          src="/images/spokane-bridge.jpg"
            alt="The swinging bridge over the Spokane River at Riverside State Park"
          className="h-full min-h-svh w-full"
          imageClassName="object-cover scale-110 blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-pine-deep/55" aria-hidden />
      </div>

      <div className="relative flex min-h-svh items-stretch p-3 sm:p-5 lg:p-7">
        <div className="relative flex min-h-[calc(100svh-1.5rem)] w-full flex-col overflow-hidden rounded-[1.75rem] border border-parchment/15 bg-pine-deep/55 shadow-[0_40px_80px_rgba(14,22,18,0.45)] backdrop-blur-2xl sm:min-h-[calc(100svh-2.5rem)]">
          <header className="relative z-20 flex items-center justify-between gap-4 px-5 py-5 sm:px-8">
            <Link href="/preview/c" className="flex items-center gap-2">
              <span className="h-2 w-2 rotate-45 bg-moss-soft" aria-hidden />
              <span className="text-[0.95rem] font-medium tracking-[-0.03em]">{site.shortName}</span>
            </Link>
            <nav
              className="hidden items-center gap-6 text-[0.78rem] text-parchment/60 lg:flex"
              aria-label="Preview C"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-parchment"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="hover:text-parchment">
                Contact
              </Link>
            </nav>
            <Link
              href="/start"
              className="rounded-full border border-parchment/30 px-4 py-2 text-[0.75rem] tracking-[0.04em] text-parchment hover:border-parchment hover:bg-parchment/5"
            >
              Start here
            </Link>
          </header>

          <div className="relative flex flex-1 flex-col px-5 pb-6 sm:px-8 lg:px-12">
            <div className="relative min-h-[52svh] flex-1 lg:min-h-[58svh]">
              <div className="pointer-events-none absolute inset-x-0 top-[18%] z-0 hidden items-center justify-between lg:flex">
                <p className="font-sans text-[clamp(4.2rem,11vw,8.4rem)] font-light leading-none tracking-[-0.06em] text-parchment/90">
                  NORTH
                </p>
                <p className="font-sans text-[clamp(4.2rem,11vw,8.4rem)] font-light leading-none tracking-[-0.06em] text-parchment/90">
                  FORM
                </p>
              </div>
              <p className="pointer-events-none relative z-0 text-center font-sans text-[clamp(3rem,16vw,4.5rem)] font-light tracking-[-0.06em] text-parchment/90 lg:hidden">
                NORTHFORM
              </p>

              <div className="absolute left-1/2 top-[46%] z-10 h-[min(34vh,280px)] w-[min(42vw,300px)] -translate-x-1/2 -translate-y-1/2">
                <BrainSlot />
              </div>

              <div className="pointer-events-none absolute inset-x-0 top-[42%] z-0 hidden lg:block">
                <p className="max-w-[17rem] text-[0.9rem] leading-relaxed text-parchment/65">
                  {site.tagline}. Sixty-minute sessions — not a thirty-minute medication check.
                </p>
                <p className="absolute right-0 top-0 max-w-[16rem] text-right text-[0.9rem] leading-relaxed text-parchment/65">
                  {site.provider.full}
                </p>
              </div>

              <div className="absolute bottom-[18%] left-1/2 z-20 -translate-x-1/2">
                <Link
                  href="/services"
                  className="inline-flex rounded-full bg-parchment px-5 py-2.5 text-[0.8rem] tracking-[0.04em] text-pine hover:bg-parchment-deep"
                >
                  See services
                </Link>
              </div>
            </div>

            <div className="relative z-20 mt-auto grid gap-4 pb-4 pt-2 lg:grid-cols-3 lg:items-end">
              <div className="max-w-[16rem]">
                <p className="font-serif text-2xl text-parchment">60 minutes</p>
                <p className="mt-1 text-[0.8rem] leading-relaxed text-parchment/60">
                  The baseline length of the work. Time in the room, every visit.
                </p>
              </div>

              <div className="justify-self-center rounded-2xl border border-parchment/15 bg-pine/50 px-5 py-4 backdrop-blur-md">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-moss-soft">
                  Provider photograph forthcoming
                </p>
                <p className="mt-2 font-serif text-xl text-parchment">{site.provider.name}</p>
                <p className="text-sm text-parchment/70">{site.provider.credentials}</p>
              </div>

              <div className="max-w-[16rem] justify-self-end text-right">
                <p className="font-serif text-2xl text-parchment">Washington</p>
                <p className="mt-1 text-[0.8rem] leading-relaxed text-parchment/60">
                  Telehealth from home. Based in Spokane. Spanish available.
                </p>
                <Link
                  href="/telehealth"
                  className="mt-2 inline-flex text-[0.78rem] text-moss-soft underline-offset-4 hover:text-parchment hover:underline"
                >
                  Telehealth
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="sr-only">
        Interactive three-dimensional model of a brain. Drag to turn it. It rotates on its own
        unless reduced motion is enabled.
      </p>
    </div>
  );
}
