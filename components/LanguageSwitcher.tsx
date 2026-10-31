"use client";

import { useEffect, useId, useRef, useState } from "react";
import { localeMeta, locales } from "@/lib/i18n/config";
import { useLocale } from "@/lib/i18n/locale-provider";
import { cn } from "@/lib/cn";

function GlobeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-[1.05rem] w-[1.05rem]", className)} fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M12 3c2.6 2.4 4 5.5 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.5-4-9s1.4-6.6 4-9Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function LanguageSwitcher({
  variant = "menu",
  className,
}: {
  variant?: "menu" | "footer";
  className?: string;
}) {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = localeMeta[locale];

  useEffect(() => {
    if (!open) return;

    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "footer") {
    return (
      <div className={cn("flex flex-col gap-3", className)}>
        <p className="type-kicker text-parchment/65">{t.language}</p>
        <ul className="grid gap-1">
          {locales.map((code) => {
            const active = locale === code;
            const meta = localeMeta[code];
            return (
              <li key={code}>
                <button
                  type="button"
                  lang={meta.html}
                  aria-current={active ? "true" : undefined}
                  onClick={() => setLocale(code)}
                  className={cn(
                    "type-ui text-left transition-colors",
                    active ? "text-parchment" : "text-parchment/55 hover:text-parchment",
                  )}
                >
                  {meta.native}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        className="type-ui inline-flex h-9 min-w-9 items-center justify-center gap-1.5 px-1.5 text-parchment/70 transition-colors hover:text-parchment"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        aria-label={`${t.language}: ${current.native}`}
        onClick={() => setOpen((value) => !value)}
      >
        <GlobeMark />
        <span className="sr-only">{current.native}</span>
        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-parchment/50" fill="none" aria-hidden>
          <path
            d={open ? "M2 8l4-4 4 4" : "M2 4l4 4 4-4"}
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="square"
          />
        </svg>
      </button>
      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label={t.language}
          className="absolute right-0 top-[calc(100%+0.4rem)] z-50 min-w-[11.5rem] border border-parchment/15 bg-pine-deep py-1.5 shadow-[0_16px_40px_rgb(0_0_0/0.28)]"
        >
          {locales.map((code) => {
            const active = locale === code;
            const meta = localeMeta[code];
            return (
              <li key={code} role="none">
                <button
                  type="button"
                  role="option"
                  lang={meta.html}
                  aria-selected={active}
                  onClick={() => {
                    setLocale(code);
                    setOpen(false);
                  }}
                  className={cn(
                    "type-ui flex w-full items-center justify-between px-3.5 py-2.5 text-left transition-colors",
                    active ? "text-parchment" : "text-parchment/65 hover:bg-parchment/5 hover:text-parchment",
                  )}
                >
                  <span>{meta.native}</span>
                  {active ? <span aria-hidden className="text-parchment/55">✓</span> : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
