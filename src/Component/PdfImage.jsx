import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import image from "../assets/images/Resume folder-rafiki.png";

const PdfImage= () => {
  const navigate = useNavigate();

  return (
    <div className="hero min-h-screen bg-black px-6 lg:px-24">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10 items-center">
        <motion.img
          src={image }
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
            onClick={() => navigate("/dashboard/templates")}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 via-red-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out rounded flex items-center justify-center gap-2"
          >
            Choose Template →
          </button>

        </div>
      </div>
    </div>
  );
};

export default PdfImage;
