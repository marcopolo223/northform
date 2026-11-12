export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  after?: string[];
};

export const legalEffective = "November 11, 2026";

/** HIPAA Notice of Privacy Practices. English is the controlling text; other languages are offered on request. */
export const nppSections: LegalSection[] = [
  {
    heading: "Who follows this notice",
    paragraphs: [
      "This notice describes how medical information about you may be used and disclosed, and how you can get access to it. Please review it carefully.",
      "It applies to Northform Psychiatry and to Mitch Corbet, MSN, ARNP, PMHNP-BC, and to anyone who works with the practice and handles your health information.",
    ],
  },
  {
    heading: "Our commitment",
    paragraphs: [
      "Your health information is personal. We create a record of the care you receive so that we can give you good care and meet legal requirements. We are required by law to keep your protected health information private, to give you this notice of our legal duties and privacy practices, and to follow the terms of the notice currently in effect.",
      "Washington and Idaho law may protect some information, including mental health records, more strictly than federal law. Where state law is stricter, we follow the stricter rule.",
    ],
  },
  {
    heading: "How we may use and disclose your health information",
    paragraphs: ["The following categories describe the ways we may use and share information without asking you each time."],
    items: [
      "Treatment. We use and share information to provide, coordinate, and manage your care, for example with a pharmacy that fills your prescription, a primary care clinician, or a laboratory that processes a test we order.",
      "Payment. We use information to bill and collect payment. Because the practice is self-pay, this mostly means your own payments. If you ask for a superbill, we give it to you so you can seek reimbursement from your own plan.",
      "Health care operations. We use information to run the practice: quality review, training, scheduling, record keeping, and legal, accounting, and compliance support.",
      "Appointment and care reminders. We may contact you about appointments, forms, and follow-up using the contact methods you give us. Tell us if you want a different method.",
      "People involved in your care. With your permission, we may share relevant information with a family member or another person you name. In an emergency, or if you cannot decide, we may share what is in your interest.",
      "Business associates. Companies that help us run the practice, such as our scheduling, records, and payment software providers, may handle information on our behalf. They must protect it under a written agreement.",
      "Required by law. We share information when federal, state, or local law requires it.",
      "Public health and safety. We may report to public health authorities, and we may disclose information to prevent or reduce a serious and imminent threat to the health or safety of a person or the public.",
      "Abuse and neglect. We report suspected abuse or neglect of a child or a vulnerable adult as the law requires.",
      "Health oversight, courts, and law enforcement. We may disclose information to a health oversight agency, in response to a valid court order or subpoena as the law allows, and to law enforcement in limited situations the law permits.",
      "Coroners, medical examiners, and workers’ compensation. We may disclose information to these agencies as the law allows.",
      "Government functions. We may disclose information for specialized government functions, such as national security, when the law requires it.",
    ],
  },
  {
    heading: "Uses that need your written permission",
    paragraphs: ["We will ask for your written authorization before the following. You may cancel an authorization in writing at any time, except to the extent we have already acted on it."],
    items: [
      "Psychotherapy notes. Notes a clinician keeps separate from your record to analyze a counseling conversation have extra protection. We use or disclose them only with your authorization, with narrow legal exceptions.",
      "Marketing. We do not use your information to market to you without your authorization.",
      "Sale of information. We do not sell your health information.",
      "Any other use or disclosure not described in this notice.",
    ],
  },
  {
    heading: "Substance use disorder records",
    paragraphs: [
      "If we provide substance use disorder treatment that is covered by the federal rule at 42 CFR Part 2, those records have additional protection. In general, we may not use or disclose them without your written consent, or as that rule permits, and they may not be used against you in a criminal case without your consent or a court order that meets the rule’s requirements.",
    ],
  },
  {
    heading: "Your rights",
    paragraphs: ["You have the following rights about your health information. To use any of them, write or email us at the contact details below."],
    items: [
      "Look at and get a copy. You may ask to inspect or receive a copy of your record, including an electronic copy. We will respond within 30 days. We may charge a reasonable cost-based fee, and in limited cases we may deny access, with a right to review.",
      "Ask us to correct it. If you believe something in your record is wrong or incomplete, you may ask us to amend it. If we decline, we will tell you why in writing and you may add a statement of disagreement.",
      "Ask for confidential communication. You may ask us to contact you in a particular way or at a particular place. We will say yes to reasonable requests.",
      "Ask us to limit what we share. You may ask us to restrict certain uses or disclosures. We are not required to agree, with one exception: if you pay for a service in full out of pocket and ask us not to share information about it with your health plan, we will agree unless the law requires otherwise.",
      "Get a list of disclosures. You may ask for an accounting of certain disclosures we made in the six years before your request.",
      "Get a paper copy of this notice. You may ask at any time, even if you agreed to receive it electronically.",
      "Choose someone to act for you. If you have given someone medical power of attorney, or if someone is your legal guardian, that person can exercise your rights. We will confirm that the person has this authority before we act.",
      "Be told of a breach. We will notify you if your unsecured health information is improperly disclosed, as the law requires.",
    ],
  },
  {
    heading: "Telehealth",
    paragraphs: [
      "Video visits are covered by this notice in the same way as visits in the office. We ask you to join from a private place. Telehealth is offered to patients who are physically in Washington or Idaho at the time of the visit.",
    ],
  },
  {
    heading: "Changes to this notice",
    paragraphs: [
      "We may change this notice, and the change may apply to information we already hold. The current notice is always posted on this page and available on request. The effective date is shown at the top of the notice.",
    ],
  },
  {
    heading: "Questions and complaints",
    paragraphs: [
      "If you think your privacy rights were violated, you may complain to us or to the U.S. Department of Health and Human Services. We will not retaliate against you for filing a complaint.",
      "Office for Civil Rights, U.S. Department of Health and Human Services, 200 Independence Avenue SW, Washington, DC 20201. Telephone 1-877-696-6775. Online: hhs.gov/ocr/complaints.",
    ],
  },
];

