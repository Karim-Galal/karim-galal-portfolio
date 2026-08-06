import { NavLink } from "react-router-dom";

import { navigation } from "@/data/navigation";

function NavbarLinks() {
  return (
    <ul className="hidden items-center gap-8 md:flex">
      {navigation.map((item) => (
        <li key={item.id}>
          <NavLink to={item.href}>
            {({ isActive }) => (
              <span
                className={`group relative inline-flex py-2 text-sm font-medium transition-colors duration-200 ${
                  // isActive
                  //   ? "text-primary"
                  "text-foreground hover:text-primary"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                    // isActive ? "w-full" :
                    "w-0 group-hover:w-full"
                  }`}
                />
              </span>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default NavbarLinks;