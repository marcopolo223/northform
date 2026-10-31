import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "UI directions",
  robots: { index: false, follow: false },
};

const slots = [
  { id: "A", href: "/preview/a", status: "Clinical split hero", note: "Brightside layout over forest · pine, not parchment fields" },
  { id: "B", href: "/preview/b", status: "Dark editorial home", note: "August layout · pine, mist, real facts — no fake stats or payer logos" },
  { id: "C", href: "/preview/c", status: "Glass stage · 3D brain", note: "VitalCare composition · Northform pine, rotating brain, no fake stats" },
];

export default function PreviewIndexPage() {
  return (
    <Container className="py-32">
      <p className="text-[0.7rem] uppercase tracking-[0.22em] text-moss">Internal</p>
      <h1 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] tracking-[-0.03em] text-ink">
        Three UI/UX directions
      </h1>
      <p className="mt-5 max-w-xl leading-relaxed text-muted">
        Screenshot these for Mitch. The live home now merges all three: forest split, editorial proof, and the brain on the side.
      </p>
      <ul className="mt-12 grid gap-4 sm:grid-cols-3">
        {slots.map((slot) => (
          <li key={slot.id} className="border border-stone bg-paper px-6 py-8">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-moss">Direction {slot.id}</p>
            <p className="mt-3 font-serif text-2xl text-ink">{slot.status}</p>
            <p className="mt-2 text-sm text-muted">{slot.note}</p>
            <Link href={slot.href} className="mt-5 inline-flex text-sm text-ink underline-offset-4 hover:underline">
              Open {slot.href}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
