import { useRef, useState, useEffect } from "react";

import Container from "./Container";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarActions from "./NavbarActions";
import MobileMenu from "./MobileMenu";

import useClickOutside from "@/shared/hooks/useClickOutside";
import useEscapeKey from "@/shared/hooks/useEscapeKey";

import {NAVBAR_SCROLL_OFFSET} from "@/app/config/ui";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
  function handleScroll() {
    setIsScrolled(window.scrollY > NAVBAR_SCROLL_OFFSET);
  }

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  const menuRef = useRef(null);

  useClickOutside(menuRef, isOpen, () => {
    setIsOpen(false);
  });

  useEscapeKey(isOpen, () => {
    setIsOpen(false);
  });

  return (
    // <header className="sticky top-0 z-50 border-b border-border bg-background">
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/80 bg-background/80 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-background"
      }`}
    >
      <Container>
        <nav className="relative flex h-16 items-center">
          <div className="flex flex-1">
            <NavbarLogo />
          </div>

          <div className="hidden flex-1 justify-center md:flex">
            <NavbarLinks />
          </div>

          <div
            className="flex flex-1 justify-end"
          >
            <NavbarActions
              isOpen={isOpen}
              onToggle={() => setIsOpen((prev) => !prev)}
            />
          </div>
          <div ref={menuRef}>
            <MobileMenu
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            />
          </div>

        </nav>
      </Container>
    </header>
  );
}

export default Navbar;