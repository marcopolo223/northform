export const site = {
  name: "Northform Psychiatry",
  shortName: "Northform",
  tagline: "Sixty minutes. A name. A plan.",
  positioning:
    "Northform brings psychiatric care, pharmacogenomics and personalized supplementation together, so your nervous system can find its balance again and hold it.",
  heroLede: "Sixty Minutes, A Name, A Plan.",
  provider: {
    name: "Mitchell Corbet",
    credentials: "MSN, ARNP, PMHNP-BC",
    full: "Mitchell Corbet, MSN, ARNP, PMHNP-BC",
    npi: "",
    reviewedBy: "Mitchell Corbet, MSN, ARNP, PMHNP-BC",
  },
  location: "Spokane, Washington",
  hours: "By appointment · telehealth in Washington",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://northformpsychiatry.com",
  placeholders: {
    email: "hello@northformpsychiatry.com",
    phone: "(509) 000-0000",
    fax: "(509) 000-0001",
    address: "Spokane, WA",
    addressNote: "Placeholder — street address forthcoming",
    contactNote: "Placeholder contact details — replace before launch",
  },
  socials: {
    instagram: "",
    linkedin: "",
    psychologyToday: "",
  },
  /** Empty string keeps the Start here button as a visible placeholder. */
  intakeUrl: "",
  /** Empty string keeps Patient login on /patients until the portal URL is live. */
  patientPortalUrl: "",
  rates: {
    evaluation: 325,
    followUp: 275,
    duration: "60 minutes",
    note: "Self-pay rates. Sliding scale may lower these amounts. Labs billed separately. A Good Faith Estimate is written before the first visit — this page is not that estimate.",
  },
  insurance: [] as string[],
  serviceArea: [
    "Spokane",
    "Spokane Valley",
    "Liberty Lake",
    "Cheney",
    "Airway Heights",
    "Deer Park",
    "Coeur d'Alene",
    "Pullman",
  ],
  crisis: {
    emergency: "911",
    line: "988",
  },
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Care" },
] as const;

export const navAux = [
  { href: "/billing", label: "Billing" },
  { href: "/contact", label: "Contact" },
] as const;

export const mobileNav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Care" },
  { href: "/conditions", label: "Conditions" },
] as const;

export const footerNav = [
  { href: "/start", label: "Become a patient" },
  { href: "/conditions", label: "Conditions" },
  { href: "/approach", label: "Approach" },
  { href: "/telehealth", label: "Telehealth" },
  { href: "/insights", label: "Resources" },
] as const;

export const legalNav = [
  { href: "/privacy", label: "Privacy" },
  { href: "/privacy/npp", label: "HIPAA NPP" },
  { href: "/privacy/health-data", label: "Health data" },
  { href: "/terms", label: "Terms" },
  { href: "/nondiscrimination", label: "Nondiscrimination" },
] as const;
