import type { ClinicalEntry } from "@/content/conditions";

export const offerings: ClinicalEntry[] = [
  {
    slug: "medication-management",
    title: "Medication management",
    answer:
      "Prescribing is full authority, used as one instrument among others. Medication when the biology asks for it; supplements and herbal therapeutics when they are the better tool. Checks are not thirty minutes. The session is sixty.",
    lede: "Thoughtful prescribing inside a long enough hour.",
    body: [
      "Diagnosis, when it is warranted, organizes suffering. It is not an identity. Pharmacogenomics can draft how you may handle a drug. Nothing here pretends that every case can refuse medicine, or that every case requires it.",
    ],
    faq: [
      { q: "Is this only refills?", a: "No. Sixty-minute sessions are the baseline length of the work." },
      { q: "Do you use herbal therapeutics?", a: "When they serve — lithium orotate rather than carbonate in some mood conversations, peptides such as Semax, or pharmaceuticals if needed." },
    ],
    citations: [
      { label: "FDA — drug information", href: "https://www.fda.gov/drugs" },
    ],
    updated: "2026-09-17",
    image: "/images/spokane-bowl.jpg",
    imageAlt: "Bowl and Pitcher basalt formations on the Spokane River",
  },
  {
    slug: "mat",
    title: "Medication-assisted treatment",
    answer:
      "MAT for opioid use disorder is ordinary medical care. It will be offered here beginning January 2027, with the same sixty-minute frame as the rest of the practice.",
    lede: "Discretion is part of the medicine.",
    body: [
      "Healthcare professionals and first responders can begin without advertising a workplace. The public path is still the intake. If this is an emergency, call 911.",
    ],
    faq: [
      { q: "Where do colleagues start?", a: "The same intake as everyone else. You do not have to name a workplace in the first sentence." },
    ],
    citations: [
      { label: "SAMHSA — MAT", href: "https://www.samhsa.gov/medications-substance-use-disorders" },
    ],
    updated: "2026-09-17",
    image: "/images/spokane-bridge.jpg",
    imageAlt: "The swinging bridge over the Spokane River at Riverside State Park",
  },
  {
    slug: "perinatal",
    title: "Perinatal mental health",
    answer:
      "Pregnancy, postpartum, and hormonal change can disrupt sleep, mood, and attachment. Perinatal care opens in May 2027 and will include psychiatry in the same visit.",
    lede: "Psychiatric care in pregnancy, postpartum, and hormonal transition.",
    body: [
      "This is not a separate boutique. It will be the same practice — diagnosis, prescribing, sixty minutes — applied to a body that is changing. Clinical details are confirmed with Mitch; this page is a door, not a protocol.",
    ],
    faq: [
      { q: "Do you prescribe in pregnancy?", a: "Prescribing will be available when perinatal care opens in May 2027. What is appropriate is a case-by-case clinical decision, not a website promise." },
    ],
    citations: [
      { label: "NIMH — perinatal depression", href: "https://www.nimh.nih.gov/health/publications/perinatal-depression" },
    ],
    updated: "2026-09-17",
    image: "/images/spokane-river.jpg",
    imageAlt: "The Spokane River winding through ponderosa pines at Riverside State Park",
  },
  {
    slug: "child-adolescent",
    title: "Child and adolescent",
    answer:
      "Youth, including those in foster care, can be seen for evaluation, medication management, and peer-informed support. Private pay, with a sliding scale. Lived experience is part of why this door exists.",
    lede: "Foster parents and youth, without a coupon code.",
    body: [
      "The conversation about scale happens directly. Payment plans can be worked out for those who may be eligible. This is not a public clinic waitlist and not a crisis unit.",
    ],
    faq: [
      { q: "Is this insurance-based?", a: "Foster parents and youth are seen private-pay, with a sliding scale. Insurance, when contracted, will be listed on Billing." },
    ],
    citations: [
      { label: "NIMH — child and adolescent mental health", href: "https://www.nimh.nih.gov/health/topics/child-and-adolescent-mental-health" },
    ],
    updated: "2026-09-17",
    image: "/images/spokane-bowl.jpg",
    imageAlt: "Bowl and Pitcher basalt formations on the Spokane River",
  },
  {
    slug: "emdr",
    title: "EMDR",
    answer:
      "Eye Movement Desensitization and Reprocessing is one way of working with traumatic memory. It will be offered as a service lane beginning September 2027, not as a religion. Whether it is the right instrument is decided after an evaluation.",
    lede: "A method, when the case asks for it.",
    body: [
      "Trauma here also includes occupational and cultural reintegration. EMDR will sit beside talking, genomic clues, and medication — never instead of a careful hour.",
    ],
    faq: [
      { q: "Is every trauma case EMDR?", a: "No. The method follows the person." },
    ],
    citations: [
      { label: "EMDRIA — about EMDR", href: "https://www.emdria.org/about-emdr-therapy/" },
    ],
    updated: "2026-09-17",
    image: "/images/spokane-bridge.jpg",
    imageAlt: "The swinging bridge over the Spokane River at Riverside State Park",
  },
  {
    slug: "geriatric",
    title: "Geriatric psychiatry",
    answer:
      "Aging nervous systems still deserve sixty minutes. Mood, cognition, sleep, polypharmacy, and the dignity of a job, a home, and a friend remain the measure. Care is careful with medicines and honest about what function looks like.",
    lede: "Function in later life, not only symptom lists.",
    body: [
      "This lane is part of the same practice. Complex medical lists and family systems are expected. Telehealth in Washington and Idaho is available when travel is the barrier.",
    ],
    faq: [
      { q: "Do you only see older adults in person?", a: "Telehealth is available for patients in Washington. In-person plans follow the address on Contact." },
    ],
    citations: [
      { label: "NIMH — older adults and mental health", href: "https://www.nimh.nih.gov/health/topics/older-adults-and-mental-health" },
    ],
    updated: "2026-09-17",
    image: "/images/spokane-river.jpg",
    imageAlt: "The Spokane River winding through ponderosa pines at Riverside State Park",
  },
];

export function getOffering(slug: string) {
  return offerings.find((item) => item.slug === slug);
}

/** Services that are not offered yet. Value is the opening month (YYYY-MM). */
export const opensOn: Record<string, string> = {
  mat: "2027-01",
  perinatal: "2027-05",
  emdr: "2027-09",
};
