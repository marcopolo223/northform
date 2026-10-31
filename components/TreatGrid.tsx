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
    <ul className={cn("treat-grid grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3", open && "is-open")}>
      {treatCells.map((cell) => {
        const expanded = open === cell.slug;
        const copy = t.treat.cells[cell.slug as keyof typeof t.treat.cells];
        return (
          <li key={cell.slug} className="min-w-0">
            <div
              className={cn(
                "treat-cell relative flex h-full flex-col overflow-hidden border border-parchment/20 bg-pine p-5",
                expanded && "is-expanded border-parchment/45",
              )}
            >
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 text-left"
                aria-expanded={expanded}
                aria-controls={`treat-${cell.slug}`}
                onClick={() => setOpen(expanded ? null : cell.slug)}
              >
                <span>
                  <span className="type-heading block min-h-[2.5em] text-balance text-parchment">
                    {copy.title}
                  </span>
                  <span className="type-kicker mt-2 block text-moss-soft">{copy.kicker}</span>
                </span>
                <span className="treat-plus type-ui mt-1 shrink-0 text-parchment/55" aria-hidden>
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
                  <div className="treat-reveal mt-4 border-t border-parchment/12 pt-4">
                    <p className="type-meta text-moss-soft">{t.treat.what}</p>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-parchment/75">{copy.what}</p>
                    <p className="type-meta mt-4 text-moss-soft">{t.treat.how}</p>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-parchment/75">{copy.how}</p>
                    <Link
                      href={cell.href}
                      className="type-ui mt-4 inline-flex text-moss-soft underline-offset-4 transition-colors hover:text-parchment hover:underline"
                    >
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
