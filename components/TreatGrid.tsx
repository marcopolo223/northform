"use client";

import Link from "next/link";
import { useState } from "react";
import { treatCells } from "@/content/treat";
import { useLocale } from "@/lib/i18n/locale-provider";
import { cn } from "@/lib/cn";

export function TreatGrid() {
  const [open, setOpen] = useState<string | null>(null);
  const { t } = useLocale();

  return (
    <ul className="list-none border-t border-fg/20">
      {treatCells.map((cell) => {
        const expanded = open === cell.slug;
        const copy = t.treat.cells[cell.slug as keyof typeof t.treat.cells];
        return (
          <li
            key={cell.slug}
            className={cn("treat-row border-b border-fg/20", expanded && "is-expanded")}
          >
            <button
              type="button"
              className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-1 py-6 text-left sm:grid-cols-[minmax(0,1fr)_17rem_auto] sm:py-7"
              aria-expanded={expanded}
              aria-controls={`treat-${cell.slug}`}
              onClick={() => setOpen(expanded ? null : cell.slug)}
            >
              <span className="treat-title font-serif text-[clamp(1.45rem,2.6vw,2.25rem)] leading-[1.1] tracking-[-0.025em] text-fg">
                {copy.title}
              </span>
              <span className="type-kicker order-last col-span-1 text-fg/55 sm:order-none">{copy.kicker}</span>
              <span
                className="treat-plus row-span-2 self-center font-serif text-[1.6rem] font-light leading-none text-fg/70 sm:row-span-1"
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              id={`treat-${cell.slug}`}
              aria-hidden={!expanded}
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0",
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden" {...(!expanded ? { inert: true } : {})}>
                <div className="treat-reveal grid gap-6 pb-9 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_17rem] sm:gap-10">
                  <div>
                    <p className="type-kicker text-accent">{t.treat.what}</p>
                    <p className="mt-2 max-w-md text-fg/80">{copy.what}</p>
                  </div>
                  <div>
                    <p className="type-kicker text-accent">{t.treat.how}</p>
                    <p className="mt-2 max-w-md text-fg/80">{copy.how}</p>
                  </div>
                  <div className="sm:self-end">
                    <Link href={cell.href} className="type-ui link-u is-ruled text-fg">
                      {copy.link} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
