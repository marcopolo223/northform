"use client";

import Link from "next/link";
import { ConditionMark } from "@/components/ConditionMark";
import { Reveal } from "@/components/Reveal";
import type { ConditionEntry } from "@/content/conditions";
import { useLocale } from "@/lib/i18n/locale-provider";
import { stripArrow } from "@/lib/text";

export function ConditionCards({
  items,
}: {
  items: ConditionEntry[];
  tone?: "paper" | "pine";
}) {
  const { t } = useLocale();

  return (
    <ul className="grid list-none gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        const copy = t.catalog.conditions[item.slug];
        return (
          <Reveal as="li" key={item.slug} variant="rule" delay={(index % 3) * 80}>
            <Link href={`/conditions/${item.slug}`} className="group flex h-full flex-col pb-12 pt-8">
              <ConditionMark
                symbol={item.symbol}
                className="text-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:rotate-[8deg]"
              />
              <h3 className="type-heading mt-6 text-[clamp(1.5rem,2.2vw,1.95rem)] leading-[1.1]">
                <span className="link-u">{copy?.title ?? item.title}</span>
              </h3>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-fg/78">{copy?.what ?? item.what}</p>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-fg/62">{copy?.how ?? item.how}</p>
              <span className="type-ui mt-auto inline-flex items-center gap-2 pt-7 text-fg/80 group-hover:text-fg">
                {stripArrow(t.article.howThis)}
                <span aria-hidden className="btn-arrow">
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        );
      })}
    </ul>
  );
}
