import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClinicalArticle } from "@/components/ClinicalArticle";
import { getOffering, offerings } from "@/content/services";
import { locateDescription } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return offerings.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getOffering(slug);
  if (!entry) return { title: "Services" };
  return { title: entry.title, description: locateDescription(entry.answer) };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const entry = getOffering(slug);
  if (!entry) notFound();
  return <ClinicalArticle entry={entry} path={`/services/${entry.slug}`} kind="care" />;
}
