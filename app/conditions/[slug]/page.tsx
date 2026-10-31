import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClinicalArticle } from "@/components/ClinicalArticle";
import { conditions, getCondition } from "@/content/conditions";
import { locateDescription } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return conditions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getCondition(slug);
  if (!entry) return { title: "Conditions" };
  return { title: entry.title, description: locateDescription(entry.answer) };
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const entry = getCondition(slug);
  if (!entry) notFound();
  return <ClinicalArticle entry={entry} path={`/conditions/${entry.slug}`} kind="conditions" />;
}
