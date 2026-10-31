export type Article = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "fmla-is-not-only-physical",
    title: "FMLA is not only for physical illness",
    dek: "Serious mental health conditions can qualify for job-protected leave in the United States. Knowing that before a crisis is a form of care.",
    date: "2026-09-01",
    body: [
      "Many professionals still hear Family and Medical Leave Act coverage as something reserved for surgery, injury, or a diagnosis you can see on an X-ray. That is a costly misunderstanding. Employees in the United States can qualify for job-protected leave when a serious mental health condition is certified by a healthcare provider — including a psychiatric nurse practitioner.",
      "Workplace stress, burnout, and anxiety are not automatically FMLA events. The statute is concerned with a serious health condition that makes an employee unable to perform essential job functions, or that requires continuing treatment. Depression, trauma-related illness, and other psychiatric conditions can meet that standard when the clinical picture and the documentation are clear.",
      "The practical work begins before anyone is in crisis. It includes understanding what your employer’s process actually is, what a complete certification looks like, and which conversations belong with human resources versus a treating clinician. Approaching those steps early can protect both health and a career.",
      "This is educational writing, not legal advice and not a determination that any particular person qualifies. Whether leave is appropriate is a clinical and legal question, answered in a specific case. If you are considering leave, a careful evaluation and accurate documentation are the first honest steps.",
    ],
  },
  {
    slug: "language-of-a-toxic-workplace",
    title: "Words that describe what the paperwork needs to see",
    dek: "FMLA does not grade how unpleasant a workplace feels. It looks for functional impairment, medical necessity, and a condition that can be certified.",
    date: "2026-09-08",
    body: [
      "People often arrive with a story that is true and still difficult to place on a form: a manager who humiliates, a unit that never staffs safely, a culture that punishes rest. Those facts matter. Certification language, however, is not a performance review of the workplace. It is a medical account of what the nervous system can and cannot do.",
      "Useful language tends to be concrete. Sleep that no longer restores. Panic that interrupts driving or procedures. Concentration that will not hold through a shift. Intrusive memory after a critical incident. Avoidance of a particular unit because the body treats it as danger. Absences already accumulating. A history of attempted adjustments that did not restore function.",
      "Less useful, on a certification, are moral verdicts alone — “toxic,” “gaslighting,” “they don’t care” — unless they are tied to observable limitation. Those words may be accurate. They are not what a reviewer is trained to weigh. Pair the human truth with the clinical one: diagnosis where it is warranted, duration, treatment, and the duties that cannot currently be performed.",
      "None of this asks a person to soften what happened. It asks that the record be written in a register institutions already know how to read, so the leave — if it is indicated — is not lost in translation.",
    ],
  },
  {
    slug: "from-documentation-to-leave",
    title: "A decision path toward protected leave",
    dek: "When the next honest move is leave, sequence matters: clinical clarity, documentation, then the conversation at work.",
    date: "2026-09-15",
    body: [
      "Protected leave is sometimes the correct next move. It is rarely the first one that should be improvised in a hallway. A quieter path looks like this: a thorough evaluation; a shared understanding of diagnosis, risk, and what treatment will actually require; then documentation that matches the facts; then notice to the employer in the manner the policy requires.",
      "Along that path, several questions deserve a straight answer. Is the limitation serious enough, and expected to last long enough, to meet the legal standard? Is intermittent leave more fitting than a continuous block? What would a return-to-work plan even look like? Who, besides the patient, needs to know — and who does not?",
      "Strategy here is not cunning. It is pacing. People who wait until they cannot get out of the car often have fewer options, and poorer records, than people who seek care while they can still describe the problem with precision. The intake is where that description begins.",
      "Northform can evaluate, diagnose, and, when it is appropriate, certify. We cannot promise an employer’s decision. We can help a person arrive at that conversation with a clear clinical file and a nervous system that has already been treated as worthy of time.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
