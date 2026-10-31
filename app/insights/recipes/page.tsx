import type { Metadata } from "next";
import { RecipesView } from "@/components/InsightsHubs";

export const metadata: Metadata = {
  title: "Meal prep",
  description: "Simple meal-prep notes from Northform — steady food, not a diet cult.",
};

export default function RecipesPage() {
  return <RecipesView />;
}
