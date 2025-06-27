import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import image from "../../assets/images/first-page.png"

const HomeMain = () => {
  const navigate = useNavigate();

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-black to-orange-500 text-white px-6 lg:px-24">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10 items-center">
        {/* Framer Motion image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          src={image}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Resume Builder Illustration"
        />

        <div className="text-center lg:text-left max-w-xl space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Build Your Resume Effortlessly
          </h1>
          <p className="text-lg">
            Create a professional resume in minutes with our easy-to-use templates.
            No design skills needed. Just choose a layout, fill in your details, and download!
          </p>
          <button
            onClick={() => navigate("/templates")}
            className="btn bg-white text-black hover:bg-orange-200 font-bold"
          >
            Choose Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
