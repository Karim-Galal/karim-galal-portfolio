import { HiBars3, HiXMark } from "react-icons/hi2";
import ThemeSwitcher from "@/shared/components/ui/ThemeSwitcher";

function NavbarActions({ isOpen, onToggle }) {
  return (
    <div className="flex items-center gap-2">
      <ThemeSwitcher />

      {/* Navigation toggle button */}
      <button
        type="button"
        onClick={onToggle}
        aria-label="Toggle navigation"
        // className="relative flex size-10 items-center justify-center rounded-lg border border-border bg-surface transition-all hover:border-primary hover:bg-surface-hover md:hidden"
        className={`relative flex size-10 items-center justify-center rounded-lg border border-border bg-surface transition-all hover:border-primary hover:bg-surface-hover md:hidden${
          isOpen ? "border border-primary bg-surface-hover" : ""
        }`}
      >
        <HiBars3
          className={`absolute text-xl transition-all duration-300 ${
            isOpen
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />

        <HiXMark
          className={`absolute text-xl transition-all duration-300 ${
            isOpen
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </button>
    </div>
  );
}

export default NavbarActions;