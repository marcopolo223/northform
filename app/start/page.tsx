import type { Metadata } from "next";
import { StartView } from "@/components/StartView";

export const metadata: Metadata = {
  title: "Start here",
  description:
    "Become a patient at Northform Psychiatry in Spokane, Washington. Choose a visit and complete the secure intake.",
};

export default function StartPage() {
  return <StartView />;
}
