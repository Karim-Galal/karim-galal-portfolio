import { motion } from "motion/react";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroTerminal from "./HeroTerminal";



function Hero() {
  return (
    <section  id="home" className="relative overflow-hidden">
      <HeroBackground />

      <div
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-4 py-20 sm:px-6 lg:flex-row lg:gap-24 lg:px-8 lg:py-32"
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