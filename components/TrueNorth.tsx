"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FrameImage } from "@/components/FrameImage";
import { QrCode } from "@/components/QrCode";

const lines = [
  "You found north. Breathe here a moment.",
  "Alpine forms stay low, hold heat, and flower anyway.",
  "In for four. Hold. Out for four.",
  "Harsh weather is not a verdict.",
];

export function TrueNorth({ qr }: { qr: string }) {
  const [count, setCount] = useState<number | null>(null);
  const [line] = useState(() => lines[Math.floor(Math.random() * lines.length)]);

  useEffect(() => {
    const already = sessionStorage.getItem("northform-north");
    fetch("/api/north", { method: already ? "GET" : "POST" })
      .then((res) => res.json())
      .then((data: { count: number }) => {
        setCount(data.count);
        sessionStorage.setItem("northform-north", "1");
      })
      .catch(() => setCount(null));

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") window.history.back();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="on-dark bg-pine-deep text-parchment">
      <div data-site-hero className="relative h-[62svh] min-h-[420px]">
        <FrameImage
          src="/images/spokane-river.jpg"
          alt=""
          className="h-full w-full"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="north-breath h-40 w-40 rounded-full border border-parchment/50" />
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <div className="relative z-10 -mt-20 max-w-xl bg-parchment p-8 text-charcoal sm:-mt-28 sm:p-10 lg:p-12">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-moss">True North</p>
          <h1 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] tracking-[-0.03em] text-ink">
            {line}
          </h1>
          <p className="mt-4 font-serif text-[1.12rem] italic leading-relaxed text-muted">
            Not sure where you&apos;re headed? We can help.
          </p>
          {count ? (
            <p className="mt-4 text-sm text-muted">
              You are the {count.toLocaleString()}th person to find north.
            </p>
          ) : null}
          <div className="mt-8">
            <QrCode value={qr} alt={`QR code to ${qr}`} />
          </div>
          <p className="mt-4 text-sm text-muted">
            <Link href="/start" className="text-ink underline underline-offset-4">
              Start here
            </Link>
            . Press Escape to return.
          </p>
        </div>
      </div>
    </section>
  );
}
