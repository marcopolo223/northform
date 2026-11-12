"use client";

import dynamic from "next/dynamic";
import { Component, useSyncExternalStore, type ReactNode } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const BrainCanvas = dynamic(() => import("@/components/BrainCanvas"), {
  ssr: false,
  loading: () => <BrainFallback />,
});

function BrainFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center" aria-hidden>
      <svg viewBox="0 0 80 80" className="h-14 w-14 text-parchment/40" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M28 52c-8-2-14-10-14-20 0-12 10-22 26-22 14 0 24 8 26 20 6 2 10 8 10 15 0 8-6 14-14 16-2 8-10 13-20 13-12 0-20-7-22-16-4-1-8-3-10-6" />
        <path d="M32 22c4 6 4 14 0 20M42 18c5 8 5 18 0 26M52 24c4 6 4 14 1 20M30 58c8-2 18-2 26 1" />
      </svg>
    </div>
  );
}

class BrainBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) return <BrainFallback />;
    return this.props.children;
  }
}

let webglSupport: boolean | undefined;

function detectWebgl() {
  if (webglSupport === undefined) {
    try {
      const canvas = document.createElement("canvas");
      webglSupport = Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
    } catch {
      webglSupport = false;
    }
  }
  return webglSupport;
}

const noopSubscribe = () => () => {};

export function BrainSlot() {
  const webgl = useSyncExternalStore(noopSubscribe, detectWebgl, () => null);
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="h-full w-full cursor-grab touch-none active:cursor-grabbing"
      role="img"
      aria-label="Three-dimensional model of a brain. Drag to turn it."
    >
      {webgl === false ? (
        <BrainFallback />
      ) : (
        <BrainBoundary>
          <BrainCanvas reducedMotion={reducedMotion} />
        </BrainBoundary>
      )}
    </div>
  );
}
