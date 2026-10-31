"use client";

import { cn } from "@/lib/cn";
import { FrameImage } from "@/components/FrameImage";
import { useLocale } from "@/lib/i18n/locale-provider";

export function PortraitPlaceholder({ className }: { className?: string }) {
  const { t } = useLocale();

  return (
    <figure className={cn("relative aspect-[4/5] w-full overflow-hidden", className)}>
      <FrameImage
        src="/images/spokane-bridge.jpg"
        alt=""
        className="h-full w-full"
        sizes="(min-width: 1024px) 45vw, 100vw"
        drift
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine-deep/90 to-transparent px-5 py-5 text-parchment">
        <p className="font-serif text-xl">{t.about.portrait}</p>
        <p className="mt-1 text-sm text-parchment/75">{t.about.portraitNote}</p>
      </figcaption>
    </figure>
  );
}
