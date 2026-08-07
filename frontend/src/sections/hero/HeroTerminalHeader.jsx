import { motion } from "motion/react";

function HeroTerminalHeader() {
  return (
    <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-5 py-3">
      {/* Window Controls */}
      <div className="flex items-center gap-2">
        {[1, 2, 3].map((item) => (
          <motion.span
            key={item}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.15 }}
            className="h-2.5 w-2.5 rounded-full bg-border"
          />
        ))}
      </div>

      {/* Terminal Title */}
      <span className="select-none text-xs font-medium tracking-wide text-muted-foreground">
        portfolio-terminal
      </span>

      {/* Current Directory */}
      <span className="select-none font-mono text-xs text-muted-foreground">
        ~/portfolio
      </span>
    </div>
  );
}

export default HeroTerminalHeader;