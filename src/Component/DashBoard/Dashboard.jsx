// Dashboard.jsx
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUser, FaFileAlt, FaRobot, FaMoon, } from "react-icons/fa";
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
          <SidebarLink to="/dashboard/ai-coach" icon={<FaRobot />} text="AI Assistant" />
          <SidebarLink to="/dashboard/userAdmin" icon={<FaUser />} text="User Management" />
        </ul>

     <div className="divider before:bg-orange-500 after:bg-orange-500 before:h-px   ml-4  after:h-px w-1/2 mx-auto"></div>

        <ul className="flex flex-col text-2xl font-semibold gap-1">
          <SidebarLink to="/" icon={<FaHome />} text="Home" />
        </ul>

       
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
          `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${isActive
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