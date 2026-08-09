function ProjectImage({ src, alt }) {
  return (
    <div className="aspect-video overflow-hidden border-b border-border bg-surface-elevated">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="flex h-full items-center justify-center font-mono text-xs text-foreground-subtle">
          No preview available
        </div>
      )}
    </div>
  );
}

export default ProjectImage;