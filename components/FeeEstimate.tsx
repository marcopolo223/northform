"use client";

import { useMemo, useState } from "react";
import { estimateFirst, estimateFollow } from "@/content/fees";
import { useLocale } from "@/lib/i18n/locale-provider";

const defaultFollowCount = 3;

export function FeeEstimate() {
  const { t, locale } = useLocale();
  const [firstId, setFirstId] = useState(estimateFirst[0].id);
  const [followId, setFollowId] = useState(estimateFollow[0].id);
  const [count, setCount] = useState(defaultFollowCount);

  const first = estimateFirst.find((item) => item.id === firstId) ?? estimateFirst[0];
  const follow = estimateFollow.find((item) => item.id === followId) ?? estimateFollow[0];
  const total = first.amount + follow.amount * count;
  const firstLabel = t.catalog.fees.first[first.id] ?? first.label;
  const followLabel = t.catalog.fees.follow[follow.id] ?? follow.label;

  const summary = useMemo(
    () =>
      `${firstLabel.split(" · ")[0]} $${first.amount} + ${count} × ${followLabel.split(" · ")[0]} $${follow.amount}`,
    [count, first, firstLabel, follow, followLabel],
  );

  return (
    <div className="grid overflow-hidden lg:grid-cols-2">
      <div className="bg-panel px-6 py-10 sm:px-10">
        <p className="type-kicker text-fg/70">{t.billing.estimateHeading}</p>
        <label className="mt-6 block">
          <span className="type-meta text-fg/80">{t.billing.estimateFirst}</span>
          <select
            value={firstId}
            onChange={(event) => setFirstId(event.target.value)}
            className="mt-2 w-full border border-fg/20 bg-ground px-3 py-3 text-[0.95rem] text-fg outline-none focus-visible:border-fg/50"
          >
            {estimateFirst.map((item) => (
              <option key={item.id} value={item.id}>
                {t.catalog.fees.first[item.id] ?? item.label}
              </option>
            ))}
          </select>
        </label>
        <label className="mt-5 block">
          <span className="type-meta text-fg/80">{t.billing.estimateFollow}</span>
          <select
            value={followId}
            onChange={(event) => setFollowId(event.target.value)}
            className="mt-2 w-full border border-fg/20 bg-ground px-3 py-3 text-[0.95rem] text-fg outline-none focus-visible:border-fg/50"
          >
            {estimateFollow.map((item) => (
              <option key={item.id} value={item.id}>
                {t.catalog.fees.follow[item.id] ?? item.label}
              </option>
            ))}
          </select>
        </label>
        <label className="mt-5 block">
          <span className="type-meta flex justify-between text-fg/80">
            {t.billing.estimateCount}
            <span className="text-fg">{count}</span>
          </span>
          <input
            type="range"
            min={0}
            max={8}
            value={count}
            onChange={(event) => setCount(Number(event.target.value))}
            className="mt-3 w-full accent-fg"
          />
        </label>
      </div>
      <div className="on-dark flex flex-col justify-between bg-ground px-6 py-10 sm:px-10">
        <div>
          <p className="type-kicker text-fg/70">{t.billing.estimateTotal}</p>
          <p className="type-stat mt-4 text-fg">${total.toLocaleString(locale === "en" ? "en-US" : locale)}</p>
          <p className="mt-4 max-w-sm text-[0.92rem] leading-relaxed text-fg/85">{summary}</p>
        </div>
        <p className="type-meta mt-8 text-fg/80">{t.billing.estimateNote}</p>
      </div>
    </div>
  );
}
