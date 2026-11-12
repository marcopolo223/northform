"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { site } from "@/site.config";

/** Mitch's portrait. Studio grey is kept; the frame is paper-cut, not rounded. */
export function PortraitPlaceholder({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <figure className={cn("relative aspect-[3/4] w-full overflow-hidden bg-[#4a4a4b]", className)}>
      <Image
        src="/images/mitch-corbet.jpg"
        alt={`${site.provider.name}, ${site.provider.credentials}`}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover"
        style={{ objectPosition: "50% 22%" }}
      />
    </figure>
  );
}
