"use client";

import Link from "next/link";
import { ConditionMark } from "@/components/ConditionMark";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";
import type { ConditionEntry } from "@/content/conditions";
import { useLocale } from "@/lib/i18n/locale-provider";

export function ConditionCards({
  items,
  tone = "pine",
}: {
  items: ConditionEntry[];
  tone?: "paper" | "pine";
}) {
  const pine = tone === "pine";
  const { t } = useLocale();

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        const copy = t.catalog.conditions[item.slug];
        return (
          <li key={item.slug}>
            <Reveal delay={index * 70} className="h-full">
              <Link
                href={`/conditions/${item.slug}`}
                className={cn(
                  "group flex h-full flex-col border p-6 transition-[border-color,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  pine
                    ? "border-parchment/20 bg-pine hover:border-parchment/55 hover:bg-pine-deep"
                    : "border-stone bg-paper hover:border-pine hover:bg-parchment",
                )}
              >
                <ConditionMark
                  symbol={item.symbol}
                  className={pine ? "text-moss-soft" : "text-moss"}
                />
                <h3 className={cn("type-heading mt-5", pine ? "text-parchment" : "text-ink")}>
                  {copy?.title ?? item.title}
                </h3>
                <p
                  className={cn(
                    "mt-3 text-[0.92rem] leading-relaxed",
                    pine ? "text-parchment/85" : "text-muted",
                  )}
                >
                  {copy?.what ?? item.what}
                </p>
                <p
                  className={cn(
                    "mt-2 max-h-24 text-[0.88rem] leading-relaxed opacity-100 transition-[max-height,opacity] duration-300 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:max-h-24 md:group-hover:opacity-100 md:group-focus-visible:max-h-24 md:group-focus-visible:opacity-100",
                    pine ? "text-parchment/80" : "text-charcoal",
                  )}
                >
                  {copy?.how ?? item.how}
                </p>
                <span
                  className={cn(
                    "type-ui mt-auto pt-6",
                    pine ? "text-moss-soft group-hover:text-parchment" : "text-moss group-hover:text-ink",
                  )}
                >
                  {t.article.howThis}
                </span>
              </Link>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
