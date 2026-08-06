import { navigation } from "@/data/navigation";

function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`absolute left-0 right-0 top-full z-50 mt-2 rounded-xl border border-border bg-surface-elevated p-2 shadow-lg transition-all duration-200 md:hidden ${
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 opacity-0 pointer-events-none"
      }`}
    >
      <ul className="flex flex-col">
        {navigation.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={onClose}
              className="flex items-center rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-surface-hover hover:text-primary"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileMenu;