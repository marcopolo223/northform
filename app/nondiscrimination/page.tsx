import type { Metadata } from "next";
import { NondiscriminationView } from "@/components/LegalViews";

export const metadata: Metadata = {
  title: "Nondiscrimination",
  description:
    "Section 1557 nondiscrimination statement and language-access notice for Northform Psychiatry. English, Spanish, Portuguese, and French.",
};

export default function NondiscriminationPage() {
  return <NondiscriminationView />;
}
