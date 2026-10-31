import type { Metadata } from "next";
import { ContactView } from "@/components/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Northform Psychiatry in Spokane, Washington. Learn about the work, then complete the intake.",
};

export default function ContactPage() {
  return <ContactView />;
}
