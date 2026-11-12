export const site = {
  name: "Northform Psychiatry",
  shortName: "Northform",
  tagline: "Sixty minutes. A name. A plan.",
  positioning:
    "Northform brings psychiatric care, pharmacogenomics and personalized supplementation together, so your nervous system can find its balance again and hold it.",
  heroLede: "Sixty Minutes, A Name, A Plan.",
  provider: {
    name: "Mitch Corbet",
    credentials: "MSN, ARNP, PMHNP-BC",
    full: "Mitch Corbet, MSN, ARNP, PMHNP-BC",
    npi: "1861211674",
    reviewedBy: "Mitch Corbet, MSN, ARNP, PMHNP-BC",
  },
  location: "Spokane, Washington",
  hours: "Mon–Sat · 7:00 am–7:00 pm · telehealth in Washington and Idaho",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://northformpsychiatry.com",
  placeholders: {
    email: "admin@northform.health",
    phone: "(509) 400-4895",
    fax: "(509) 223-7534",
    address: "140 S. Arthur Street, Spokane, WA 99202",
    addressNote: "",
    contactNote: "",
  },
  address: {
    street: "140 S. Arthur Street",
    city: "Spokane",
    region: "WA",
    postalCode: "99202",
  },
  licensedStates: ["Washington", "Idaho"],
  ages: "12 and up",
  appointmentLanguages: ["English", "Spanish"],
  /** Mon–Sat 07:00–19:00 */
  openingHours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "07:00", closes: "19:00" },
  socials: {
    instagram: "",
    linkedin: "",
    psychologyToday: "",
  },
  /** Intake and the patient portal load as IntakeQ embeds, so no external URL is needed. */
  intakeUrl: "",
  patientPortalUrl: "",
  intakeq: { id: "665902888d09ac249acfcf04", locationId: 2 },
  rates: {
    evaluation: 350,
    followUp: 175,
    duration: "",
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
