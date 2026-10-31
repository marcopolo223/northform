"use client";

import { ArticleCta, ArticleHowHeading, ArticleQuestionsHeading } from "@/components/ArticleLabels";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { ReviewedBy } from "@/components/ReviewedBy";
import type { ClinicalEntry, ConditionEntry } from "@/content/conditions";
import { useLocale } from "@/lib/i18n/locale-provider";
import { faqSchema, webpageSchema } from "@/lib/schema";

export function ClinicalArticle({
  entry,
  path,
  kind,
}: {
  entry: ClinicalEntry | ConditionEntry;
  path: string;
  kind: "conditions" | "care";
}) {
  const { t } = useLocale();
  const conditionCopy = kind === "conditions" ? t.catalog.conditions[entry.slug] : undefined;
  const offeringCopy = kind === "care" ? t.catalog.offerings[entry.slug] : undefined;
  const catalog = conditionCopy ?? offeringCopy;
  const title = catalog?.title ?? entry.title;
  const answer = catalog?.answer ?? entry.answer;
  const lede = catalog?.lede ?? entry.lede;
  const body = catalog?.body ?? entry.body;
  const faq = catalog?.faq ?? entry.faq;
  const treatment: string | undefined =
    conditionCopy?.treatment ?? ("treatment" in entry ? entry.treatment : undefined);
  const eyebrow = kind === "conditions" ? t.nav.conditions : t.nav.care;

  return (
    <>
      <JsonLd data={webpageSchema({ title, description: answer, path })} />
      <JsonLd data={faqSchema(faq)} />
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        lede={answer}
        image={entry.image}
        imageAlt={entry.imageAlt}
      />
      <Container className="max-w-3xl space-y-6 py-10 text-[1.05rem] leading-relaxed text-parchment/80 lg:py-14">
        <ReviewedBy date={entry.updated} />
        <p className="type-lede text-parchment">{lede}</p>
        {treatment ? (
          <div>
            <ArticleHowHeading />
            <p className="mt-3">{treatment}</p>
          </div>
        ) : null}
        {body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <div>
          <ArticleQuestionsHeading />
          <dl className="mt-4 divide-y divide-parchment/15 border-y border-parchment/15">
            {faq.map((item) => (
              <div key={item.q} className="py-5">
                <dt className="font-medium text-parchment">{item.q}</dt>
                <dd className="mt-2 text-parchment/80">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ul className="text-sm text-parchment/80">
          {entry.citations.map((item) => (
            <li key={item.href}>
              <a className="underline-offset-4 hover:underline" href={item.href} rel="noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ArticleCta />
      </Container>
    </>
  );
}
