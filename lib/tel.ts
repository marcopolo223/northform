export function isPlaceholderPhone(phone: string) {
  return /000-000/.test(phone);
}

export function telHref(phone: string) {
  if (isPlaceholderPhone(phone)) return undefined;
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `tel:+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `tel:+${digits}`;
  return undefined;
}
