import ProjectImage from "./ProjectImage";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectFeatures from "./ProjectFeatures";
import ProjectActions from "./ProjectActions";

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-200 hover:border-border-strong">
      <ProjectImage
        src={project.image}
        alt={project.title}
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
          <span className="block text-left font-mono text-xs uppercase tracking-wider text-primary">
              {project.category}
            </span>

            <h3 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
              {project.title}
            </h3>
          </div>

          {project.featured && (
            <span className="shrink-0 rounded-full border border-primary/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary">
              Featured
            </span>
          )}
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-foreground-muted">
          {project.shortDescription}
        </p>

        <ProjectTechnologies technologies={project.technologies} />

        <ProjectFeatures features={project.features} />

        <div className="mt-auto pt-6">
          <ProjectActions project={project} />
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;