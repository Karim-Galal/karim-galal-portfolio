import { motion } from "motion/react";

import HeroTerminalHeader from "./HeroTerminalHeader";
import HeroTerminalBody from "./HeroTerminalBody";

function HeroTerminal() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="overflow-hidden rounded-2xl border border-border bg-surface shadow-lg"
    >
      <HeroTerminalHeader />

      <HeroTerminalBody />
    </motion.div>
  );
}

export default HeroTerminal;