import HeroButtons from "./HeroButtons";

function HeroContent() {
  return (
    <div className="mx-auto max-w-2xl text-center lg:text-left">
      <p className="mb-4 text-sm font-medium tracking-wide text-foreground-muted sm:text-base">
        Hi, I'm
      </p>

      <h1 className="text-4xl text-primary font-bold tracking-tight sm:text-5xl lg:text-6xl">
        <span >
          Karim{" "}
        </span>

        <span
          // className="
          //   text-transparent
          //   [-webkit-text-stroke:1px_var(--color-foreground)]
          //   sm:[-webkit-text-stroke:1.5px_var(--color-foreground)]
          // "
        >
          Galal
        </span>
      </h1>

      <h2 className="mt-4 text-2xl font-semibold leading-tight text-foreground-muted sm:text-3xl">
        Full Stack Laravel & React Developer
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-foreground-muted sm:text-lg lg:mx-0">
        I build modern, scalable web applications with
        Laravel, React, and clean, maintainable architecture.
      </p>

      <div className="mt-8 flex justify-center lg:justify-start ">
        <HeroButtons />
      </div>
    </div>
  );
}

export default HeroContent;