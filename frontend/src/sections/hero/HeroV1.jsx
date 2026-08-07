import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroTerminal from "./HeroTerminal";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackground />

      <div
        className="
          relative mx-auto
          flex min-h-[calc(100vh-4rem)]
          max-w-7xl
          flex-col
          justify-center
          gap-12
          px-4
          py-16
          sm:px-6
          lg:flex-row
          lg:items-center
          lg:gap-16
          lg:px-8
          lg:py-20
          
        "
      >
        <div className="w-full mx-auto lg:flex-1">
          <HeroContent />
        </div>

        <div className="w-full lg:flex-1">
          <HeroTerminal />
        </div>
      </div>
    </section>
  );
}

export default Hero;