import type { Metadata } from "next";
import { EducationView } from "@/components/InsightsHubs";

export const metadata: Metadata = {
  title: "Patient education",
  description: "Educational resources from Northform Psychiatry. Not medical advice.",
};

export default function EducationPage() {
  return <EducationView />;
}
