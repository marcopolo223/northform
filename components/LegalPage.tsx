import { Container } from "@/components/Container";
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
      <PageHeader eyebrow={eyebrow} title={title} lede={lede} image="/images/spokane-bowl.jpg" imageAlt="Bowl and Pitcher basalt formations on the Spokane River" />
      <Container className="max-w-3xl space-y-5 py-10 leading-relaxed text-parchment/85 sm:py-12">
        {children}
      </Container>
    </>
  );
}
