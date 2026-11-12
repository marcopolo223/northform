"use client";

import Link from "next/link";
import { InsightsCrisisHeading } from "@/components/ArticleLabels";
import { Container } from "@/components/Container";
import { CrisisNote } from "@/components/CrisisNote";
import { LocalizedHeader } from "@/components/LocalizedHeader";
import { Reveal } from "@/components/Reveal";
import { articles } from "@/content/articles";
import { useLocale } from "@/lib/i18n/locale-provider";

const hubHrefs = ["/insights/education", "/insights/recipes", "/insights/women"] as const;

export function InsightsView() {
  const { t, locale } = useLocale();

  return (
    <>
      <LocalizedHeader
        section="insights"
        image="/images/spokane-bridge.jpg"
        imageAlt="The swinging bridge over the Spokane River at Riverside State Park"
      />
      <Container className="py-16 lg:py-24">
        <div className="grid gap-x-10 md:grid-cols-3">
          {t.insights.hubs.map((item, index) => (
            <Reveal key={hubHrefs[index]} variant="rule" delay={index * 80}>
              <Link href={hubHrefs[index]} className="group block pb-10 pt-8">
                <h2 className="type-heading text-[clamp(1.5rem,2.2vw,1.95rem)]">
                  <span className="link-u">{item.title}</span>
                </h2>
                <p className="mt-3 text-fg/72">{item.body}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <section className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-12">
          <h2 className="type-kicker eyebrow text-accent lg:col-span-4">{t.insights.fmla}</h2>
          <ul className="list-none border-t border-fg/20 lg:col-span-8">
            {articles.map((article) => {
              const copy = t.catalog.articles[article.slug];
              return (
                <li key={article.slug} className="treat-row border-b border-fg/20">
                  <Link href={`/insights/${article.slug}`} className="group block py-9">
                    <p className="type-meta text-fg/60">
                      {new Date(`${article.date}T12:00:00`).toLocaleDateString(locale === "en" ? "en-US" : locale, {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <h3 className="treat-title mt-3 font-serif text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.1] tracking-[-0.025em]">
                      {copy?.title ?? article.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-fg/72">{copy?.dek ?? article.dek}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mt-16 border-t border-fg/15 pt-10 lg:mt-24">
          <InsightsCrisisHeading />
          <CrisisNote className="mt-3 max-w-2xl" />
        </section>
      </Container>
    </>
  );
}
