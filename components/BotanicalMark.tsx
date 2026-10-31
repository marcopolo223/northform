"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";

export function BotanicalMark({ className }: { className?: string }) {
  const router = useRouter();
  const [clicks, setClicks] = useState(0);

  return (
    <button
      type="button"
      className={cn(
        "inline-flex text-moss-soft/40 transition-colors hover:text-moss",
        className,
      )}
      aria-label="A plant that thrives under stress"
      onClick={() => {
        const next = clicks + 1;
        setClicks(next);
        if (next >= 3) {
          router.push("/garden");
          setClicks(0);
        }
      }}
    >
      <svg
        viewBox="0 0 20 28"
        className="h-7 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        aria-hidden="true"
      >
        <path d="M10 26 V11" />
        <path d="M10 22 C7 20 4 18 4 14 C7 15.5 9 14 10 12" />
        <path d="M10 22 C13 20 16 18 16 14 C13 15.5 11 14 10 12" />
        <path d="M10 16 C8 13 6 9 8 6 C9.5 8 10 10 10 12" />
        <path d="M10 16 C12 13 14 9 12 6 C10.5 8 10 10 10 12" />
        <circle cx="10" cy="5.2" r="1.4" />
      </svg>
    </button>
  );
}
