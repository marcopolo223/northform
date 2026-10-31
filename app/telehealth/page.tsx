import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { TelehealthView } from "@/components/TelehealthView";
import { webpageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Telehealth",
  description:
    "Telehealth psychiatric care for patients in Washington, including Spokane. Virtual visits are ordinary sixty-minute hours.",
};

export default function TelehealthPage() {
  return (
    <>
      <JsonLd
        data={webpageSchema({
          title: "Telehealth",
          description: String(metadata.description),
          path: "/telehealth",
        })}
      />
      <TelehealthView />
    </>
  );
}
