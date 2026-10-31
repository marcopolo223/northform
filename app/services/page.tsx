import type { Metadata } from "next";
import { CareView } from "@/components/CareView";
import { JsonLd } from "@/components/JsonLd";
import { webpageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Care",
  description:
    "Psychiatric care in Spokane, Washington: diagnosis, prescribing, and sixty-minute psychotherapy at Northform — with sliding scale and payment plans.",
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={webpageSchema({
          title: "Care",
          description: String(metadata.description),
          path: "/services",
        })}
      />
      <CareView />
    </>
  );
}
