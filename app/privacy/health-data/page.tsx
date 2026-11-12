import type { Metadata } from "next";
import { HealthDataView } from "@/components/LegalViews";

export const metadata: Metadata = {
  title: "Consumer Health Data Privacy Policy",
  description:
    "How Northform Psychiatry's public website handles consumer health data under Washington's My Health My Data Act, and your rights to access, withdraw consent, and delete.",
};

export default function HealthDataPage() {
  return <HealthDataView />;
}
