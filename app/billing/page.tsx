import type { Metadata } from "next";
import { BillingBody } from "@/components/BillingBody";
import { Container } from "@/components/Container";
import { LocalizedHeader } from "@/components/LocalizedHeader";
import { JsonLd } from "@/components/JsonLd";
import { practiceFaq } from "@/content/faq";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Billing",
  description:
    "Self-pay psychiatric care in Spokane, Washington: sliding scale, payment plans, Superbill for out-of-network reimbursement, and a Good Faith Estimate before the first visit.",
};

export default function BillingPage() {
  return (
    <>
      <JsonLd data={faqSchema([...practiceFaq])} />
      <LocalizedHeader section="billing" image="/images/spokane-bridge.jpg" imageAlt="The swinging bridge over the Spokane River at Riverside State Park" />
      <Container className="py-14 lg:py-24">
        <BillingBody />
      </Container>
    </>
  );
}
