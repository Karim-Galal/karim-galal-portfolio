import SkillCard from "./SkillCard";
import TechMarquee from "./TechMarquee";

import SectionHeading from "@/shared/components/section/SectionHeading";
import SectionSubtitle from "@/shared/components/section/SectionSubtitle";
import SectionLabel from "@/shared/components/section/SectionLabel";

const capabilities = [
  {
    number: "01",
    title: "Laravel Backend",
    skills: [
      "APIs",
      "Authentication",
      "Authorization",
      "Database Design",
      "Business Logic",
      "Validation",
      "CRUD",
    ],
  },
  {
    number: "02",
    title: "React Frontend",
    skills: [
      "Responsive UI",
      "Reusable Components",
      "State Management",
      "Forms",
    ],
  },
  {
    number: "03",
    title: "Full-Stack Applications",
    skills: [
      "Laravel + React",
      "CRUD Systems",
      "Authentication",
      "Dashboards",
    ],
  },
  {
    number: "04",
    title: "API Integration",
    skills: [
      "REST APIs",
      "JSON",
      "Axios",
      "Frontend ↔ Backend",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-12">
          
        <SectionHeading>SKILLS</SectionHeading>
        
        <SectionLabel>capabilities</SectionLabel>

        <SectionSubtitle>
          What I build
        </SectionSubtitle>
      </div>

      <div className="border-l border-border pl-5 sm:pl-8">
        {capabilities.map((capability) => (
          <SkillCard
            key={capability.number}
            capability={capability}
          />
        ))}
      </div>

      <TechMarquee />
    </section>
  );
}

export default Skills;