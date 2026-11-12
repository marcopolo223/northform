import type { Metadata } from "next";
import { AboutView } from "@/components/AboutView";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mitch Corbet, PMHNP-BC — psychiatric care in Spokane, Washington. Botany, genetics of resilience, and a private practice built on sixty-minute sessions.",
};

export default function AboutPage() {
  return <AboutView />;
}