/** Washington My Health My Data Act: Consumer Health Data Privacy Policy. */
export const healthDataSections: LegalSection[] = [
  {
    heading: "What this policy covers",
    paragraphs: [
      "This policy explains how Northform Psychiatry handles consumer health data collected through this public website. It applies to visitors to the site, whether or not they become patients.",
      "Information in a patient record is protected health information under HIPAA and is described in our Notice of Privacy Practices, not here. Washington’s My Health My Data Act does not apply to protected health information that is subject to HIPAA.",
    ],
  },
  {
    heading: "What we collect, and why",
    paragraphs: [
      "This website is informational. It has no accounts, no comment forms, and no health questionnaires. It does not run advertising cookies, Meta Pixel, or Google Analytics, and it does not build profiles of visitors.",
    ],
    items: [
      "Language preference. If you choose a language, a small cookie called nf-lang stores that choice on your device so the site stays in your language. It is not used to identify you.",
      "Notice dismissal. If you close the crisis-resources bar, your browser remembers that for the length of your visit. Nothing is sent to us.",
      "Server logs. Our hosting provider keeps routine technical logs, such as IP address, browser type, and the pages requested, to keep the site secure and working.",
      "Email and phone. If you email or call us, we receive what you choose to tell us. Please do not send emergencies or detailed clinical information by email.",
    ],
  },
  {
    heading: "Scheduling and the patient portal",
    paragraphs: [
      "The booking window on the Become a patient page and the sign-in window on the Patient login page are provided by IntakeQ, our practice-management software. They appear inside our pages, but IntakeQ runs them. What you enter there goes to IntakeQ and becomes part of your record with us, protected as described in our Notice of Privacy Practices. IntakeQ may also use its own technical tools to operate and secure that service, and its privacy terms apply to that window.",
    ],
  },
  {
    heading: "Who we share it with, and what we do not do",
    items: [
      "Our hosting provider and IntakeQ, as service providers who handle information only to run the site and the scheduling and portal service.",
      "Government or legal authorities, only when the law requires.",
      "We do not sell consumer health data, and we do not share it for advertising.",
      "We do not use geofencing around any health care facility.",
    ],
  },
  {
    heading: "Your rights in Washington",
    paragraphs: ["If you are a Washington consumer, you may:"],
    items: [
      "Confirm whether we collect, share, or sell your consumer health data, and get a list of the third parties we share it with.",
      "Ask for access to the consumer health data we hold about you.",
      "Withdraw consent you have given us.",
      "Ask us to delete your consumer health data.",
    ],
    after: [
      "To make a request, email admin@northform.health. We will confirm you are the person the data is about, and we will respond within 45 days. If we need more time, we may extend that once by another 45 days, and we will tell you why.",
      "If we decline a request, you may appeal by replying to our decision. We will answer your appeal within 45 days. If you are not satisfied, you may contact the Washington Attorney General at atg.wa.gov/file-complaint.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: ["We will post any change on this page and update the effective date."],
  },
];

export const legalNote = {
  en: "This notice is provided in English. For a translated copy, language help, or an accessible format, email us or call and we will provide one at no charge.",
  es: "Este aviso se ofrece en inglés. Para una copia traducida, ayuda con el idioma o un formato accesible, escríbanos o llámenos y se la daremos sin costo.",
  pt: "Este aviso é oferecido em inglês. Para uma cópia traduzida, ajuda com o idioma ou um formato acessível, escreva-nos ou ligue e forneceremos sem custo.",
  fr: "Cet avis est fourni en anglais. Pour une copie traduite, une aide linguistique ou un format accessible, écrivez-nous ou appelez-nous : nous la fournirons sans frais.",
} as const;

export const legalLede = {
  npp: {
    en: "How medical information about you may be used and shared, and how you can get access to it.",
    es: "Cómo puede usarse y compartirse su información médica, y cómo puede acceder a ella.",
    pt: "Como as suas informações médicas podem ser usadas e partilhadas, e como pode aceder a elas.",
    fr: "Comment vos renseignements médicaux peuvent être utilisés et communiqués, et comment y accéder.",
  },
  health: {
    en: "How this public website handles health-related information, as Washington law asks.",
    es: "Cómo este sitio público maneja la información relacionada con la salud, como pide la ley de Washington.",
    pt: "Como este site público trata informações relacionadas com a saúde, como a lei de Washington pede.",
    fr: "Comment ce site public traite les informations liées à la santé, comme le demande la loi de Washington.",
  },
} as const;

export const legalLabels = {
  effective: { en: "Effective", es: "Vigente desde", pt: "Em vigor desde", fr: "En vigueur le" },
  contact: { en: "Privacy contact", es: "Contacto de privacidad", pt: "Contacto de privacidade", fr: "Contact confidentialité" },
} as const;
