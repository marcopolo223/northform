"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useLocale } from "@/lib/i18n/locale-provider";
import { site } from "@/site.config";

const STORAGE_KEY = "nf-crisis-dismissed";
const EVENT = "nf-crisis-change";

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}

function readDismissed() {
  return sessionStorage.getItem(STORAGE_KEY) === "1";
}

export function CrisisBanner() {
  const { t } = useLocale();
  const dismissed = useSyncExternalStore(subscribe, readDismissed, () => false);
  const visible = !dismissed;

  useEffect(() => {
    document.documentElement.dataset.crisis = visible ? "on" : "off";
  }, [visible]);

  if (!visible) return null;

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    window.dispatchEvent(new Event(EVENT));
  };

  return (
    <div role="region" aria-label={t.banner.aria} className="on-dark border-b border-fg/10 bg-ground">
      <div className="relative mx-auto flex max-w-[1400px] items-center justify-center px-12 sm:px-14">
        <p className="min-w-0 py-1.5 text-center text-[0.8rem] leading-snug text-fg/85 sm:text-[0.84rem]">
          <span className="font-medium text-fg">{t.banner.emergency}: </span>
          <a className="link-u is-ruled -my-2 inline-block px-1.5 py-2 font-medium" href={`tel:${site.crisis.emergency}`}>
            {site.crisis.emergency}
          </a>
          <span className="mx-2 text-fg/40" aria-hidden>
            ·
          </span>
          {t.banner.crisisBefore}
          <a className="link-u is-ruled -my-2 inline-block px-1.5 py-2 font-medium" href={`tel:${site.crisis.line}`}>
            {site.crisis.line}
          </a>
          {t.banner.crisisAfter}
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="type-ui absolute right-2 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center text-fg/70 hover:text-fg sm:right-5"
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
