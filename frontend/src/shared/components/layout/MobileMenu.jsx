import useActiveSection from "@/shared/hooks/useActiveSection";
import { navigation } from "@/data/navigation";

function MobileMenu({ isOpen, onClose }) {
  
  const { activeSection } = useActiveSection();

  return (
    <div
      className={`absolute left-0 right-0 top-full z-50 mt-2 rounded-xl border border-border bg-surface-elevated p-2 shadow-lg transition-all duration-200 md:hidden ${
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 pointer-events-none opacity-0"
      }`}
    >
      <nav>
        <ul className="space-y-1">
          {navigation.map((item) => {
            const sectionId = item.href.startsWith("#")
              ? item.href.slice(1)
              : item.id;

            const isActive = activeSection === sectionId;

            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground-muted hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;