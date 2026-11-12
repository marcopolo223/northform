export type TreatCell = {
  slug: string;
  title: string;
  kicker: string;
  what: string;
  how: string;
  href: string;
  linkLabel: string;
};

export const treatCells: TreatCell[] = [
  {
    slug: "mood-attention",
    title: "ADHD, depression and anxiety",
    kicker: "Adults · College age",
    what: "Attention, mood, sleep, and energy that no longer hold a day together — in adults and college-age patients.",
    how: "A careful name when it is accurate, then medication, structure, pharmacogenomics, and supplements in the same sixty-minute hour. Not a stamp and a refill.",
    href: "/conditions",
    linkLabel: "Named conditions",
  },
  {
    slug: "trauma",
    title: "Trauma and reintegration",
    kicker: "Occupational · Social · Cultural",
    what: "What remains after the event: a workplace that broke trust, a unit that never staffed safely, returning from abroad, cultural displacement.",
    how: "Psychotherapy, sleep, genomic clues, and medication aimed at function — a job, a home, a friend — not only the flashback.",
    href: "/conditions/ptsd",
    linkLabel: "PTSD and trauma",
  },
  {
    slug: "identity",
    title: "Identity and self-worth",
    kicker: "Meaning-centered",
    what: "Nightmares, guilt, shame, fear, and the question of who you are after the rupture.",
    how: "The aim is not to argue belief. Talking, regulation, and medicine when it is required — enough quiet that a life can be lived inside.",
    href: "/approach",
    linkLabel: "The approach",
  },
  {
    slug: "sleep",
    title: "Sleep and shift work",
    kicker: "Nights · Rotations",
    what: "Nights, rotating schedules, and a nervous system that will not come down.",
    how: "Sleep is treated in the same hour as mood and attention — not a separate boutique. Prescribing and structure follow the shift, not an office-hours fantasy.",
    href: "/services",
    linkLabel: "Services",
  },
  {
    slug: "occupational",
    title: "Work, leave and return",
    kicker: "Occupational psychiatry",
    what: "Leave, return-to-work, and the paperwork a career and a nervous system both need.",
    how: "Evaluation for work-related concerns. Reports and forms billed by the hour when they run long. FMLA language when a job has to be protected.",
    href: "/insights",
    linkLabel: "FMLA and the workplace",
  },
  {
    slug: "foster",
    title: "Foster parents and youth",
    kicker: "Sliding scale",
    what: "Youth, including those in foster care, and the adults holding them.",
    how: "Private-pay, with scale built in. Evaluation, medication management, and enough time. That conversation happens directly — not as a coupon code.",
    href: "/services/child-adolescent",
    linkLabel: "Child and adolescent",
  },
  {
    slug: "colleagues",
    title: "Care for those who care",
    kicker: "Confidential",
    what: "Healthcare professionals and first responders who cannot afford a public waiting room.",
    how: "The same sixty-minute psychiatry, with discretion built in. Medication-assisted treatment opens in January 2027.",
    href: "/start",
    linkLabel: "Become a patient",
  },
  {
    slug: "service-animal",
    title: "Service animal evaluations",
    kicker: "By request",
    what: "A psychiatric evaluation in support of a service animal, when the clinical picture asks for it.",
    how: "By request — not a product on a menu. The letter follows the evaluation, not the other way around.",
    href: "/contact",
    linkLabel: "Ask",
  },
];
