import Hero from "@/sections/hero";
import About from "@/sections/about";
import Skills from "@/sections/skills";

function HomePage() {
  return (
    <div className="pb-20 text-center">
      <Hero />
      <About/>
      <Skills/>
    </div>
  );
}

export default HomePage;