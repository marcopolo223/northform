import type { Metadata } from "next";
import { TermsView } from "@/components/LegalViews";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms of use for the Northform Psychiatry website.",
};

export default function TermsPage() {
  return <TermsView />;
}
