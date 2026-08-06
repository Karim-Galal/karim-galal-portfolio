import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AnimatePresence, motion } from "motion/react";

import {
  LOGO_STATES,
  LOGO_STEP_DURATION,
} from "@/data/logo";

function NavbarLogo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= LOGO_STATES.length - 1) return;

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, LOGO_STEP_DURATION);

    return () => clearTimeout(timer);
  }, [index]);

  const logo = LOGO_STATES[index];

  return (
    <Link
      to="/"
      className="flex items-center font-mono text-xl font-bold tracking-tight select-none"
    >
      {/* Prefix */}
      <span className="flex w-4 justify-end text-primary">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={logo.id + "-prefix"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
          >
            {logo.prefix}
          </motion.span>
        </AnimatePresence>
      </span>

      {/* KG */}
      <span className="mx-0.5 text-foreground">
        KG
      </span>

      {/* Suffix */}
      <span className="flex w-4 text-primary">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={logo.id + "-suffix"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className={logo.blinking ? "animate-cursor" : ""}
          >
            {logo.suffix}
          </motion.span>
        </AnimatePresence>
      </span>
    </Link>
  );
}

export default NavbarLogo;