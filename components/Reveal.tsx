"use client";

import { Children, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "80px 0px" },
    );

    observer.observe(node);
    if (node.getBoundingClientRect().top < window.innerHeight) {
      setVisible(true);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
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
