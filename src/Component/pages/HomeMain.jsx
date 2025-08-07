import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HomeMain = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Optional: still detect if you're on /resume
  const isResumeRoot = location.pathname === "/resume";

  return (
    <div className="min-h-screen bg-black px-6 lg:px-24 py-12 text-white flex flex-col items-center justify-center">

      {/*  Back to Home button — Always visible */}
      <div className="mb-6 w-full max-w-6xl">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3  text-orange-400 font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out rounded-md flex items-center justify-center gap-2"
        >
          ← Back to Home
        </button>
      </div>

      {/* Hero section only for /resume */}
      {isResumeRoot && (
        <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10 items-center justify-center max-w-6xl w-full">
          <motion.img
            src="/assets/first-page.png"
            alt="Resume Builder Illustration"
            className="max-w-sm w-full rounded-lg shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="text-center lg:text-left max-w-xl space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-300 text-transparent bg-clip-text">
              Build Your Resume Effortlessly
            </h1>

            <p className="text-lg text-orange-400">
              Create a professional resume in minutes with our easy-to-use templates.
            </p>

            <button
              onClick={() => navigate("/resume/templates")}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out rounded-md flex items-center justify-center gap-2"
            >
              Choose Template →
            </button>
          </div>
        </div>
      )}

      {/* Child Routes Render Here */}
      <div className="mt-10 w-full max-w-8xl flex justify-center">
       
          <Outlet />
      
      </div>

    </div>
  );
};

export default HomeMain;