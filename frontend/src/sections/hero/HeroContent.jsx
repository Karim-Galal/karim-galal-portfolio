import HeroButtons from "./HeroButtons";

function HeroContent() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-5">
        <p>
          Hi, I'm
        </p>

        <h1>
          Karim Galal
        </h1>

        <h2>
          Full Stack Laravel & React Developer
        </h2>

        <p>
          I build fast, scalable, and user-focused web applications with modern technologies.
        </p>
      </div>

      <HeroButtons />
    </div>
  );
}

export default HeroContent;