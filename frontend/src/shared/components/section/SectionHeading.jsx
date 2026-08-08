function SectionHeading({ children }) {
  return (
    <div className="mb-12 flex items-center gap-3">
      <span className="font-mono text-sm font-semibold text-primary sm:text-base">
        &gt;_
      </span>

      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {children}
      </h2>

      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

export default SectionHeading;