export const locales = ["en", "es", "pt", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeMeta: Record<
  Locale,
  { short: string; native: string; html: string }
> = {
  en: { short: "EN", native: "English", html: "en" },
  es: { short: "ES", native: "Español", html: "es" },
  pt: { short: "PT", native: "Português", html: "pt" },
  fr: { short: "FR", native: "Français", html: "fr" },
};

export const COOKIE_NAME = "nf-lang";

export function isLocale(value: string | undefined | null): value is Locale {
  return locales.includes(value as Locale);
}
