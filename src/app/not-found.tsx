import { Section } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { ButterflyMark } from "@/components/ui/ButterflyLogo";

export default function NotFound() {
  return (
    <Section variant="bone" className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <ButterflyMark
          size="lg"
          color="var(--color-bs-mauve)"
          className="mx-auto mb-6"
        />
        <h1
          className="mb-4 text-4xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-bs-aubergine)",
          }}
        >
          Page Not Found
        </h1>
        <p
          className="mb-8 text-lg"
          style={{
            color: "var(--color-bs-charcoal)",
            fontFamily: "var(--font-body)",
          }}
        >
          We couldn&apos;t find what you&apos;re looking for.
        </p>
        <Button href="/" variant="primary" size="md">
          Return Home
        </Button>
      </div>
    </Section>
  );
}
