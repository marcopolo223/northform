import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { StartView } from "@/components/StartView";
import { practiceFaq } from "@/content/faq";
import { faqSchema, howToSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Start here",
  description:
    "Become a patient at Northform Psychiatry in Spokane, Washington. The first visit is 75–90 minutes. Self-pay, sliding scale, Superbill for out-of-network reimbursement.",
};

export default function StartPage() {
  return (
    <>
      <JsonLd data={howToSchema()} />
      <JsonLd data={faqSchema([...practiceFaq])} />
      <StartView />
    </>
  );
}
