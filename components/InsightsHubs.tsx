"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { interpolate } from "@/lib/i18n/dictionaries";
import { useLocale } from "@/lib/i18n/locale-provider";
import { photos } from "@/lib/photos";
import { site } from "@/site.config";

function HubHeader({
  title,
  lede,
  image,
  imageAlt,
}: {
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
}) {
  const { t } = useLocale();
  return <PageHeader eyebrow={t.insights.eyebrow} title={title} lede={lede} image={image} imageAlt={imageAlt} />;
}

export function EducationView() {
  const { t } = useLocale();
  const copy = t.insights.education;
  const links = [
    { href: "https://www.nimh.nih.gov/health", label: "NIMH — mental health topics" },
    { href: "https://www.samhsa.gov/mental-health", label: "SAMHSA — mental health" },
    { href: "https://www.ihs.gov/suicideprevention/", label: "988 Suicide & Crisis Lifeline context" },
    { href: "/conditions", label: copy.conditions },
    { href: "/approach", label: copy.approach },
  ];

  return (
    <>
      <HubHeader title={copy.title} lede={copy.lede} image={photos.forest.src} imageAlt={photos.forest.alt} />
      <Container className="max-w-3xl space-y-4 py-10 leading-relaxed text-parchment/80">
        <p>
          {interpolate(copy.body, {
            emergency: site.crisis.emergency,
            line: site.crisis.line,
          })}
        </p>
        <ul className="divide-y divide-parchment/15 border-y border-parchment/15">
          {links.map((item) => (
            <li key={item.href} className="py-4">
              <a className="text-parchment underline-offset-4 hover:underline" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}

export function RecipesView() {
  const { t } = useLocale();
  const copy = t.insights.recipes;

  return (
    <>
      <HubHeader title={copy.title} lede={copy.lede} image={photos.mist.src} imageAlt={photos.mist.alt} />
      <Container className="max-w-3xl py-10">
        {copy.items.map((item) => (
          <article key={item.title} className="border-t border-parchment/15 py-8">
            <h2 className="font-serif text-2xl text-parchment">{item.title}</h2>
            <p className="mt-3 leading-relaxed text-parchment/70">{item.body}</p>
          </article>
        ))}
      </Container>
    </>
  );
}

export function WomenView() {
  const { t } = useLocale();
  const copy = t.insights.women;

  return (
    <>
      <HubHeader title={copy.title} lede={copy.lede} image={photos.pines.src} imageAlt={photos.pines.alt} />
      <Container className="max-w-3xl space-y-5 py-10 leading-relaxed text-parchment/80">
        <p>{copy.body}</p>
        <ul className="divide-y divide-parchment/15 border-y border-parchment/15">
          <li className="py-4">
            <Link className="text-parchment underline-offset-4 hover:underline" href="/services/perinatal">
              {copy.perinatal}
            </Link>
          </li>
          <li className="py-4">
            <Link className="text-parchment underline-offset-4 hover:underline" href="/conditions/depression">
              {copy.depression}
            </Link>
          </li>
          <li className="py-4">
            <a
              className="text-parchment underline-offset-4 hover:underline"
              href="https://www.nimh.nih.gov/health/publications/perinatal-depression"
            >
              NIMH — perinatal depression
            </a>
          </li>
          <li className="py-4">
            <a className="text-parchment underline-offset-4 hover:underline" href="https://www.womenshealth.gov/mental-health">
              Office on Women’s Health — mental health
            </a>
          </li>
        </ul>
      </Container>
    </>
  );
}

export function VideosView() {
  const { t } = useLocale();
  const copy = t.insights.videos;

  return (
    <>
      <HubHeader title={copy.title} lede={copy.lede} image={photos.forest.src} imageAlt={photos.forest.alt} />
      <Container className="max-w-3xl space-y-5 py-10 leading-relaxed text-parchment/80">
        <p>{copy.body}</p>
        <div className="flex aspect-video items-center justify-center border border-parchment/15 bg-pine text-sm text-parchment/60">
          {copy.slot}
        </div>
      </Container>
    </>
  );
}
