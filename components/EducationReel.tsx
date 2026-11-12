"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/lib/i18n/locale-provider";

const schoolKeys = ["osu", "miami", "gonzaga"] as const;

export function EducationReel() {
  const { t } = useLocale();
  const schools = schoolKeys.map((key) => t.about.schools[key]);

  return (
    <section className="bg-panel">
      <Container className="py-20 lg:py-28">
        <ol className="relative grid list-none gap-12 sm:grid-cols-3 sm:gap-8">
          <span aria-hidden className="absolute left-0 right-0 top-[0.22rem] hidden h-px bg-fg/20 sm:block" />
          {schools.map((school, index) => (
            <Reveal as="li" key={school.place} delay={index * 120} className="relative">
              <span aria-hidden className="relative block h-2 w-2 bg-fg" />
              <p className="mt-8 font-serif text-[clamp(1.8rem,3vw,2.6rem)] italic leading-none tracking-[-0.03em]">
                {school.place}
              </p>
              <p className="mt-4 text-fg/70">{school.note}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
