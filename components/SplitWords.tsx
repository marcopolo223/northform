import { cn } from "@/lib/cn";

export function SplitWords({
  text,
  className,
  offset = 0,
}: {
  text: string;
  className?: string;
  offset?: number;
}) {
  const words = (text ?? "").split(" ");

  return (
    <span className={cn("words is-live", className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="word">
            <span style={{ "--i": index + offset } as React.CSSProperties}>{word}</span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}
