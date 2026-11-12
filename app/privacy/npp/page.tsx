import type { Metadata } from "next";
import { NppView } from "@/components/LegalViews";

export const metadata: Metadata = {
  title: "HIPAA Notice of Privacy Practices",
  description: "How Northform Psychiatry may use and share your health information under HIPAA, and your rights to access, correct, and limit it.",
};

export default function NppPage() {
  return <NppView />;
}
