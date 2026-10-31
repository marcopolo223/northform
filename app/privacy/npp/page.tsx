import type { Metadata } from "next";
import { NppView } from "@/components/LegalViews";

export const metadata: Metadata = {
  title: "HIPAA Notice of Privacy Practices",
  description: "Placeholder HIPAA Notice of Privacy Practices for Northform Psychiatry.",
};

export default function NppPage() {
  return <NppView />;
}
