"use client";

import { ArticleCta, ArticleHowHeading, ArticleQuestionsHeading } from "@/components/ArticleLabels";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { OpensTag } from "@/components/OpensTag";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
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
      <PageHeader eyebrow={eyebrow} title={title} lede={answer} image={entry.image} imageAlt={entry.imageAlt} />
      <Container className="grid gap-12 py-14 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-[calc(var(--chrome-h)+2rem)]">
            <ReviewedBy date={entry.updated} />
          </div>
        </aside>
        <div className="space-y-7 text-[1.08rem] leading-[1.75] text-fg/80 lg:col-span-7 lg:col-start-5">
          <Reveal>
            <OpensTag slug={entry.slug} className="mb-5 text-fg/65" />
            <p className="type-statement text-fg">{lede}</p>
          </Reveal>
          {treatment ? (
            <Reveal className="border-l border-fg/25 pl-6">
              <ArticleHowHeading />
              <p className="mt-3">{treatment}</p>
            </Reveal>
          ) : null}
          {body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <div className="pt-8">
            <ArticleQuestionsHeading />
            <div className="mt-5 border-t border-fg/15">
              {faq.map((item) => (
                <details key={item.q} className="group border-b border-fg/15">
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-5 font-serif text-[1.2rem] leading-snug text-fg [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      aria-hidden
                      className="shrink-0 font-sans text-lg font-light text-fg/60 transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-6 text-fg/75">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
          <ul className="space-y-1.5 pt-4 text-sm text-fg/65">
            {entry.citations.map((item) => (
              <li key={item.href}>
                <a className="link-u hover:text-fg" href={item.href} rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-6">
            <ArticleCta />
          </div>
        </div>
      </Container>
    </>
  );
}
