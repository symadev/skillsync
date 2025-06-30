// ResumeForm2.js
import { useState, useEffect } from "react";
import { useResume } from "../../Provider/ResumeContext";
import { useNavigate } from "react-router-dom";
import skillsData from "../../../Data/skillsData";
import templateData from "../../../Data/templateData";

const ResumeForm2 = () => {
  const { templateId, primaryColor, formData, setFormData } = useResume();
  const navigate = useNavigate();
  const currentStep = 2;
  const totalSteps = 6;

  const selectedTemplate = templateData.find((template) => template.id === templateId);
  const TemplateComponent = selectedTemplate?.component;

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    console.log("Next: Projects section");
  };

  const handleSkillClick = (skill) => {
    if (!formData.skills.includes(skill)) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill],
      }));
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 text-white">
      {/* Header & Progress */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4 p-6">
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 text-orange-400 hover:text-white transition duration-200 font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Go Back
        </button>

        <div className="w-full lg:w-2/3">
          <div className="mb-2 flex justify-between text-sm font-medium">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round(progressPercentage)}% Complete</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 h-3 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Skill Selection */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-gray-950 p-8 rounded-2xl border border-orange-600 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-orange-400">Select Your Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillsData.map((skill) => (
              <button
                key={skill}
                onClick={() => handleSkillClick(skill)}
                className={`px-4 py-2 rounded-lg font-medium text-left ${
                  formData.skills.includes(skill)
                    ? "bg-orange-600 text-white"
                    : "bg-gray-800 text-orange-300 hover:bg-orange-700 hover:text-white"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="mt-8 bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold text-black transition"
          >
            Next
          </button>
        </div>

        {/* Live Preview */}
        <div className="bg-gray-950 p-8 rounded-2xl border border-orange-600 shadow-lg">
          <h2 className="text-xl font-bold mb-6 text-orange-400">Live Preview</h2>
          {TemplateComponent ? (
            <TemplateComponent primaryColor={primaryColor} formData={formData} />
          ) : (
            <p className="text-gray-300">No template selected yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeForm2;
