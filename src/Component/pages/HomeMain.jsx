import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import image from "../../assets/images/first-page.png";

const HomeMain = () => {
  const navigate = useNavigate();

  return (
    <div className="hero min-h-screen bg-black px-6 lg:px-24">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          src={image}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Resume Builder Illustration"
        />

        <div className="text-center lg:text-left max-w-xl space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-300 text-transparent bg-clip-text">
            Build Your Resume Effortlessly
          </h1>

          <p className="text-lg text-orange-400">
            Create a professional resume in minutes with our easy-to-use templates.
          </p>

          <button
            onClick={() => navigate("/dashboard/templates")}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
          >
            🚀 Choose Template
          </button>

        </div>
      </div>
    </div>
  );
};

export default HomeMain;
