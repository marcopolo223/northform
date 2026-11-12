import { cn } from "@/lib/cn";

/**
 * Large statement that "inks in" word by word as it crosses the viewport.
 * Pure CSS scroll-driven animation; without support the text simply reads at full strength.
 */
export function ScrollWords({ text, className }: { text: string; className?: string }) {
  const words = (text ?? "").split(" ");
  return (
    <span className={cn("scroll-words", className)}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="scroll-word"
          style={{ "--w": index / Math.max(words.length - 1, 1) } as React.CSSProperties}
        >
          {word}
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}
