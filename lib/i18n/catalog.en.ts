import { articles } from "@/content/articles";
import { conditions } from "@/content/conditions";
import { estimateFirst, estimateFollow, feeRows } from "@/content/fees";
import { offerings } from "@/content/services";

function bySlug<T extends { slug: string }>(items: T[]) {
  return Object.fromEntries(items.map((item) => [item.slug, item])) as Record<string, T>;
}

export const catalogEn = {
  conditions: bySlug(
    conditions.map((item) => ({
      slug: item.slug,
      title: item.title,
      what: item.what,
      how: item.how,
      answer: item.answer,
      lede: item.lede,
      treatment: item.treatment,
      body: item.body,
      faq: item.faq,
    })),
  ),
  offerings: bySlug(
    offerings.map((item) => ({
      slug: item.slug,
      title: item.title,
      answer: item.answer,
      lede: item.lede,
      body: item.body,
      faq: item.faq,
    })),
  ),
  articles: bySlug(
    articles.map((item) => ({
      slug: item.slug,
      title: item.title,
      dek: item.dek,
      body: item.body,
    })),
  ),
  fees: {
    rows: feeRows.map((row) => ({
      service: row.service,
      duration: row.duration ?? "",
      includes: row.includes,
    })),
    first: Object.fromEntries(estimateFirst.map((item) => [item.id, item.label])),
    follow: Object.fromEntries(estimateFollow.map((item) => [item.id, item.label])),
  },
};
