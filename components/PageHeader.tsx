import { Container } from "@/components/Container";
import { FrameImage } from "@/components/FrameImage";
import { cn } from "@/lib/cn";

export function PageHeader({
  eyebrow,
  title,
  lede,
  image,
  imageAlt = "",
  size = "page",
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  image?: string;
  imageAlt?: string;
  size?: "home" | "page";
  children?: React.ReactNode;
}) {
  return (
    <section data-site-hero={image ? true : undefined} className="relative">
      {image ? (
        <div
          className={cn(
            "relative overflow-hidden",
            size === "home" ? "h-[78svh] min-h-[560px]" : "h-[56svh] min-h-[400px] lg:h-[62svh]",
          )}
        >
          <FrameImage
            src={image}
            alt={imageAlt}
            className="h-full w-full"
            priority
            scrim
            share
            parallax
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-pine-deep/80 via-pine-deep/40 to-transparent"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/20 to-pine-deep/35" aria-hidden />
          <Container className="absolute inset-x-0 bottom-0 z-10 pb-10 pt-28 sm:pb-12">
            <div className="page-header-copy max-w-[40rem] text-parchment">
              {eyebrow ? (
                <p className="type-kicker text-parchment/80">{eyebrow}</p>
              ) : null}
              <h1 className={cn("type-display text-parchment", eyebrow && "mt-4")}>{title}</h1>
              {lede ? <p className="type-lede mt-5 max-w-md text-parchment/85">{lede}</p> : null}
              {children}
            </div>
          </Container>
        </div>
      ) : (
        <Container className="pt-[calc(var(--chrome-h,7.5rem)+2.5rem)] pb-10">
          <div className="page-header-copy max-w-[40rem]">
            {eyebrow ? (
              <p className="type-kicker text-parchment/80">{eyebrow}</p>
            ) : null}
            <h1 className={cn("type-display text-parchment", eyebrow && "mt-4")}>{title}</h1>
            {lede ? <p className="type-lede mt-5 max-w-md text-parchment/85">{lede}</p> : null}
            {children}
          </div>
        </Container>
      )}
    </section>
  );
}
