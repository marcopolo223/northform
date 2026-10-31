import type { Metadata } from "next";
import { HomeView } from "@/components/HomeView";
import { JsonLd } from "@/components/JsonLd";
import { webpageSchema } from "@/lib/schema";
import { seo } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  keywords: [...seo.keywords],
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webpageSchema({
          title: seo.title,
          description: seo.description,
          path: "/",
        })}
      />
      <HomeView />
    </>
  );
}
