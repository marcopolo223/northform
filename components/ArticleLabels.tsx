"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { useLocale } from "@/lib/i18n/locale-provider";

export function ArticleHowHeading() {
  const { t } = useLocale();
  return <h2 className="type-heading text-fg">{t.article.how}</h2>;
}

export function ArticleQuestionsHeading() {
  const { t } = useLocale();
  return <h2 className="type-kicker eyebrow text-accent">{t.article.questions}</h2>;
}

export function ArticleCta() {
  const { t } = useLocale();
  return <ButtonLink href="/start">{t.nav.become}</ButtonLink>;
}

export function InsightsCrisisHeading() {
  const { t } = useLocale();
  return <h2 className="type-heading text-fg">{t.insights.crisis}</h2>;
}
