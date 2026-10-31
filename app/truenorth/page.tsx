import type { Metadata } from "next";
import { TrueNorth } from "@/components/TrueNorth";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "True North",
  description: "You found north.",
  robots: { index: false, follow: false },
};

export default async function TrueNorthPage() {
  const target = `${site.url.replace(/\/$/, "")}/start`;
  return <TrueNorth qr={target} />;
}
