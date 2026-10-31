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

export const feeRows: FeeRow[] = [
  {
    service: "Brief fit call",
    duration: "10–15 min",
    rate: "$0",
    includes: "A short, confidential call to see whether Northform is the right fit before you commit to anything.",
  },
  {
    service: "Comprehensive psychiatric evaluation",
    duration: "75–90 min",
    rate: "$325",
    includes: "A longer diagnostic visit with history, standardized screenings, and a formal diagnosis where one fits.",
  },
  {
    service: "Functional psychiatry intake",
    duration: "120 min",
    rate: "$525",
    includes: "For complex mood, anxiety, ADHD, sleep, trauma, or stress concerns, medical overlap, and long medication histories. Lab fees billed separately.",
  },
  {
    service: "Integrated psychiatry + supportive therapy",
    duration: "60 min — the Northform baseline",
    rate: "$275",
    includes: "Medication management and therapy in the same hour.",
  },
  {
    service: "Standard medication follow-up",
    duration: "25–30 min",
    rate: "$175",
    includes: "A check-in on how a medication plan is working.",
  },
  {
    service: "Extended follow-up",
    duration: "45–50 min",
    rate: "$250",
    includes: "For complex medication changes, side effects, revisiting a diagnosis, or relapse prevention.",
  },
  {
    service: "ADHD and controlled-medication evaluation",
    duration: "",
    rate: "$350 initial · $175–$250 follow-ups",
    includes: "Rating scales, records review, vitals, prescription monitoring program (PMP) check, and a treatment plan. This is not neuropsychological testing.",
  },
  {
    service: "Professional stress track",
    duration: "Healthcare workers · first responders · trauma",
    rate: "Same as visit rates",
    includes: "A specialty pathway at the standard rates above.",
  },
  {
    service: "Co-occurring substance-use care",
    duration: "Confidential · office-based",
    rate: "$400 intake · $180 follow-up",
    includes: "Office-based medication treatment alongside psychiatric care. Not a methadone program.",
  },
  {
    service: "Occupational psychiatry and return-to-work",
    duration: "",
    rate: "$375 evaluation · $200/hr reports",
    includes: "Evaluation for work-related concerns, with reports and forms billed by the hour.",
  },
  {
    service: "Forms, letters, records review and collateral calls",
    duration: "",
    rate: "Brief: included · otherwise $50 per 15 min",
    includes: "Short items are part of your care. Longer work is billed in 15-minute steps or quoted as a flat fee in advance.",
  },
];

export const estimateFirst: EstimateOption[] = [
  { id: "eval", label: "Comprehensive psychiatric evaluation · $325", amount: 325, kind: "first" },
  { id: "functional", label: "Functional psychiatry intake · $525", amount: 525, kind: "first" },
  { id: "adhd", label: "ADHD and controlled-medication evaluation · $350", amount: 350, kind: "first" },
  { id: "sud", label: "Co-occurring substance-use care · $400", amount: 400, kind: "first" },
  { id: "occ", label: "Occupational psychiatry evaluation · $375", amount: 375, kind: "first" },
];

export const estimateFollow: EstimateOption[] = [
  { id: "baseline", label: "60-min psychiatry + supportive therapy · $275", amount: 275, kind: "follow" },
  { id: "med", label: "Standard medication follow-up · $175", amount: 175, kind: "follow" },
  { id: "extended", label: "Extended follow-up · $250", amount: 250, kind: "follow" },
  { id: "sud-follow", label: "Substance-use follow-up · $180", amount: 180, kind: "follow" },
];
