export type Faq = { q: string; a: string };
export type Citation = { label: string; href: string };

export type ClinicalEntry = {
  slug: string;
  title: string;
  answer: string;
  lede: string;
  body: string[];
  faq: Faq[];
  citations: Citation[];
  updated: string;
  image: string;
  imageAlt: string;
};

export type ConditionSymbolId =
  | "depression"
  | "anxiety"
  | "adhd"
  | "bipolar"
  | "ptsd"
  | "oud";

export type ConditionEntry = ClinicalEntry & {
  symbol: ConditionSymbolId;
  what: string;
  how: string;
  treatment: string;
};

export const conditions: ConditionEntry[] = [
  {
    slug: "depression",
    title: "Depression",
    symbol: "depression",
    what: "Sleep, appetite, energy, and interest that no longer hold.",
    how: "Sixty minutes, a careful name, medication when the biology asks.",
    treatment:
      "Depression here is treated as a nervous-system and metabolic problem as much as a story. The first work is a careful name, when a name is accurate, and enough time to see what the symptoms are actually doing. Talking, supplements, pharmacogenomics, and pharmaceuticals sit in the same sixty-minute visit when they serve.",
    answer:
      "Depression is more than a low mood. It is a change in sleep, appetite, energy, and the capacity to take interest in a life that used to hold one. At Northform it is treated as a nervous-system and metabolic problem as much as a story, with sixty-minute sessions, genomic clues, and medication when the biology asks for it.",
    lede: "A practice to return to — not a stamp and a refill.",
    body: [
      "People arrive with burnout, grief, perimenopause, a workplace that never lets the body down, or a depression that has already outlasted two medications. The first work is a careful name, when a name is accurate, and enough time to see what the symptoms are actually doing.",
      "Functional care here can mean talking, supplements, and pharmaceuticals if they are needed. Pharmacogenomics is a draft of how you may metabolize a drug — not a fortune. Targeted supplementation sits beside conventional medicine when it serves.",
      "If this is an emergency, call 911. For mental health crisis support in the United States, call or text 988. This page is education, not a diagnosis and not a treatment relationship.",
    ],
    faq: [
      { q: "Do you treat depression with only medication?", a: "No. Medication is available when it is indicated. Sessions are sixty minutes as the baseline, with genomic information considered in the same visit." },
      { q: "Is this a one-time evaluation?", a: "The aim is a practice people return to while sleep, trauma load, and metabolic clues are still in play — not a single stamp." },
      { q: "Can care be in another language?", a: "Yes. The site and visits may be offered in English, Spanish, Portuguese, or French. Choose a language in the header or footer." },
    ],
    citations: [
      { label: "NIMH — Depression", href: "https://www.nimh.nih.gov/health/topics/depression" },
      { label: "SAMHSA — Mental health", href: "https://www.samhsa.gov/mental-health" },
    ],
    updated: "2026-09-17",
    image: "/images/spokane-river.jpg",
    imageAlt: "The Spokane River winding through ponderosa pines at Riverside State Park",
  },
  {
    slug: "anxiety",
    title: "Anxiety",
    symbol: "anxiety",
    what: "Ordinary life treated as danger — racing thought, sleeplessness, dread.",
    how: "Regulation first, then the choices that become possible again.",
    treatment:
      "Panic, generalized worry, insomnia, and the aftertaste of a workplace or a faith community that broke trust all present as anxiety. The work is not to argue the fear out of existence. It is to restore enough regulation — with talking, herbal therapeutics, and medication when needed — that life can be lived again.",
    answer:
      "Anxiety is the body treating ordinary life as danger — racing thought, sleeplessness, dread, a heart that will not settle. Northform works with the physiology and the meaning together: regulation first, then the choices that become possible when the nervous system is no longer shouting.",
    lede: "Fear that has overstayed, held without argument.",
    body: [
      "Panic, generalized worry, insomnia, and the long aftertaste of a workplace or a faith community that broke trust all present as anxiety. The work is not to argue the fear out of existence. It is to restore enough regulation that life can be lived again.",
    ],
    faq: [
      { q: "Do you use benzodiazepines?", a: "Prescribing is available, and the instrument is chosen for the case. Functional care includes herbal therapeutics and pharmaceuticals if needed — without pretending every case can refuse medicine." },
      { q: "Is spiritual distress treated as anxiety?", a: "Nightmares, guilt, shame, fear, and insomnia that arrive in a religious life are part of the work. The aim is optimizing regulation, not arguing belief." },
    ],
    citations: [
      { label: "NIMH — Anxiety disorders", href: "https://www.nimh.nih.gov/health/topics/anxiety-disorders" },
    ],
    updated: "2026-09-17",
    image: "/images/spokane-bowl.jpg",
    imageAlt: "Bowl and Pitcher basalt formations on the Spokane River",
  },
  {
    slug: "adhd",
    title: "ADHD",
    symbol: "adhd",
    what: "Attention, impulse, and working memory that show up in a day's logistics.",
    how: "A formal name when it is accurate, then medication and structure in one hour.",
    treatment:
      "Adults who have compensated for years and high performers whose systems are finally failing often need a name that organizes the mess. Formal diagnosis, when it is accurate, is a map. Stimulants, non-stimulants, sleep, and genomic clues belong in one sixty-minute conversation — not a prescription pad alone.",
    answer:
      "ADHD is a difference in attention, impulse, and working memory that shows up in work, school, and the small logistics of a day. Formal diagnosis, when it is accurate, is a map. Medication and structure can help; they are not the whole of a sixty-minute practice.",
    lede: "More than a prescription pad.",
    body: [
      "Adults who have compensated for years, high performers whose systems are finally failing, and people who need a name that organizes the mess all sit in this room. Stimulants, non-stimulants, sleep, and genomic clues belong in one conversation.",
    ],
    faq: [
      { q: "Do you diagnose ADHD in adults?", a: "Yes. A careful evaluation and, when warranted, a formal diagnosis. Names are tools, not identities to live inside forever." },
      { q: "Are sessions only medication checks?", a: "No. Sixty minutes is the ordinary length of the work — not a factory of thirty-minute checks." },
    ],
    citations: [
      { label: "NIMH — ADHD", href: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" },
    ],
    updated: "2026-09-17",
    image: "/images/spokane-bridge.jpg",
    imageAlt: "The swinging bridge over the Spokane River at Riverside State Park",
  },
  {
    slug: "bipolar",
    title: "Bipolar",
    symbol: "bipolar",
    what: "Mood, energy, and sleep that swing beyond ordinary variation.",
    how: "Safety and sleep first, then the least crude tool that actually holds.",
    treatment:
      "Safety, sleep, and an honest map of the episodes come first. Lithium — including a conversation about orotate versus carbonate — and other mood agents are instruments, not identities. Talking and herbal therapeutics when they serve; pharmaceuticals when they are required.",
    answer:
      "Bipolar spectrum illness is a pattern of mood, energy, and sleep that swings beyond ordinary variation. Safety, sleep, and a honest map of the episodes come first. Lithium — including a conversation about orotate versus carbonate — and other mood agents are instruments, not identities.",
    lede: "Mood that needs a longer clock.",
    body: [
      "The work includes talking, herbal therapeutics when they serve, and pharmaceuticals when they are required. Functional does not mean refusing medicine. It means choosing the least crude tool that actually holds the nervous system.",
    ],
    faq: [
      { q: "Do you prescribe lithium?", a: "Prescriptive authority is full. Lithium carbonate and, when appropriate to discuss, lithium orotate are part of the functional vocabulary — chosen for the case, not the brand." },
      { q: "Is this a crisis service?", a: "No. If you are in danger, call 911. For mental health crisis support, call or text 988." },
    ],
    citations: [
      { label: "NIMH — Bipolar disorder", href: "https://www.nimh.nih.gov/health/topics/bipolar-disorder" },
    ],
    updated: "2026-09-17",
    image: "/images/spokane-river.jpg",
    imageAlt: "The Spokane River winding through ponderosa pines at Riverside State Park",
  },
  {
    slug: "ptsd",
    title: "PTSD and trauma",
    symbol: "ptsd",
    what: "What remains in the nervous system after the event is over.",
    how: "Psychotherapy, sleep, and medication aimed at function — not only the flashback.",
    treatment:
      "Occupational injury, cultural displacement, returning from abroad, a unit that never staffed safely: the work is regulation and function — a job, a home, a friend. Psychotherapy, genomic information, supplements when they help, and conventional medication aimed at symptoms, not only the flashback.",
    answer:
      "Trauma is what remains in the nervous system after the event is over — occupational injury, cultural displacement, returning from abroad, a unit that never staffed safely. Treatment uses psychotherapy, genomic information, supplements when they help, and conventional medication aimed at symptoms and function — not only the flashback.",
    lede: "Care after occupational, cultural, and personal trauma.",
    body: [
      "Occupational, social, and cultural injury belong here. So do nightmares, guilt, shame, and insomnia that arrive in a spiritual life. The aim is regulation and function — a job, a home, a friend — not only whether the hallucinations are gone.",
    ],
    faq: [
      { q: "Will you offer EMDR?", a: "EMDR is planned to open in September 2027. Whether it is the right instrument will be decided in the evaluation, not as a menu item at the door." },
      { q: "Is workplace trauma covered?", a: "Yes. Insights on this site also cover FMLA language when a career and a nervous system both need protecting." },
    ],
    citations: [
      { label: "NIMH — PTSD", href: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd" },
    ],
    updated: "2026-09-17",
    image: "/images/spokane-bowl.jpg",
    imageAlt: "Bowl and Pitcher basalt formations on the Spokane River",
  },
  {
    slug: "oud",
    title: "Opioid use disorder",
    symbol: "oud",
    what: "A medical condition, not a moral verdict.",
    how: "Medication-assisted treatment from January 2027, with discretion when it is required.",
    treatment:
      "Medication-assisted treatment, opening in January 2027, is ordinary medical care inside the same sixty-minute frame as the rest of the practice. You do not have to name a workplace in the first sentence. Licensing boards and small professional communities make publicity a clinical risk of its own.",
    answer:
      "Opioid use disorder is a medical condition, not a moral verdict. Medication-assisted treatment will be available beginning January 2027, including for healthcare professionals and first responders who need discretion.",
    lede: "Ordinary psychiatric care, with discretion when it is required.",
    body: [
      "The public page is clinical on purpose. Licensing boards and small professional communities make publicity a clinical risk of its own — you do not have to name a workplace in the first sentence.",
      "If this is an emergency, call 911. The 988 line is available in the United States.",
    ],
    faq: [
      { q: "Is MAT advertised in the main nav?", a: "No. Medication-assisted treatment is described here and on Care." },
      { q: "Do I have to name my workplace?", a: "Not in the first sentence. You will have time." },
    ],
    citations: [
      { label: "SAMHSA — Medications for opioid use disorder", href: "https://www.samhsa.gov/medications-substance-use-disorders" },
    ],
    updated: "2026-09-17",
    image: "/images/spokane-bridge.jpg",
    imageAlt: "The swinging bridge over the Spokane River at Riverside State Park",
  },
];

export function getCondition(slug: string) {
  return conditions.find((item) => item.slug === slug);
}
