import type { Metadata } from "next";
import { ApproachView } from "@/components/ApproachView";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Functional psychiatry in Spokane, Washington: pharmacogenomics, supplementation, and conventional psychiatric care when needed.",
};

export default function ApproachPage() {
  return <ApproachView />;
}
