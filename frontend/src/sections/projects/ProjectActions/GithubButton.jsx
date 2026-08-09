import { FaGithub } from "react-icons/fa";

function GithubButton({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border px-4 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary/40 hover:text-primary"
    >
      <FaGithub className="text-base" />
      GitHub
    </a>
  );
}

export default GithubButton;