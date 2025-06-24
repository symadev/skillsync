// Dashboard.jsx
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUser, FaFileAlt, FaRobot, FaCog, FaMoon } from "react-icons/fa";
import logo from "../../assets/images/icon-logo.png"; // Replace with your SkillSync logo

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a] text-white flex flex-col shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-6">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-orange-500">SkillSync</span>
        </div>

       {/* Navigation Links */}
        <ul className="flex flex-col text-2xl font-semibold gap-1 mt-4">
          <SidebarLink to="/dashboard/profile" icon={<FaUser />} text="Profile" />
          <SidebarLink to="/dashboard/resume" icon={<FaFileAlt />} text="Resume Builder" />
          <SidebarLink to="/dashboard/Templates" icon={<FaHome />} text="Templates" />
          <SidebarLink to="/dashboard/ai-coach" icon={<FaRobot />} text="AI Assistant" />
          <SidebarLink to="/dashboard/settings" icon={<FaCog />} text="Settings" />
        </ul>
       {/* Dark Mode Toggle */}
        <div className="mt-auto px-6 py-6">
         <button className="relative px-5 py-2 rounded-full text-white font-semibold transition-all duration-300 group">
  <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
  <span className="relative z-10 flex items-center gap-2 bg-black rounded-full px-5 py-2">
    <FaMoon className="text-white" /> Dark Mode
  </span>
</button>

        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen bg-black text-white p-6">
        <Outlet />
      </main>
    </div>
  );
};

const SidebarLink = ({ to, icon, text }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
            isActive
              ? 'bg-gradient-to-r from-[#ff6a00] via-[#d64500] to-[#1a1a1a] text-white shadow-md'
              : 'text-white hover:bg-[#1a1a1a] hover:text-orange-400'
          }`
        }
      >
        <span className="text-xl">{icon}</span>
        <span>{text}</span>
      </NavLink>
    </li>
  );
};

export default Dashboard;