import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

function ProjectDetailsButton({ project }) {
  return (
    <Link
      to={`/project/${project.slug}`}
      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border px-4 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary/40 hover:text-primary"
    >
      View Project
      <FiArrowUpRight className="text-sm transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

export default ProjectDetailsButton;