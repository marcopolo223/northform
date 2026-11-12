"use client";

import { Children, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "rise",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "rise" | "media" | "rule";
  as?: "div" | "li" | "section" | "figure";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn(
        "reveal",
        variant === "media" && "is-media",
        variant === "rule" && "is-rule",
        visible && "in",
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

export function Stagger({
  children,
  className,
  step = 90,
}: {
  children: React.ReactNode;
  className?: string;
  step?: number;
}) {
  return (
    <div className={className}>
      {Children.map(children, (child, index) => (
        <Reveal delay={index * step}>{child}</Reveal>
      ))}
    </div>
  );
}
