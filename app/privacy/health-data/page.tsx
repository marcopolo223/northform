import type { Metadata } from "next";
import { HealthDataView } from "@/components/LegalViews";

export const metadata: Metadata = {
  title: "Consumer Health Data Privacy Policy",
  description:
    "Washington My Health My Data Act policy placeholder for Northform Psychiatry — distinct from the general privacy notice and the HIPAA NPP.",
};

export default function HealthDataPage() {
  return <HealthDataView />;
}
