// ResumeForm4.jsx
import { useState, useEffect } from 'react';
import { useResume } from "../../Provider/ResumeContext";
import templateData from "../../../Data/templateData";
import { useNavigate } from "react-router-dom";

const ResumeForm4 = () => {
  const { templateId, primaryColor, formData: globalFormData, setFormData: setGlobalFormData } = useResume();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(4);
  const totalSteps = 5;

  const [localFormData, setLocalFormData] = useState({
    ...globalFormData,
    experience: globalFormData.experience || [
      {
        jobTitle: "",
        company: "",
        location: "",
        dateRange: "",
        responsibilities: [""]
      }
    ]
  });

  useEffect(() => {
    setGlobalFormData({ ...localFormData });
  }, [localFormData]);

  const handleInputChange = (e, index, field) => {
    const { value } = e.target;
    const updatedExperience = [...localFormData.experience];
    updatedExperience[index][field] = value;
    setLocalFormData(prev => ({ ...prev, experience: updatedExperience }));
  };

  const handleResponsibilitiesChange = (e, index) => {
    const { value } = e.target;
    const updatedExperience = [...localFormData.experience];
    updatedExperience[index].responsibilities = value.split('\n');
    setLocalFormData(prev => ({ ...prev, experience: updatedExperience }));
  };

  const selectedTemplate = templateData.find(template => template.id === templateId);
  const TemplateComponent = selectedTemplate?.component;

  const handleGoBack = () => navigate(-1);

  const handleNext = () => navigate("/resume/templates/from5");

  const handlePreview = () => console.log('Preview resume');

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

      {/* Form & Preview */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Form Box */}
        <div className="bg-gray-950 p-8 rounded-2xl border border-orange-600 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-orange-400">Work Experience</h2>

          {localFormData.experience.map((job, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                value={job.jobTitle}
                onChange={(e) => handleInputChange(e, index, "jobTitle")}
                className="bg-gray-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Job Title"
              />
              <input
                value={job.company}
                onChange={(e) => handleInputChange(e, index, "company")}
                className="bg-gray-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Company"
              />
              <input
                value={job.location}
                onChange={(e) => handleInputChange(e, index, "location")}
                className="bg-gray-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Location"
              />
              <input
                value={job.dateRange}
                onChange={(e) => handleInputChange(e, index, "dateRange")}
                className="bg-gray-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Date Range (e.g. May 2021 - Current)"
              />
              <textarea
                value={job.responsibilities.join('\n')}
                onChange={(e) => handleResponsibilitiesChange(e, index)}
                className="bg-gray-800 px-4 py-3 rounded-lg text-white w-full col-span-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter each responsibility on a new line"
              />
            </div>
          ))}

          <div className="flex gap-4 mt-8">
            <button
              onClick={handlePreview}
              className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Preview
            </button>
            <button
              onClick={handleNext}
              className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold text-black transition"
            >
              Next
            </button>
          </div>
        </div>

        {/* Live Preview */}
        <div className="bg-gray-950 p-8 rounded-2xl border border-orange-600 shadow-lg">
          <h2 className="text-xl font-bold mb-6 text-orange-400">Live Preview</h2>
          {TemplateComponent ? (
            <TemplateComponent
              primaryColor={primaryColor}
              formData={localFormData}
            />
          ) : (
            <p className="text-gray-300">No template selected yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeForm4;
