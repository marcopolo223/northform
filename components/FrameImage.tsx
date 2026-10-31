import Image from "next/image";
import { ViewTransition } from "react";
import { cn } from "@/lib/cn";
import { photoPosition } from "@/lib/photos";

const photoNames: Record<string, string> = {
  "/images/spokane-bowl.jpg": "photo-forest",
  "/images/spokane-river.jpg": "photo-mist",
  "/images/spokane-bridge.jpg": "photo-pines",
};

export function FrameImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "100vw",
  scrim = false,
  share = false,
  drift = false,
  parallax = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  scrim?: boolean;
  share?: boolean;
  drift?: boolean;
  parallax?: boolean;
}) {
  const frame = (
    <div
      className={cn(
        "media-frame relative h-full w-full overflow-hidden bg-pine-deep",
        drift && "is-drift",
        parallax && !drift && "is-parallax",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
        style={photoPosition[src] ? { objectPosition: photoPosition[src] } : undefined}
      />
      {scrim ? (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-pine-deep/60 to-transparent"
          aria-hidden
        />
      ) : null}
    </div>
  );

  const name = share ? photoNames[src] : undefined;
  if (!name) return frame;

  return (
    <ViewTransition name={name} share="photo-share" default="none">
      {frame}
    </ViewTransition>
  );
}
