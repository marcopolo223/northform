import type { Metadata } from "next";
import { InsightsView } from "@/components/InsightsView";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "FMLA writing, patient education, meal-prep, resources for women, and crisis information from Northform.",
};

export default function InsightsPage() {
  return <InsightsView />;
}
