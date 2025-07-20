import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from './Provider/AuthContext';
import { toast } from 'react-toastify';


const Login = () => {
  const { signIn ,logOut, } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
         toast.success("Login Successful", "", "success");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Login Failed", error.message, "error");
      });

         const handlelogOut = () => {
        if (user) {
            navigate('/game'); //  go to game if logged in
        } else {
            setShowLoginModal(true); // open login modal if not logged in
        }
    };





  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-[#121212] border border-orange-500/20 rounded-3xl shadow-2xl p-8 w-full max-w-md text-white">
        {/* Logo or Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-orange-400">
           SkillSync Login 
          </h2>
          <p className="text-gray-400 text-sm mt-2">
           Access your AI-powered resume builder
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@email.com"
              className="w-full px-4 py-2 bg-zinc-900 border border-gray-600 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-zinc-900 border border-gray-600 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold rounded-md hover:from-orange-600 hover:to-yellow-500 transition-all"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between mt-5 text-sm text-gray-400">
          <Link to="/forgot-password" className="hover:text-orange-400">
            Forgot Password?
          </Link>
          <Link to="/register" className="hover:text-orange-400">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
