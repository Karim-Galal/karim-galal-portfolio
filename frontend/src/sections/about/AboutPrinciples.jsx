import { Code2, Layers3, Target, Wrench } from "lucide-react";

import SectionSubtitle from "@/shared/components/section/SectionSubtitle";
import SectionLabel from "@/shared/components/section/SectionLabel";

const principles = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Readable code first. Clever code only when it actually helps.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Keep responsibilities clear and avoid unnecessary complexity.",
  },
  {
    icon: Layers3,
    title: "Structure",
    description: "Build systems that are easy to understand, maintain, and extend.",
  },
  {
    icon: Wrench,
    title: "Practical",
    description: "Choose solutions that solve the real problem, not the imaginary one.",
  },
];

function AboutPrinciples() {
  return (
    <div>
      <div className="mb-8">
        <SectionLabel>
          principles
        </SectionLabel>
        
        <SectionSubtitle> 
          How I work
        </SectionSubtitle>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="group rounded-xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-primary/40"
          >
            <Icon
              size={22}
              strokeWidth={1.8}
              className="text-primary"
              aria-hidden="true"
            />

            <h4 className="mt-5 text-lg font-semibold text-foreground">
              {title}
            </h4>

            <p className="mt-2 text-sm leading-6 text-foreground-muted">
              {description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default AboutPrinciples;