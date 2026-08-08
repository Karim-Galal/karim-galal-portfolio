import SectionHeading from "@/shared/components/section/SectionHeading";
import AboutIntro from "./AboutIntro";
import AboutPrinciples from "./AboutPrinciples";
// import AboutArchitecture from "./AboutArchitecture";

function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>ABOUT ME</SectionHeading>

        <div className="space-y-10">
          <AboutIntro />
          <AboutPrinciples />
          {/* <AboutArchitecture /> */}
        </div>
      </div>
    </section>
  );
}

export default About;