"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const options = [
  { value: "/start", label: "Become a new patient" },
  { value: "/services", label: "See services and fees" },
  { value: "/conditions", label: "Read about conditions we treat" },
  { value: "/contact", label: "Contact the practice" },
];

export function IntentSelect() {
  const router = useRouter();
  const [href, setHref] = useState(options[0].value);

  return (
    <form
      className="mt-8"
      onSubmit={(event) => {
        event.preventDefault();
        router.push(href);
      }}
    >
      <p className="text-[0.82rem] font-medium text-fg">How can we help you today?</p>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="sr-only" htmlFor="intent-select">
          I would like to
        </label>
        <select
          id="intent-select"
          value={href}
          onChange={(event) => setHref(event.target.value)}
          className="h-12 w-full min-w-0 flex-1 border border-fg/25 bg-ground/80 px-4 text-[0.95rem] text-fg outline-none focus-visible:border-fg"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-ground text-fg">
              I would like to {option.label.toLowerCase()}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="h-12 shrink-0 bg-fg px-8 text-[0.8rem] tracking-[0.08em] text-ground hover:bg-fg/85"
        >
          Go
        </button>
      </div>
    </form>
  );
}
