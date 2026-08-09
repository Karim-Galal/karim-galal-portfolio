import SectionHeading from "@/shared/components/section/SectionHeading";
import SectionSubtitle from "@/shared/components/section/SectionSubtitle";

import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-12">
        <SectionHeading>PROJECTS</SectionHeading>

        <p className="mt-6 font-mono text-sm text-primary">
          $ ls ./projects
        </p>

        <SectionSubtitle>
          A selection of things I've built and the problems they solve.
        </SectionSubtitle>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;