import type { ConditionSymbolId } from "@/content/conditions";
import { cn } from "@/lib/cn";

export function ConditionMark({
  symbol,
  className,
}: {
  symbol: ConditionSymbolId;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    className: cn("h-8 w-8 text-moss", className),
    "aria-hidden": true,
  } as const;
  if (symbol === "anxiety") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="6.5" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  }

  if (symbol === "adhd") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5v2M12 17v2M5 12H7M17 12h2" />
        <circle cx="12" cy="12" r="8.5" />
      </svg>
    );
  }

  if (symbol === "bipolar") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="1.4">
        <path d="M7 16c2.2-6 7.8-6 10 0" />
        <path d="M7 8c2.2 6 7.8 6 10 0" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  }

  if (symbol === "ptsd") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="1.4">
        <path d="M12 3 5 6.5v5.2c0 4.4 3 7.3 7 8.8 4-1.5 7-4.4 7-8.8V6.5L12 3Z" />
        <path d="M12 9v4M12 16h.01" />
      </svg>
    );
  }

  if (symbol === "oud") {
    return (
      <svg {...common} stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M7 12h10" />
      </svg>
    );
  }

  return (
    <svg {...common} stroke="currentColor" strokeWidth="1.4">
      <path d="M5 16c2-6 5-9 7-10 2 1 5 4 7 10" />
      <path d="M8 16h8" />
    </svg>
  );
}
