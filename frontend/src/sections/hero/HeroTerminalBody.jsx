import { motion } from "motion/react";

import { TERMINAL_PROMPT } from "@/data/terminal";

import useTerminalAnimation from "./hooks/useTerminalAnimation";

function HeroTerminalBody() {
  const {
    history,
    typedCommand,
  } = useTerminalAnimation();

  return (
    <div className="min-h-60 space-y-6 p-6 font-mono">
      {/* Completed commands */}
      {history.map((item) => (
        <div key={item.id}>
          {/* Command */}
          <div className="flex items-center gap-3">
            <span className="font-bold text-primary">
              {TERMINAL_PROMPT}
            </span>

            <span className="font-medium text-foreground">
              {item.command}
            </span>
          </div>

          {/* Output */}
          <motion.div
            initial={{
              opacity: 0,
              y: 6,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="mt-2 ml-5 text-start"
          >
            {Array.isArray(item.output) ? (
              <div className="flex flex-wrap gap-2">
                {item.output.map((tech) => (
                  <motion.span
                    key={tech}
                    initial={{
                      opacity: 0,
                      y: 4,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      rounded-full
                      border
                      border-border
                      bg-surface-elevated
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-primary
                    "
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            ) : (
              <p className="font-medium leading-7 text-primary">
                {item.output}
              </p>
            )}
          </motion.div>
        </div>
      ))}

      {/* Currently typing */}
      <div className="flex items-center gap-3">
        <span className="font-bold text-primary">
          {TERMINAL_PROMPT}
        </span>

        <span className="font-medium text-foreground">
          {typedCommand}
        </span>

        {/* Cursor */}
        <motion.span
          animate={{
            opacity: [1, 0.35, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="inline-block h-5 w-2 bg-primary"
        />
      </div>
    </div>
  );
}

export default HeroTerminalBody;