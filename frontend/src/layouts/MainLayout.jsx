import { Outlet } from "react-router-dom";

import Navbar from "@/shared/components/layout/Navbar";
import Footer from "@/shared/components/layout/Footer";

function MainLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />

      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;