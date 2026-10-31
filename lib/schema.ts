import { conditions } from "@/content/conditions";
import { recognitions } from "@/content/recognitions";
import { offerings } from "@/content/services";
import { seo } from "@/lib/seo";
import { isPlaceholderPhone } from "@/lib/tel";
import { site } from "@/site.config";

export function medicalBusinessGraph() {
  const origin = site.url.replace(/\/$/, "");
  const phoneLive = !isPlaceholderPhone(site.placeholders.phone);
  const sameAs = Object.values(site.socials).filter(Boolean);
  const image = `${origin}/images/spokane-river.jpg`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        name: site.name,
        url: origin,
        description: seo.description,
        inLanguage: ["en", "es", "pt", "fr"],
        about: { "@id": `${origin}/#practice` },
        publisher: { "@id": `${origin}/#practice` },
      },
      {
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "@id": `${origin}/#practice`,
        name: site.name,
        alternateName: ["Northform", "Northform Psychiatry Spokane"],
        legalName: site.name,
        url: origin,
        image,
        logo: image,
        description: seo.description,
        slogan: site.tagline,
        keywords: seo.keywords.join(", "),
        award: [...recognitions],
        priceRange: `$${site.rates.followUp}–$${site.rates.evaluation}`,
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, Superbill, sliding scale",
        medicalSpecialty: "Psychiatric",
        knowsAbout: [
          "Psychiatric care",
          "Pharmacogenomics",
          "Medication management",
          "Psychiatric-mental health nurse practitioner care",
          "Telehealth psychiatry in Washington",
          ...conditions.map((item) => item.title),
        ],
        availableService: offerings.map((item) => ({
          "@type": "MedicalTherapy",
          name: item.title,
          url: `${origin}/services/${item.slug}`,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Psychiatric care in Spokane, Washington",
          itemListElement: offerings.map((item, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "MedicalTherapy",
              name: item.title,
              url: `${origin}/services/${item.slug}`,
            },
          })),
        },
        ...(phoneLive ? { telephone: site.placeholders.phone } : {}),
        email: site.placeholders.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Spokane",
          addressRegion: "WA",
          addressCountry: "US",
        },
        areaServed: [
          ...site.serviceArea.map((city) => ({ "@type": "City", name: city })),
          { "@type": "State", name: "Washington" },
          { "@type": "AdministrativeArea", name: "Inland Northwest" },
        ],
        founder: { "@id": `${origin}/#provider` },
        employee: { "@id": `${origin}/#provider` },
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        "@type": "Person",
        "@id": `${origin}/#provider`,
        name: site.provider.name,
        honorificSuffix: site.provider.credentials,
        jobTitle: "Psychiatric-Mental Health Nurse Practitioner",
        description:
          "Mitchell Corbet, MSN, ARNP, PMHNP-BC, provides psychiatric care in Spokane, Washington, including pharmacogenomics, medication management, and sixty-minute visits. Telehealth across Washington.",
        award: [...recognitions],
        worksFor: { "@id": `${origin}/#practice` },
        url: `${origin}/about`,
        image,
        homeLocation: {
          "@type": "Place",
          name: "Spokane, Washington",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Spokane",
            addressRegion: "WA",
            addressCountry: "US",
          },
        },
        medicalSpecialty: "Psychiatric",
        knowsAbout: [
          "Pharmacogenomics",
          "Functional medicine",
          "Psychiatric medication management",
          "Trauma-informed psychiatric care",
        ],
        knowsLanguage: ["English", "Spanish", "Portuguese", "French"],
        ...(site.provider.npi
          ? { identifier: { "@type": "PropertyValue", propertyID: "NPI", value: site.provider.npi } }
          : {}),
        availableService: offerings.map((item) => ({
          "@type": "MedicalTherapy",
          name: item.title,
          url: `${origin}/services/${item.slug}`,
        })),
      },
      ...conditions.map((item) => ({
        "@type": "MedicalCondition",
        name: item.title,
        url: `${origin}/conditions/${item.slug}`,
      })),
    ],
  };
}

export function webpageSchema({
  title,
  description,
  path,
  type = "MedicalWebPage",
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
}) {
  const origin = site.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description,
    url: `${origin}${path}`,
    isPartOf: { "@id": `${origin}/#website` },
    about: { "@id": `${origin}/#practice` },
    lastReviewed: new Date().toISOString().slice(0, 10),
    reviewedBy: {
      "@type": "Person",
      name: site.provider.reviewedBy,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2"],
    },
  };
}

export function faqSchema(faq: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function howToSchema() {
  const origin = site.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Begin as a new patient at Northform",
    url: `${origin}/start`,
    step: [
      { "@type": "HowToStep", position: 1, name: "Optional fit call", text: "A 10–15 minute fit call is free if you want to hear the voice first." },
      { "@type": "HowToStep", position: 2, name: "Complete the intake", text: "Submit the secure intake form." },
      { "@type": "HowToStep", position: 3, name: "First visit", text: "The evaluation is 75–90 minutes. If it is a fit, scheduling follows." },
    ],
  };
}
