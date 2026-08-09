import ProjectDetailsButton from "./ProjectActions/ProjectDetailsButton";
import LiveDemoButton from "./ProjectActions/LiveDemoButton";
import GithubButton from "./ProjectActions/GithubButton";

function ProjectActions({ project }) {
  return (
    <div className="flex min-h-10 flex-wrap gap-2">
      <ProjectDetailsButton project={project} />

      {project.liveDemo && (
        <LiveDemoButton href={project.liveDemo} />
      )}

      {project.github && (
        <GithubButton href={project.github} />
      )}
    </div>
  );
}

export default ProjectActions;