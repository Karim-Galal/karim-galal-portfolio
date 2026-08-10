function SkillCard({ capability }) {
  return (
    <article className="relative pb-10 last:pb-0">
      <span className="absolute left-[-1.58rem] top-2.5 size-2.5 rounded-full border-2 border-primary bg-background sm:left-[-2.05rem]" />

      <div className="flex gap-2 sm:flex-row sm:items-start sm:gap-5">
        <span className="shrink-0  pt-1.75 font-mono text-xs text-foreground-subtle">
          {capability.number}
        </span>

        <div>
          <h3 className="text-lg text-start font-semibold text-foreground">
            {capability.title}
          </h3>

          <div className="mt-2 flex max-w-3xl flex-wrap gap-x-3 gap-y-1 text-sm leading-6 text-foreground-muted">
            {capability.skills.map((skill, index) => (
              <span key={skill}>
                {skill}
                {index < capability.skills.length - 1 && (
                  <span className="ml-3 text-foreground-subtle">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default SkillCard;