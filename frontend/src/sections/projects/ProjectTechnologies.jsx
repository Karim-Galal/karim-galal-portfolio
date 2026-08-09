function ProjectTechnologies({ technologies }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground-muted"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}

export default ProjectTechnologies;