import { cookies } from "next/headers";
import { COOKIE_NAME, defaultLocale, isLocale, type Locale } from "./config";

export async function getRequestLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(COOKIE_NAME)?.value;
  return isLocale(value) ? value : defaultLocale;
}
