import type { Metadata } from "next";
import { VideosView } from "@/components/InsightsHubs";

export const metadata: Metadata = {
  title: "Videos",
  description: "Video resources from Northform. Embeds forthcoming.",
  robots: { index: false, follow: false },
};

export default function VideosPage() {
  return <VideosView />;
}
