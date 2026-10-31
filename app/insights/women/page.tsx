import type { Metadata } from "next";
import { WomenView } from "@/components/InsightsHubs";

export const metadata: Metadata = {
  title: "Resources for women",
  description: "Perimenopause, mood, and perinatal doors at Northform — plus a few outside links.",
};

export default function WomenPage() {
  return <WomenView />;
}
