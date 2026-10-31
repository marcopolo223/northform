import type { Metadata } from "next";
import { TrueNorth } from "@/components/TrueNorth";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "Garden",
  description: "A plant that thrives under stress.",
  robots: { index: false, follow: false },
};

export default async function GardenPage() {
  const target = `${site.url.replace(/\/$/, "")}/start`;
  return <TrueNorth qr={target} />;
}
