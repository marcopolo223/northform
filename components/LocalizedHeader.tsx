"use client";

import { PageHeader } from "@/components/PageHeader";
import { interpolate } from "@/lib/i18n/dictionaries";
import { useLocale } from "@/lib/i18n/locale-provider";
import { site } from "@/site.config";

type HeaderSection =
  | "about"
  | "start"
  | "contact"
  | "billing"
  | "care"
  | "conditions"
  | "approach"
  | "telehealth"
  | "insights"
  | "patients";

export function LocalizedHeader({
  section,
  image,
  imageAlt,
  children,
}: {
  section: HeaderSection;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}) {
  const { t } = useLocale();
  const copy = t[section];

  return (
    <PageHeader
      eyebrow={copy.eyebrow}
      title={copy.title}
      lede={interpolate(copy.lede, { name: site.provider.full })}
      image={image}
      imageAlt={imageAlt}
    >
      {children}
    </PageHeader>
  );
}
