// import SectionSubtitle from "@/shared/components/section/SectionSubtitle";
import SectionLabel from "@/shared/components/section/SectionLabel";

function AboutIntro() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
      <div>
        <SectionLabel>
          $ whoami
        </SectionLabel>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          A developer who likes understanding the whole system.
        </h3>
      </div>

      <div className="max-w-2xl mx-auto space-y-5 text-base leading-8 text-foreground-muted sm:text-lg">
        <p>
          I enjoy turning ideas into clear, maintainable systems, from the database and backend logic to the interface people actually use. Working across the stack helps me understand the product as a whole and build features that make sense beyond a single layer.
        </p>

        {/* <p>
          Working across the stack gives me a better perspective on the
          product as a whole, and helps me build features that make sense
          beyond just one layer of the application.
        </p> */}
      </div>
    </div>
  );
}

export default AboutIntro;