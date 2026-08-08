import { motion } from "motion/react";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroTerminal from "./HeroTerminal";

function Hero() {
  return (
    <section  id="home" className="relative overflow-hidden">
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
          py-12
          sm:px-6
          lg:flex-row
          lg:items-center
          lg:gap-16
          lg:px-8
          lg:py-16
        "
      >
        {/* Hero content */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mx-auto w-full lg:mx-0 lg:flex-1"
        >
          <HeroContent />
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="w-full lg:flex-1"
        >
          <HeroTerminal />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;