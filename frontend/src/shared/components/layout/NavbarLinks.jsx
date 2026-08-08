import { useEffect } from "react";
import useActiveSection from "@/shared/hooks/useActiveSection";
import { navigation } from "@/data/navigation";


function NavbarLinks() {
  const {activeSection , setActiveSection} = useActiveSection();

  useEffect(() => {
    const sections = navigation
      .map((item) => {
        const id = item.href.startsWith("#")
          ? item.href.slice(1)
          : item.id;

        return document.getElementById(id);
      })
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <ul className="flex items-center gap-8">
      {navigation.map((item) => {
        const sectionId = item.href.startsWith("#")
          ? item.href.slice(1)
          : item.id;

        const isActive = activeSection === sectionId;

        return (
          <li key={item.id} className="relative">
            <a
              href={item.href}
              className={`group relative flex h-12 items-center text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-foreground"
                  : "text-foreground-muted hover:text-foreground"
              }`}
            >
              {item.label}

              <span
                className={`absolute -bottom-px left-0 h-0.5 w-full rounded-full bg-primary transition-opacity duration-200 ${
                  isActive
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavbarLinks;