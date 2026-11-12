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
      <Container className="py-10 sm:py-20 lg:py-28">
        <ol className="relative grid list-none gap-0 divide-y divide-fg/15 sm:grid-cols-3 sm:gap-8 sm:divide-y-0">
          <span aria-hidden className="absolute left-0 right-0 top-[0.22rem] hidden h-px bg-fg/20 sm:block" />
          {schools.map((school, index) => (
            <Reveal as="li" key={school.place} delay={index * 120} className="relative py-5 first:pt-0 last:pb-0 sm:py-0">
              <span aria-hidden className="relative hidden h-2 w-2 bg-fg sm:block" />
              <p className="font-serif text-[clamp(1.5rem,3vw,2.6rem)] italic sm:mt-8 leading-none tracking-[-0.03em]">
                {school.place}
              </p>
              <p className="mt-1.5 text-[0.95rem] text-fg/70 sm:mt-4 sm:text-base">{school.note}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
