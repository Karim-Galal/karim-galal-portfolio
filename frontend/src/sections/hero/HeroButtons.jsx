function HeroButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto ">
      <a
        href="#projects"
        className="
          inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-primary/90
        "
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground 
          transition-colors hover:bg-surface-hover"
      >
        Contact Me
      </a>
    </div>
  );
}

export default HeroButtons;