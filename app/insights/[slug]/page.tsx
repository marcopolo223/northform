import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticleView } from "@/components/InsightArticleView";
import { articles, getArticle } from "@/content/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Insights" };
  return {
    title: article.title,
    description: article.dek,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return <InsightArticleView article={article} />;
}
