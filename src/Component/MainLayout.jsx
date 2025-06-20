import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundAnimation from "./BackgroundAnimation";


const MainLayout = () => {
  return (
    <div className="relative">
      <BackgroundAnimation />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
