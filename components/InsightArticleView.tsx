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
  const body = copy?.body ?? article.body;

  return (
    <article>
      <PageHeader eyebrow={t.insights.eyebrow} title={copy?.title ?? article.title} lede={copy?.dek ?? article.dek} />
      <Container className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <aside className="lg:col-span-3">
          <Link href="/insights" className="type-ui link-u is-ruled text-fg/75 hover:text-fg">
            {t.article.allInsights}
          </Link>
        </aside>
        <div className="space-y-6 text-[1.1rem] leading-[1.8] text-fg/80 lg:col-span-7 lg:col-start-5">
          {body.map((paragraph, index) => (
            <p key={paragraph.slice(0, 32)} className={index === 0 ? "type-statement text-fg" : undefined}>
              {paragraph}
            </p>
          ))}
          <div className="pt-6">
            <BecomePatientButton />
          </div>
        </div>
      </Container>
    </article>
  );
}
