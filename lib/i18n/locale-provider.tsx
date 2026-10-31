"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { COOKIE_NAME, localeMeta, type Locale } from "./config";
import { dictionaries, type Dictionary } from "./dictionaries";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function persistLocale(next: Locale) {
  document.cookie = `${COOKIE_NAME}=${next}; path=/; max-age=31536000; SameSite=Lax`;
  document.documentElement.lang = localeMeta[next].html;
}

export function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    document.documentElement.lang = localeMeta[locale].html;
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale: (next) => {
        setLocaleState(next);
        persistLocale(next);
      },
      t: dictionaries[locale],
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
