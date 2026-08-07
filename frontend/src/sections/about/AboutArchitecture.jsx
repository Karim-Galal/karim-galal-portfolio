function AboutArchitecture() {
  return (
    <div>
      <div className="mb-8">
        <p className="font-mono text-sm text-primary">
          architecture
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
          How the pieces connect
        </h3>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <div className="rounded-lg border border-border bg-surface-elevated p-5 text-center">
            <p className="font-mono text-sm text-primary">
              backend
            </p>

            <h4 className="mt-2 text-xl font-semibold text-foreground">
              Laravel
            </h4>

            <p className="mt-2 text-sm text-foreground-muted">
              Business logic & API
            </p>
          </div>

          <div className="hidden font-mono text-primary md:block">
            →
          </div>

          <div className="rounded-lg border border-border bg-surface-elevated p-5 text-center">
            <p className="font-mono text-sm text-primary">
              communication
            </p>

            <h4 className="mt-2 text-xl font-semibold text-foreground">
              REST API
            </h4>

            <p className="mt-2 text-sm text-foreground-muted">
              JSON & HTTP
            </p>
          </div>

          <div className="hidden font-mono text-primary md:block">
            →
          </div>

          <div className="rounded-lg border border-border bg-surface-elevated p-5 text-center">
            <p className="font-mono text-sm text-primary">
              frontend
            </p>

            <h4 className="mt-2 text-xl font-semibold text-foreground">
              React
            </h4>

            <p className="mt-2 text-sm text-foreground-muted">
              Interface & experience
            </p>
          </div>
        </div>

        <div className="mt-6 text-center font-mono text-xs text-foreground-subtle">
          request → controller → response → interface
        </div>
      </div>
    </div>
  );
}

export default AboutArchitecture;