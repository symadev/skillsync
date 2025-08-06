import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { AuthContext } from "./Provider/AuthContext";

const Banner = () => {
  const typedRef = useRef(null);
   const {  user } = useContext(AuthContext);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [ "Job-Winning", "Ai-Powered", "Professional", "Smart"],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="min-h-[500px] flex flex-col items-center justify-center px-6 py-12 text-center bg-black text-white">
      {/* Headline with Typed.js */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Craft Your Future with{" "}
        <span className="text-orange-500">
          <span ref={typedRef} />
        </span>{" "}
        Resumes
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
        Unlock your career potential with intelligent suggestions, stunning designs,
        and an effortless building experience.
      </p>

      {/* CTA Button */}
     <Link to={user ? "/resume" : "/login"}>
          <button className="bg-gradient-to-r from-orange-600 to-orange-400 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            Build Your Resume
          </button>
        </Link>
    </div>
  );
};

export default Banner;
