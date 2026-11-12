import type { Metadata } from "next";
import Link from "next/link";
import { FrameImage } from "@/components/FrameImage";
import { nav, site } from "@/site.config";

export const metadata: Metadata = {
  title: "Preview B",
  robots: { index: false, follow: false },
};

const facts = [
  {
    value: "60",
    label: "Minute sessions",
    detail: "The baseline length of the work — not a thirty-minute medication check.",
  },
  {
    value: "1:1",
    label: "Private practice",
    detail: `With ${site.provider.name}, ${site.provider.credentials}.`,
  },
  {
    value: "WA",
    label: "Telehealth",
    detail: "Care from home across Washington. Spanish available.",
  },
];

const pillars = [
  {
    title: "Diagnosis",
    body: "A formal name, when it is accurate, is a map — not a verdict. Time enough to get it right.",
    icon: "diagnosis",
  },
  {
    title: "Thoughtful prescribing",
    body: "Medication when it belongs, with pharmacogenomics beside conventional medicine — not a stamp and a refill.",
    icon: "prescribe",
  },
  {
    title: "A practice to return to",
    body: "ADHD, depression, anxiety, trauma load, hormones and mood. The same clinician, every time.",
    icon: "return",
  },
];

function PillarIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    className: "h-7 w-7 text-moss-soft",
    "aria-hidden": true,
  } as const;

  if (name === "prescribe") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="1.4">
        <path d="M8 4h6l4 4v12H8V4Z" />
        <path d="M14 4v4h4" />
        <path d="M10 13h6M10 17h4" />
      </svg>
    );
  }

  if (name === "return") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="1.4">
        <circle cx="9" cy="9" r="3" />
        <path d="M4 19c.6-2.8 2.6-4 5-4s4.4 1.2 5 4" />
        <circle cx="16.5" cy="10" r="2.2" />
        <path d="M20 19c-.4-2-1.8-3-3.5-3" />
      </svg>
    );
  }

  return (
    <svg {...common} stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5v2M12 17v2M5 12H7M17 12h2" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}

export default function PreviewBPage() {
  return (
    <div className="min-h-svh bg-pine-deep text-parchment">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block">
          <FrameImage
            src="/images/spokane-river.jpg"
            alt="The Spokane River winding through ponderosa pines at Riverside State Park"
            className="h-full w-full"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-pine-deep via-pine-deep/70 to-transparent"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/80 via-transparent to-pine-deep/30" aria-hidden />
        </div>

        <header className="relative">
          <div className="mx-auto grid max-w-[1240px] grid-cols-[1fr_auto] items-center gap-4 px-5 py-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
            <Link href="/preview/b" className="justify-self-start">
              <span className="text-[1.05rem] font-medium tracking-[-0.04em] text-parchment">
                {site.shortName}
              </span>
            </Link>
            <nav
              className="hidden items-center gap-7 text-[0.78rem] text-parchment/65 lg:flex"
              aria-label="Preview B"
            >
              {nav.map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-parchment">
                    {item.label}
                  </Link>
                ))}
            </nav>
            <div className="flex items-center justify-end gap-4">
              <Link href="/contact" className="hidden text-[0.78rem] text-parchment/65 hover:text-parchment sm:inline">
                Contact
              </Link>
              <Link
                href="/start"
                className="rounded-full border border-parchment/35 px-4 py-2 text-[0.75rem] tracking-[0.04em] text-parchment hover:border-parchment hover:bg-parchment/5"
              >
                Start here
              </Link>
            </div>
          </div>
        </header>

        <div className="relative h-[40svh] min-h-[240px] lg:hidden">
          <FrameImage
            src="/images/spokane-river.jpg"
            alt="The Spokane River winding through ponderosa pines at Riverside State Park"
            className="h-full w-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/30 to-transparent" aria-hidden />
        </div>

        <div className="relative mx-auto max-w-[1240px] px-5 pb-24 pt-12 sm:px-8 sm:pt-16 lg:min-h-[78svh] lg:pb-32 lg:pt-28">
          <div className="max-w-xl">
            <p className="inline-flex rounded-full border border-parchment/20 px-3 py-1 text-[0.68rem] tracking-[0.16em] text-moss-soft uppercase">
              {site.tagline}
            </p>
            <h1 className="mt-7 font-serif text-[clamp(2.6rem,5.4vw,4.4rem)] leading-[1.06] tracking-[-0.035em] text-parchment">
              Psychiatric care
              <br />
              with time to see you.
            </h1>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-parchment/70">
              Sixty-minute sessions with {site.provider.name}, {site.provider.credentials}.
              Diagnosis, thoughtful prescribing, and a genomic draft — from home,
              across Washington.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/start"
                className="inline-flex items-center gap-2 rounded-full border border-parchment/45 px-5 py-2.5 text-[0.8rem] tracking-[0.04em] text-parchment hover:border-parchment hover:bg-parchment/5"
              >
                Start here
                <span aria-hidden>→</span>
              </Link>
              <Link href="/approach" className="text-[0.82rem] text-parchment/70 underline-offset-4 hover:text-parchment hover:underline">
                The approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-parchment/10 bg-pine-deep">
        <div className="mx-auto max-w-[1240px] px-5 py-8 sm:px-8">
          <p className="text-center text-[0.65rem] tracking-[0.22em] text-moss-soft uppercase">
            Self-pay first · insurance listed when contracted
          </p>
          <p className="mt-4 text-center text-[0.95rem] tracking-[0.08em] text-parchment/35">
            Sliding scale · Payment plans · {site.provider.credentials}
          </p>
        </div>
      </section>

      <section className="bg-pine">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:py-20">
          <p className="text-center text-[0.65rem] tracking-[0.22em] text-moss-soft uppercase">
            The work is the proof — not a rating
          </p>
          <div className="mt-12 grid gap-12 sm:grid-cols-3 sm:gap-8">
            {facts.map((fact) => (
              <div key={fact.label} className="text-center">
                <p className="font-serif text-[clamp(2.6rem,4vw,3.4rem)] leading-none tracking-[-0.04em] text-parchment-deep">
                  {fact.value}
                </p>
                <p className="mt-3 text-[0.82rem] font-medium text-parchment">{fact.label}</p>
                <p className="mx-auto mt-2 max-w-[22ch] text-[0.8rem] leading-relaxed text-parchment/60">
                  {fact.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pine-deep">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-24">
          <h2 className="text-center font-serif text-[clamp(2rem,3.6vw,3rem)] tracking-[-0.03em] text-parchment">
            Care with time, diagnosis, and a plan.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center leading-relaxed text-parchment/65">
            Not a long intake followed by thirty-minute checks. The same clinician,
            enough room to get the map right, and a plan you can return to.
          </p>
          <ul className="mt-14 grid gap-4 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <li
                key={pillar.title}
                className="border border-parchment/10 bg-pine px-7 py-8"
              >
                <PillarIcon name={pillar.icon} />
                <h3 className="mt-6 text-[1.05rem] font-medium text-parchment">{pillar.title}</h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-parchment/65">{pillar.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-16 text-center text-[0.8rem] text-parchment/50">
            Based in Spokane · telehealth in Washington and Idaho
          </p>
          <p className="mt-3 text-center">
            <Link href="/start" className="text-[0.82rem] text-parchment/80 underline-offset-4 hover:text-parchment hover:underline">
              Ready to become a patient?
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
