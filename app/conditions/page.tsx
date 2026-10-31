import type { Metadata } from "next";
import { ConditionsView } from "@/components/ConditionsView";
import { JsonLd } from "@/components/JsonLd";
import { webpageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Conditions",
  description:
    "Depression, anxiety, ADHD, bipolar, PTSD, and opioid use disorder — psychiatric care in Spokane, Washington, with a full page for each condition.",
};

export default function ConditionsIndexPage() {
  return (
    <>
      <JsonLd
        data={webpageSchema({
          title: "Conditions treated",
          description: String(metadata.description),
          path: "/conditions",
        })}
      />
      <ConditionsView />
    </>
  );
}
