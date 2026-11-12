import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "light";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const styles = cn(
    "type-ui btn group inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3.5 text-[0.9rem] transition-[color,border-color] duration-300",
    variant === "ghost"
      ? "border border-fg/35 text-fg hover:border-accent hover:text-ground"
      : "bg-fg text-ground",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      <span aria-hidden className="btn-arrow">
        →
      </span>
    </>
  );

  if (external || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={styles}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {content}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={cn("type-ui link-u is-ruled text-fg/85 hover:text-fg", className)}>
      {children}
    </Link>
  );
}
