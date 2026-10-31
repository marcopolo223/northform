import type { Locale } from "./config";
import { en, type Dictionary } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { pt } from "./pt";

export type { Dictionary };

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
  pt,
  fr,
};

export function interpolate(template: string, vars: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? "");
}

export const navKeyByHref: Record<string, keyof Dictionary["nav"]> = {
  "/about": "about",
  "/services": "care",
  "/billing": "billing",
  "/contact": "contact",
  "/start": "become",
  "/patients": "login",
  "/conditions": "conditions",
  "/approach": "approach",
  "/telehealth": "telehealth",
  "/insights": "resources",
  "/privacy": "privacy",
  "/privacy/npp": "npp",
  "/privacy/health-data": "healthData",
  "/terms": "terms",
  "/nondiscrimination": "nondiscrimination",
};
