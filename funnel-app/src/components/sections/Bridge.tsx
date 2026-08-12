import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function Bridge() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-lg md:text-xl leading-relaxed text-[var(--color-parchment)]/90">
            BOT Chain is a Layer-1 blockchain project. CaryPact is a protocol built on top of it
            that lets participants tokenize, verify, and trade access to compute power. The next
            two sections explain what each one is, in plain terms, before anything else on this
            page.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
