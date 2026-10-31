import type { Metadata } from "next";
import { PrivacyView } from "@/components/LegalViews";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "General privacy notice for the Northform Psychiatry website. HIPAA NPP and Washington health-data policy are separate.",
};

export default function PrivacyPage() {
  return <PrivacyView />;
}
