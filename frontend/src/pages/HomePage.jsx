import Hero from "@/sections/hero";
import About from "@/sections/about";
import Skills from "@/sections/skills";
import Projects from "@/sections/projects";

function HomePage() {
  return (
    <div className="pb-20 text-center">
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default HomePage;