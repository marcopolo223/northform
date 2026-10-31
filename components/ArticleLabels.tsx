"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { useLocale } from "@/lib/i18n/locale-provider";

export function ArticleHowHeading() {
  const { t } = useLocale();
  return <h2 className="font-serif text-2xl text-parchment">{t.article.how}</h2>;
}

export function ArticleQuestionsHeading() {
  const { t } = useLocale();
  return <h2 className="font-serif text-2xl text-parchment">{t.article.questions}</h2>;
}

export function ArticleCta() {
  const { t } = useLocale();
  return (
    <ButtonLink href="/start" variant="light">
      {t.nav.become}
    </ButtonLink>
  );
}

export function InsightsCrisisHeading() {
  const { t } = useLocale();
  return <h2 className="font-serif text-2xl text-parchment">{t.insights.crisis}</h2>;
}
