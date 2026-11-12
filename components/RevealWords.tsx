"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/** Headline whose words rise through a mask the first time it scrolls into view. */
export function RevealWords({
  text,
  className,
  as: Tag = "span",
  delay = 0,
}: {
  text: string;
  className?: string;
  as?: "span" | "div";
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    // Under reduced motion the CSS never hides words, so the observer is harmless.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const words = (text ?? "").split(" ");

  return (
    <Tag ref={ref as React.Ref<never>} className={cn("words", live ? "is-live" : "is-wait", className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="word">
            <span style={{ "--i": index + delay } as React.CSSProperties}>{word}</span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
