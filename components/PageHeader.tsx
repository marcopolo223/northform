import { Container } from "@/components/Container";
import { FrameImage } from "@/components/FrameImage";
import { Reveal } from "@/components/Reveal";
import { SplitWords } from "@/components/SplitWords";
import { cn } from "@/lib/cn";

export function PageHeader({
  eyebrow,
  title,
  lede,
  image,
  imageAlt = "",
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
    <section className="on-light bg-ground">
      <Container className="pb-8 pt-[calc(var(--chrome-h,7rem)+1.75rem)] sm:pb-12 sm:pt-[calc(var(--chrome-h,7rem)+3.25rem)] lg:pb-16 lg:pt-[calc(var(--chrome-h,7rem)+5rem)]">
        <div className="grid gap-5 sm:gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            {eyebrow ? <p className="type-kicker eyebrow page-header-copy text-accent">{eyebrow}</p> : null}
            <h1 className={cn("type-page max-w-[14ch]", eyebrow && "mt-4 sm:mt-6")}>
              <SplitWords text={title} />
            </h1>
          </div>
          {lede || children ? (
            <div className="page-header-copy lg:col-span-4 lg:pb-1">
              {lede ? <p className="type-voice max-w-md text-fg/78">{lede}</p> : null}
              {children}
            </div>
          ) : null}
        </div>
      </Container>
      {image ? (
        <Container>
          <Reveal variant="media" className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/8]">
            <FrameImage
              src={image}
              alt={imageAlt}
              className="absolute inset-0"
              priority
              share
              parallax
              sizes="(min-width: 1400px) 1340px, 100vw"
            />
          </Reveal>
        </Container>
      ) : (
        <Container>
          <div className="h-px bg-fg/15" />
        </Container>
      )}
    </section>
  );
}
