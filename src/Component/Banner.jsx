import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="min-h-[500px] flex flex-col items-center justify-center px-6 py-12 text-center bg-black text-white">
      
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        Craft Your Future with{" "}
        <span className="text-orange-600">AI-</span>
        <span className="text-orange-500">Powered</span>{" "}
        Resumes
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        Unlock your career potential with intelligent suggestions, stunning designs,
        and an effortless building experience.
      </p>

      {/* CTA Button */}
      <Link
        to="/aboutus"
        className="bg-gradient-to-r from-orange-600 to-orange-400 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition duration-300"
      >
        Build Your Resume
      </Link>
    </div>
  );
};

export default Banner;
