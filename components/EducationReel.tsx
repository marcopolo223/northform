"use client";

import { useLocale } from "@/lib/i18n/locale-provider";

const schoolKeys = ["osu", "miami", "gonzaga"] as const;

export function EducationReel() {
  const { t } = useLocale();
  const schools = schoolKeys.map((key) => t.about.schools[key]);
  const reel = [...schools, ...schools];

  return (
    <div className="edu-reel bg-pine-deep text-parchment">
      <div className="edu-reel-static grid sm:grid-cols-3">
        {schools.map((school) => (
          <div
            key={school.place}
            className="border-t border-white/10 px-5 py-8 sm:border-t-0 sm:border-l sm:border-white/10 sm:px-8 sm:first:border-l-0"
          >
            <p className="font-serif text-2xl italic">{school.place}</p>
            <p className="mt-2 text-sm text-parchment/80">{school.note}</p>
          </div>
        ))}
      </div>

      <div className="edu-reel-motion" aria-hidden>
        <div className="edu-reel-track">
          {reel.map((school, index) => (
            <div key={`${school.place}-${index}`} className="edu-reel-card">
              <p className="font-serif text-[1.85rem] italic leading-none sm:text-[2.15rem]">
                {school.place}
              </p>
              <p className="mt-3 text-sm tracking-wide text-parchment/75">{school.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
