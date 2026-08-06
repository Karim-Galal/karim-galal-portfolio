import { Link } from "react-router-dom";

function NavbarLogo() {
  return (
    <Link
      to="/"
      className="flex-1 text-xl font-bold"
    >
      <span className="text-primary">KG</span>
      <span>_</span>
    </Link>
  );
}

export default NavbarLogo;