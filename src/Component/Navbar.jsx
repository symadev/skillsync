import { Link } from 'react-router-dom';
import logo from '../assets/images/resume.icon.png';
import { AuthContext } from './Provider/AuthContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);


   const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully");
        navigate("/");
      })
      .catch((err) => toast.error("Logout failed"));
  };
  return (
    <div className="navbar bg-black text-white px-4 sticky top-0 z-50 h-24">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Mobile Menu Button */}
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          {/* Mobile Dropdown */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li><a href="/">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#ai-tools">AI Tools</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contacts">Contact</a></li>
            {user ? (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Logout</button></li>
              </>
            ) : (
              <li><Link to="/login">Login/Sign Up</Link></li>
            )}
          </ul>
        </div>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 ml-2">
          <img className="w-8 h-8 object-cover" src={logo} alt="Logo" />
          <span className="text-xl font-bold">SkillSync</span>
        </Link>
      </div>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px] font-semibold">
          <li><a href="/">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#ai-tools">AI Tools</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contacts">Contact</a></li>
         {user ? (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Logout</button></li>
              </>
            ) : (
              <li><Link to="/login">Login/Sign Up</Link></li>
            )}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <Link to={user ? "/dashboard" : "/login"}>
          <button className="btn btn-outline hover:bg-orange-400 rounded-full shadow-lg">
            Build Your Resume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
