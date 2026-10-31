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
      <LocalizedHeader section="insights" image="/images/spokane-bridge.jpg" imageAlt="The swinging bridge over the Spokane River at Riverside State Park" />
      <Container className="py-10 sm:py-12">
        <section className="mb-12 border border-parchment/20 bg-pine px-6 py-8">
          <InsightsCrisisHeading />
          <CrisisNote className="mt-3 max-w-2xl" />
        </section>

        <div className="grid gap-x-12 sm:grid-cols-2">
          {t.insights.hubs.map((item, index) => (
            <Reveal key={hubHrefs[index]}>
              <article className="border-t border-parchment/15 py-7">
                <h2 className="font-serif text-2xl text-parchment">
                  <Link href={hubHrefs[index]} className="hover:text-moss-soft">
                    {item.title}
                  </Link>
                </h2>
                <p className="mt-2 text-parchment/70">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <h2 className="mt-12 font-serif text-2xl text-parchment">{t.insights.fmla}</h2>
        <ul>
          {articles.map((article, index) => {
            const copy = t.catalog.articles[article.slug];
            return (
              <Reveal key={article.slug} delay={index * 70}>
                <li className="border-t border-parchment/15 py-8">
                  <p className="text-xs tracking-wide text-moss-soft">
                    {new Date(`${article.date}T12:00:00`).toLocaleDateString(
                      locale === "en" ? "en-US" : locale,
                      { month: "long", day: "numeric", year: "numeric" },
                    )}
                  </p>
                  <h3 className="mt-3 font-serif text-[clamp(1.5rem,2.4vw,2rem)] leading-tight tracking-[-0.02em] text-parchment">
                    <Link href={`/insights/${article.slug}`} className="transition-colors hover:text-moss-soft">
                      {copy?.title ?? article.title}
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-parchment/70">{copy?.dek ?? article.dek}</p>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </>
  );
}
