import type { Metadata } from "next";
import { PatientsView } from "@/components/PatientsView";

export const metadata: Metadata = {
  title: "Patient login",
  description: "Sign in if you are already a patient of Northform Psychiatry.",
};

export default function PatientsPage() {
  return <PatientsView />;
}
