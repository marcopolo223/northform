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
  share = false,
  parallax = false,
  position,
  quality,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  share?: boolean;
  parallax?: boolean;
  position?: string;
  quality?: 75 | 92;
}) {
  const frame = (
    <div
      className={cn(
        "media-frame relative h-full w-full overflow-hidden bg-pine-deep",
        parallax && "is-parallax",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={quality}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
        style={
          position || photoPosition[src] ? { objectPosition: position ?? photoPosition[src] } : undefined
        }
      />
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
