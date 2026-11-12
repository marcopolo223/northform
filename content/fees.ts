export type FeeRow = {
  service: string;
  duration?: string;
  rate: string;
  includes: string;
};

export type EstimateOption = {
  id: string;
  label: string;
  amount: number;
  kind: "first" | "follow";
};

/** Rates confirmed by Mitch. Keep catalog.*.ts `fees.rows` in the same order. */
export const feeRows: FeeRow[] = [
  {
    service: "Brief fit call",
    duration: "10–15 min",
    rate: "$0",
    includes: "A short, confidential call to see whether Northform is the right fit before you commit to anything.",
  },
  {
    service: "Psychiatric evaluation",
    duration: "",
    rate: "$350",
    includes: "A longer diagnostic visit with history, standardized screenings, and a formal diagnosis where one fits.",
  },
  {
    service: "Medication follow-up",
    duration: "In person or telehealth",
    rate: "$175",
    includes: "A check-in on how a medication plan is working.",
  },
  {
    service: "Comprehensive follow-up",
    duration: "",
    rate: "$350",
    includes: "A longer follow-up for complex medication changes, side effects, or revisiting a diagnosis.",
  },
  {
    service: "ADHD initial evaluation",
    duration: "",
    rate: "$350",
    includes: "Rating scales, records review, prescription monitoring program (PMP) check, and a treatment plan. This is not neuropsychological testing.",
  },
  {
    service: "Substance-use treatment intake",
    duration: "Confidential · office-based",
    rate: "$400",
    includes: "Intake for substance-use treatment alongside psychiatric care. Opening January 2027.",
  },
  {
    service: "Service animal evaluation",
    duration: "",
    rate: "$120",
    includes: "A psychiatric evaluation in support of a service animal, when the clinical picture asks for it.",
  },
  {
    service: "Forms, letters and records review",
    duration: "",
    rate: "$50 per 15 min",
    includes: "Paperwork, letters, and records review are billed in 15-minute steps.",
  },
];

export const estimateFirst: EstimateOption[] = [
  { id: "eval", label: "Psychiatric evaluation · $350", amount: 350, kind: "first" },
  { id: "adhd", label: "ADHD initial evaluation · $350", amount: 350, kind: "first" },
  { id: "sud", label: "Substance-use treatment intake · $400", amount: 400, kind: "first" },
  { id: "animal", label: "Service animal evaluation · $120", amount: 120, kind: "first" },
];

export const estimateFollow: EstimateOption[] = [
  { id: "med", label: "Medication follow-up · $175", amount: 175, kind: "follow" },
  { id: "comprehensive", label: "Comprehensive follow-up · $350", amount: 350, kind: "follow" },
];
