import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1400px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function ReadingColumn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Container className="grid py-14 lg:grid-cols-12 lg:py-24">
      <div className={cn("text-[1.08rem] leading-[1.75] text-fg/80 lg:col-span-7 lg:col-start-5", className)}>
        {children}
      </div>
    </Container>
  );
}
