import Hero from "@/sections/hero";
import About from "@/sections/about";
import Skills from "@/sections/skills";
import Projects from "@/sections/projects";
import Contact from "@/sections/contact";

function HomePage() {
  return (
    <div className="pb-20 text-center">
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default HomePage;