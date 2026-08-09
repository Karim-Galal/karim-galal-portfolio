function ProjectFeatures({ features }) {
  const visibleFeatures = features.slice(0, 4);

  return (
    <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
      {visibleFeatures.map((feature) => (
        <span
          key={feature}
          className="text-xs text-foreground-subtle"
        >
          {feature}
        </span>
      ))}
    </div>
  );
}

export default ProjectFeatures;