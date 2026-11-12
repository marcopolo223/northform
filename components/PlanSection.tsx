"use client";

import { useId, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { RevealWords } from "@/components/RevealWords";
import { useLocale } from "@/lib/i18n/locale-provider";
import { cn } from "@/lib/cn";
import { fates, remainingByFate, type Fate } from "@/lib/pgx-model";

const noteLabel = { en: "A note on this sketch", es: "Una nota sobre este esquema", pt: "Uma nota sobre este esquema", fr: "Une note sur ce schéma" } as const;
const tabs = ["does", "uses", "stands"] as const;
type Tab = (typeof tabs)[number];

export function PlanSection() {
  const { t, locale } = useLocale();
  const copy = t.home.plan;
  const baseId = useId();
  const chartId = `${baseId}-chart`;
  const [tab, setTab] = useState<Tab>("does");
  const [fate, setFate] = useState<Fate>("typical");
  const tabRefs = useRef<Record<Tab, HTMLButtonElement | null>>({ does: null, uses: null, stands: null });
  const selected = copy.fates[fate];
  const uses = [...copy.usesItems, ...copy.planItems];
  const ledger = copy.commonItems.map((common, index) => ({ common, here: copy.hereItems[index] }));

  const labels: Record<Tab, string> = {
    does: copy.doesKicker,
    uses: copy.usesKicker,
    stands: copy.standsKicker,
  };

  const onKey = (event: React.KeyboardEvent, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = tabs[(index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
    setTab(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="plan" className="on-light bg-ground">
      <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 sm:py-16 lg:py-24">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <div className="hidden sm:block">
              <p className="type-kicker eyebrow text-accent">{copy.kicker}</p>
            </div>
            <h2 className="type-title mt-0 max-w-[14ch] sm:mt-5">
              <RevealWords text={copy.title} />
            </h2>
          </Reveal>
          <Reveal className="hidden sm:block lg:col-span-6 lg:col-start-7 lg:pt-8" delay={80}>
            <p className="type-voice text-fg/85">{copy.lede}</p>
          </Reveal>
        </div>

        <Reveal className="mt-4 sm:mt-10 lg:mt-14" delay={100}>
          <div role="tablist" aria-label={copy.title} className="grid grid-cols-3 border-b border-fg/20 sm:flex sm:gap-x-8">
            {tabs.map((key, index) => {
              const on = tab === key;
              return (
                <button
                  key={key}
                  ref={(node) => {
                    tabRefs.current[key] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${key}`}
                  aria-selected={on}
                  aria-controls={`${baseId}-panel-${key}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setTab(key)}
                  onKeyDown={(event) => onKey(event, index)}
                  className={cn(
                    "type-ui relative px-1 py-3 text-center text-[0.78rem] leading-tight transition-colors sm:shrink-0 sm:whitespace-nowrap sm:px-0 sm:py-4 sm:text-left sm:text-[0.95rem]",
                    on ? "text-fg" : "text-fg/55 hover:text-fg/85",
                  )}
                >
                  {labels[key]}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-x-0 -bottom-px h-[2px] origin-left bg-fg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0",
                      on ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </button>
              );
            })}
          </div>

          <div className="py-5 sm:min-h-[26rem] sm:py-10 lg:py-12">
            {tab === "does" ? (
              <div
                role="tabpanel"
                id={`${baseId}-panel-does`}
                aria-labelledby={`${baseId}-tab-does`}
                className="grid animate-[rise-in_0.6s_var(--ease-out)_both] gap-6 motion-reduce:animate-none sm:gap-10 lg:grid-cols-12 lg:gap-8"
              >
                <div className="lg:col-span-5">
                  <h3 className="type-title max-w-[18ch] text-[clamp(1.3rem,3vw,2.6rem)]">{copy.doesTitle}</h3>
                  <p className="mt-2 max-w-md text-[0.84rem] leading-snug text-fg/75 sm:mt-5 sm:text-base sm:leading-normal">{copy.doesBody}</p>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <p id={chartId} className="sr-only">
                    {copy.chartSr}
                  </p>
                  <div
                    className="grid grid-cols-3 border-y border-fg/15"
                    role="radiogroup"
                    aria-label={copy.doesTitle}
                    aria-describedby={chartId}
                  >
                    {fates.map((key, index) => {
                      const on = fate === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          role="radio"
                          aria-checked={on}
                          onClick={() => setFate(key)}
                          className={cn(
                            "group relative flex flex-col items-center px-2 pb-4 pt-4 text-center sm:pb-5 sm:pt-5 transition-colors duration-500 motion-reduce:duration-0",
                            index > 0 && "border-l border-fg/15",
                            on ? "text-fg" : "text-fg/55 hover:text-fg/85",
                          )}
                        >
                          <span className="type-kicker hidden text-[0.6rem] text-fg/55 sm:block">{copy.sameMilligrams}</span>
                          <span
                            className={cn(
                              "mt-3 flex h-16 w-6 flex-col justify-end border-x border-b transition-colors duration-500 sm:mt-4 sm:h-32 sm:w-9",
                              on ? "border-fg/70" : "border-fg/25 group-hover:border-fg/45",
                            )}
                            aria-hidden="true"
                          >
                            <span
                              className={cn(
                                "block w-full transition-[height,background-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0",
                                on ? "bg-fg" : "bg-fg/28",
                              )}
                              style={{ height: `${remainingByFate[key] * 100}%` }}
                            />
                          </span>
                          <span className="type-heading mt-3 block text-[1rem] sm:mt-4 sm:text-[1.1rem]">{copy.fates[key].label}</span>
                          <span
                            aria-hidden
                            className={cn(
                              "absolute inset-x-0 bottom-[-1px] h-[2px] origin-center bg-fg transition-transform duration-500 motion-reduce:duration-0",
                              on ? "scale-x-100" : "scale-x-0",
                            )}
                          />
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-7 sm:gap-6" aria-live="polite">
                    <div key={`gene-${fate}`} className="animate-[rise-in_0.5s_var(--ease-out)_both] motion-reduce:animate-none">
                      <p className="type-kicker text-[0.6rem] text-accent sm:text-[0.72rem]">{copy.geneKicker}</p>
                      <p className="mt-1 text-[0.78rem] leading-snug text-fg/85 sm:mt-2 sm:text-[0.98rem] sm:leading-normal">{selected.gene}</p>
                    </div>
                    <div
                      key={`chair-${fate}`}
                      className="animate-[rise-in_0.5s_var(--ease-out)_70ms_both] motion-reduce:animate-none"
                    >
                      <p className="type-kicker text-[0.6rem] text-accent sm:text-[0.72rem]">{copy.chairKicker}</p>
                      <p className="mt-1 text-[0.78rem] leading-snug text-fg/85 sm:mt-2 sm:text-[0.98rem] sm:leading-normal">{selected.chair}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {tab === "uses" ? (
              <div
                role="tabpanel"
                id={`${baseId}-panel-uses`}
                aria-labelledby={`${baseId}-tab-uses`}
                className="grid animate-[rise-in_0.6s_var(--ease-out)_both] gap-4 motion-reduce:animate-none sm:gap-10 lg:grid-cols-12 lg:gap-8"
              >
                <div className="lg:col-span-4">
                  <h3 className="type-title max-w-[18ch] text-[clamp(1.3rem,3vw,2.6rem)]">{copy.usesTitle}</h3>
                  <p className="mt-2 max-w-md text-[0.84rem] leading-snug text-fg/75 sm:mt-5 sm:text-base sm:leading-normal">{copy.usesBody}</p>
                </div>
                <div className="border-b border-fg/15 sm:hidden">
                  {uses.map((item) => (
                    <details key={item.title} className="group border-t border-fg/15">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 font-serif text-[1rem] leading-snug text-fg [&::-webkit-details-marker]:hidden">
                        {item.title}
                        <span aria-hidden className="shrink-0 font-sans text-lg font-light text-fg/60 transition-transform duration-300 group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="pb-3 text-[0.85rem] leading-snug text-fg/72">{item.body}</p>
                    </details>
                  ))}
                </div>
                <ul className="hidden list-none gap-x-10 sm:grid sm:grid-cols-2 lg:col-span-8">
                  {uses.map((item) => (
                    <li key={item.title} className="border-t border-fg/15 py-3 sm:py-5">
                      <p className="type-heading text-[1.02rem] sm:text-[1.15rem]">{item.title}</p>
                      <p className="mt-1 text-[0.86rem] leading-snug text-fg/72 sm:mt-2 sm:text-[0.95rem] sm:leading-normal">{item.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {tab === "stands" ? (
              <div
                role="tabpanel"
                id={`${baseId}-panel-stands`}
                aria-labelledby={`${baseId}-tab-stands`}
                className="animate-[rise-in_0.6s_var(--ease-out)_both] motion-reduce:animate-none"
              >
                <h3 className="type-title max-w-[22ch] text-[clamp(1.3rem,3vw,2.6rem)]">{copy.standsTitle}</h3>
                <div className="mt-5 sm:mt-8">
                  <div className="hidden grid-cols-12 gap-8 pb-3 sm:grid">
                    <p className="type-kicker col-span-5 text-fg/55">{copy.commonKicker}</p>
                    <p className="type-kicker col-span-7 text-fg">{copy.hereKicker}</p>
                  </div>
                  <ol className="list-none">
                    {ledger.map((row) => (
                      <li key={row.here} className="grid gap-2 border-t border-fg/15 py-3 sm:grid-cols-12 sm:py-4 sm:gap-8">
                        <p className="text-[0.85rem] text-fg/58 sm:col-span-5 sm:text-[0.95rem]">{row.common}</p>
                        <p className="font-serif text-[1.05rem] leading-snug tracking-[-0.015em] text-fg sm:col-span-7 sm:text-[1.15rem]">
                          {row.here}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ) : null}
          </div>

          <p className="type-meta hidden max-w-3xl border-t border-fg/15 pt-5 text-[0.78rem] text-fg/60 sm:block">
            {copy.clue} {copy.sketch}
          </p>
          <details className="group border-t border-fg/15 sm:hidden">
            <summary className="type-meta flex cursor-pointer list-none items-center justify-between py-3 text-[0.78rem] text-fg/70 [&::-webkit-details-marker]:hidden">
              {noteLabel[locale]}
              <span aria-hidden className="text-base font-light transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="type-meta pb-3 text-[0.74rem] leading-snug text-fg/65">
              {copy.clue} {copy.sketch}
            </p>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
