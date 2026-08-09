import { FiExternalLink } from "react-icons/fi";

function LiveDemoButton({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
    >
      Live Demo
      <FiExternalLink className="text-sm" />
    </a>
  );
}

export default LiveDemoButton;