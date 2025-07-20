// Dashboard.jsx
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaRobot,
  FaBars,
} from "react-icons/fa";
import logo from "../../assets/images/resume.icon.png"; // Your SkillSync logo
//added the mobile hambarger menu 
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between bg-black text-white p-4 shadow">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-orange-500">SkillSync</span>
        </div>
        <button
          className="text-white text-2xl"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`w-64 bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a] text-white flex flex-col shadow-lg transform transition-transform duration-300 z-40 md:translate-x-0 fixed md:relative ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-6">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-orange-500">SkillSync</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col text-2xl font-semibold gap-1 mt-4">
          <SidebarLink
            to="/dashboard/profile"
            icon={<FaUser />}
            text="Profile"
            closeSidebar={() => setIsSidebarOpen(false)}
          />
          <SidebarLink
            to="/dashboard/resume"
            icon={<FaFileAlt />}
            text="Resume Builder"
            closeSidebar={() => setIsSidebarOpen(false)}
          />
          <SidebarLink
            to="/dashboard/ai-coach"
            icon={<FaRobot />}
            text="AI Assistant"
            closeSidebar={() => setIsSidebarOpen(false)}
          />
          <SidebarLink
            to="/dashboard/userAdmin"
            icon={<FaUser />}
            text="User Management"
            closeSidebar={() => setIsSidebarOpen(false)}
          />
        </ul>

        <div className="divider before:bg-orange-500 after:bg-orange-500 before:h-px ml-4 after:h-px w-1/2 mx-auto my-4"></div>

        <ul className="flex flex-col text-2xl font-semibold gap-1">
          <SidebarLink
            to="/"
            icon={<FaHome />}
            text="Home"
            closeSidebar={() => setIsSidebarOpen(false)}
          />
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-black text-white p-4 md:p-6 mt-16 md:mt-0">
        <Outlet />
      </main>
    </div>
  );
};

const SidebarLink = ({ to, icon, text, closeSidebar }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
            isActive
              ? "bg-gradient-to-r from-[#ff6a00] via-[#d64500] to-[#1a1a1a] text-white shadow-md"
              : "text-white hover:bg-[#1a1a1a] hover:text-orange-400"
          }`
        }
        onClick={closeSidebar}
      >
        <span className="text-xl">{icon}</span>
        <span>{text}</span>
      </NavLink>
    </li>
  );
};

export default Dashboard;
