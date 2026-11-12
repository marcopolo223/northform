import { ReadingColumn } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

export function LegalPage({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} lede={lede} />
      <ReadingColumn className="space-y-6">{children}</ReadingColumn>
    </>
  );
}
