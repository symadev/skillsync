import { useState } from "react";
import { Link } from "react-router-dom";

const Ai = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");

  const handleGenerate = (e) => {
    e.preventDefault();
    console.log(`Generating for ${jobTitle} at ${companyName}`);
    // Your logic goes here
  };

  return (
    <div className="bg-black text-white py-16 px-6 md:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl  md:text-4xl font-bold mb-4">
          Leverage Our <span className="text-white">AI Tools</span>
        </h1>
        <h2 className="text-2xl font-semibold mt-6 mb-3">
          ✨ Experience Description Generator
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Struggling to describe your work experience? Let our AI help you
          craft impactful bullet points!
        </p>
      </div>

      {/* Generator Form */}
      <form onSubmit={handleGenerate} className="max-w-xl mx-auto space-y-6  p-8 rounded-2xl shadow-lg">
        <div>
          <label htmlFor="jobTitle" className="block mb-2 font-semibold">
            Job Title:
          </label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="e.g., Software Engineer"
            className="w-full px-4 py-3 rounded-xl text-white btn-outline btn-error focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label htmlFor="companyName" className="block mb-2 font-semibold">
            Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="e.g., Google"
            className="w-full px-4 py-3 rounded-xl  text-white  focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <Link to ="/dashboard/ai-coach"

          type="submit"
          className="w-full bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-700 hover:to-orange-500 text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span>📝</span>
          <span>Generate Suggestions</span>
        </Link>
      </form>
    </div>
  );
};

export default Ai;
