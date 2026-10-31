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
    "type-ui btn-sheen group inline-flex items-center justify-center gap-3 px-6 py-3.5 transition-[background-color,border-color,color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px",
    variant === "primary" && "bg-parchment text-pine hover:bg-parchment-deep",
    variant === "ghost" &&
      "border border-parchment/30 text-parchment hover:border-parchment hover:bg-parchment/5",
    variant === "light" && "bg-parchment text-pine hover:bg-parchment-deep",
    className,
  );

  const content = (
    <>
      <span className="relative z-[1]">{children}</span>
      <span
        aria-hidden
        className="relative z-[1] translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
      >
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
