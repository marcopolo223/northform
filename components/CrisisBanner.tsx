"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/locale-provider";
import { site } from "@/site.config";

const STORAGE_KEY = "nf-crisis-dismissed";

export function CrisisBanner() {
  const { t } = useLocale();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "1") setVisible(false);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.crisis = visible ? "on" : "off";
  }, [visible]);

  if (!visible) return null;

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label={t.banner.aria}
      className="border-b border-parchment/20 bg-pine text-parchment"
    >
      <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-5 py-2 sm:px-8">
        <p className="min-w-0 flex-1 text-[0.82rem] leading-snug text-parchment/90 sm:text-[0.88rem]">
          <span className="font-medium text-parchment">{t.banner.emergency}: </span>
          <a className="underline-offset-2 hover:underline" href={`tel:${site.crisis.emergency}`}>
            {site.crisis.emergency}
          </a>
          <span className="mx-2 text-parchment/40" aria-hidden>
            ·
          </span>
          {t.banner.crisisBefore}
          <a className="underline-offset-2 hover:underline" href={`tel:${site.crisis.line}`}>
            {site.crisis.line}
          </a>
          {t.banner.crisisAfter}
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="type-ui flex min-h-11 min-w-11 shrink-0 items-center justify-center text-parchment/70 hover:text-parchment"
          aria-label={t.banner.dismiss}
        >
          <span aria-hidden className="text-lg leading-none">
            ×
          </span>
        </button>
      </div>
    </div>
  );
}
