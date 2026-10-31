"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/locale-provider";
import { cn } from "@/lib/cn";
import { fates, remainingByFate, type Fate } from "@/lib/pgx-model";

export function PlanSection() {
  const { t } = useLocale();
  const copy = t.home.plan;
  const chartId = useId();
  const [fate, setFate] = useState<Fate>("typical");
  const selected = copy.fates[fate];

  return (
    <section id="plan" className="border-b border-parchment/10 bg-pine-deep text-parchment">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <p className="type-kicker text-parchment/70">{copy.kicker}</p>
          <h2 className="type-title mt-4 max-w-2xl">{copy.title}</h2>
          <p className="type-lede mt-5 max-w-2xl text-parchment/85">{copy.lede}</p>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-parchment/80">{copy.intro}</p>
        </Reveal>

        <Reveal className="mt-12 lg:mt-16" delay={60}>
          <div className="border border-parchment/15 bg-pine">
            <div className="px-5 py-8 sm:px-8 lg:py-10">
              <p className="type-kicker text-moss-soft">{copy.doesKicker}</p>
              <h3 className="type-heading mt-3">{copy.doesTitle}</h3>
              <p className="mt-4 max-w-3xl text-[1.05rem] leading-relaxed text-parchment/80">{copy.doesBody}</p>

              <p id={chartId} className="sr-only">
                {copy.chartSr}
              </p>
              <div
                className="mt-8 grid gap-2 sm:grid-cols-3"
                role="radiogroup"
                aria-label={copy.doesTitle}
                aria-describedby={chartId}
              >
                {fates.map((key) => {
                  const on = fate === key;
                  const remaining = remainingByFate[key];
                  return (
                    <button
                      key={key}
                      type="button"
                      role="radio"
                      aria-checked={on}
                      onClick={() => setFate(key)}
                      className={cn(
                        "flex flex-col items-center border px-4 py-6 text-center transition-colors duration-300 motion-reduce:duration-0",
                        on
                          ? "border-parchment/55 bg-pine-deep text-parchment"
                          : "border-parchment/15 text-parchment/70 hover:border-parchment/35 hover:text-parchment",
                      )}
                    >
                      <span className="type-kicker text-moss-soft">{copy.sameMilligrams}</span>
                      <span
                        className="mt-5 flex h-28 w-9 flex-col justify-end border border-parchment/25"
                        aria-hidden="true"
                      >
                        <span
                          className="w-full bg-parchment/45 transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0"
                          style={{ height: `${remaining * 100}%` }}
                        />
                      </span>
                      <span className="type-heading mt-5 block">{copy.fates[key].label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-2" aria-live="polite">
                <div>
                  <p className="type-kicker text-moss-soft">{copy.geneKicker}</p>
                  <p className="mt-3 text-[1.05rem] leading-relaxed text-parchment/85">{selected.gene}</p>
                </div>
                <div>
                  <p className="type-kicker text-moss-soft">{copy.chairKicker}</p>
                  <p className="mt-3 text-[1.05rem] leading-relaxed text-parchment/85">{selected.chair}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-parchment/12 px-5 py-8 sm:px-8 lg:py-10">
              <p className="type-kicker text-moss-soft">{copy.usesKicker}</p>
              <h3 className="type-heading mt-3">{copy.usesTitle}</h3>
              <p className="mt-4 max-w-3xl text-[1.05rem] leading-relaxed text-parchment/80">{copy.usesBody}</p>
              <ul className="mt-8 grid list-none gap-6 sm:grid-cols-3">
                {copy.usesItems.map((item) => (
                  <li key={item.title}>
                    <p className="type-heading">{item.title}</p>
                    <p className="mt-2 text-[0.98rem] leading-relaxed text-parchment/75">{item.body}</p>
                  </li>
                ))}
              </ul>
              <ul className="mt-10 grid list-none gap-6 border-t border-parchment/12 pt-8 lg:grid-cols-3">
                {copy.planItems.map((item) => (
                  <li key={item.title}>
                    <p className="type-heading">{item.title}</p>
                    <p className="mt-2 text-[1.02rem] leading-relaxed text-parchment/80">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-parchment/12 px-5 py-8 sm:px-8 lg:py-10">
              <p className="type-kicker text-moss-soft">{copy.standsKicker}</p>
              <h3 className="type-heading mt-3">{copy.standsTitle}</h3>
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="type-kicker text-moss-soft">{copy.commonKicker}</p>
                  <ul className="mt-4 grid list-none gap-3">
                    {copy.commonItems.map((item) => (
                      <li key={item} className="text-[1.02rem] leading-relaxed text-parchment/75">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="type-kicker text-moss-soft">{copy.hereKicker}</p>
                  <ul className="mt-4 grid list-none gap-3">
                    {copy.hereItems.map((item) => (
                      <li key={item} className="text-[1.02rem] leading-relaxed text-parchment/85">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-parchment/12 px-5 py-8 sm:px-8">
              <p className="max-w-2xl text-[1.02rem] leading-relaxed text-parchment/80">{copy.clue}</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-parchment/60">{copy.sketch}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
