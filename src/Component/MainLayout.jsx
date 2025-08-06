import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";



const MainLayout = () => {
  const location = useLocation()

  const noHeaderFooter = location.pathname.includes('login') ||
    location.pathname.includes('register')||
      location.pathname.includes('resume');
  return (
    <div className="relative">
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
