import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="font-montserrat min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
