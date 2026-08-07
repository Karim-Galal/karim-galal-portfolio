import Container from "@/shared/components/layout/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroTerminal from "./HeroTerminal";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      <HeroBackground />

      <Container>
        <div className="grid min-h-[calc(100dvh-4rem)] items-center gap-16 py-16 lg:grid-cols-2">
          <HeroContent />

          <HeroTerminal />
        </div>
      </Container>
    </section>
  );
}

export default Hero;