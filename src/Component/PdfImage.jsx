import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import image from "../assets/images/Resume folder-rafiki.png";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthContext";

const PdfImage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <div className="hero min-h-[400px] bg-black px-4 lg:px-8">
      <div className="hero-content flex-col lg:flex-row gap-16 items-center">
        {/* Image on the left */}
        <motion.img
          src={image}
          alt="Resume Builder Illustration"
          className="max-w-sm w-full rounded-lg shadow-2xl"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Text on the right */}
        <div className="text-center lg:text-left max-w-xl space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-300 text-transparent bg-clip-text">
            Easily export your<br />CV to PDF
          </h1>

          <p className="text-lg text-orange-400">
            Create a resume online with our CV maker and export a pixel-perfect PDF resume.
            As most employers’ preferred CV format, a PDF resume is ideal for applying through
            careers pages and job boards.
          </p>

          <button
            onClick={() => navigate(user ? "/dashboard" : "/login")}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 via-red-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out rounded-2xl flex items-center justify-center gap-2"
          >
            Choose Template →
          </button>

        </div>
      </div>
    </div>
  );
};

export default PdfImage;


