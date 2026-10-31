"use client";

import Link from "next/link";
import { BecomePatientButton } from "@/components/BecomePatientButton";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import type { Article } from "@/content/articles";
import { useLocale } from "@/lib/i18n/locale-provider";

export function InsightArticleView({ article }: { article: Article }) {
  const { t } = useLocale();
  const copy = t.catalog.articles[article.slug];

  return (
    <article>
      <PageHeader
        eyebrow={t.insights.eyebrow}
        title={copy?.title ?? article.title}
        lede={copy?.dek ?? article.dek}
        image="/images/spokane-river.jpg"
        imageAlt="The Spokane River winding through ponderosa pines at Riverside State Park"
      />
      <Container className="max-w-3xl space-y-5 py-10 text-lg leading-relaxed text-parchment/80 sm:py-12">
        <p className="text-xs uppercase tracking-[0.2em] text-moss-soft">
          <Link href="/insights" className="hover:text-parchment">
            {t.article.allInsights}
          </Link>
        </p>
        {(copy?.body ?? article.body).map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
        <div className="pt-4">
          <BecomePatientButton />
        </div>
      </Container>
    </article>
  );
}
