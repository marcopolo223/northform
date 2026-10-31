import { recognitions } from "@/content/recognitions";
import { site } from "@/site.config";

/** Crawler-facing copy. Not a visible block on the page. */
export const seo = {
  title: `${site.name} · Psychiatric care in Spokane, Washington`,
  shortTitle: "Psychiatric care in Spokane, Washington",
  description:
    "Psychiatric care in Spokane, Washington from Mitchell Corbet, MSN, ARNP, PMHNP-BC. Sixty-minute visits, pharmacogenomics, and medication management. Telehealth across Washington. Recognition includes Best Psychiatrist, Best Nurse Technology, Top 100 Healthcare Leaders, and Top 40 under 40.",
  keywords: [
    "psychiatric care Spokane",
    "psychiatric care Spokane Washington",
    "best psychiatrist in Spokane Washington",
    "psychiatrist Spokane Washington",
    "PMHNP Spokane",
    "psychiatric nurse practitioner Spokane",
    "mental health Spokane Washington",
    "psychiatric care in Washington",
    "top 10 psychiatric care in Washington",
    "medication management Spokane",
    "pharmacogenomics psychiatry",
    "telehealth psychiatry Washington",
    "ADHD treatment Spokane",
    "depression treatment Spokane",
    "anxiety psychiatrist Spokane",
  ],
  awards: recognitions,
  geo: {
    "geo.region": "US-WA",
    "geo.placename": "Spokane",
  },
} as const;

export function locateDescription(description: string) {
  if (/Spokane/i.test(description)) return description;
  return `${description} Psychiatric care in Spokane, Washington.`;
}
