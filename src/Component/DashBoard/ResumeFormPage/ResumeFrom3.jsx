import { useState, useEffect } from 'react';
import { useResume } from "../../Provider/ResumeContext";
import templateData from "../../../Data/templateData";
import { useNavigate } from "react-router-dom";
import AIAssistant from '../../AiAssistant';

const ResumeForm3 = () => {
  const { templateId, primaryColor, formData: globalFormData, setFormData: setGlobalFormData } = useResume();
  const navigate = useNavigate();
  const [currentStep] = useState(3);
  const totalSteps = 5;

  const [projects, setProjects] = useState(globalFormData.projects || []);
  const [profileImage, setProfileImage] = useState(globalFormData.profileImage || null);

  useEffect(() => {
    setGlobalFormData(prev => ({
      ...prev,
      projects,
      profileImage,
    }));
  }, [projects, profileImage]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    setProjects(prevProjects => {
      const updated = [...prevProjects];
      updated[index] = {
        ...updated[index],
        [name]: value,
      };
      return updated;
    });
  };

  const handleAddProject = () => {
    setProjects(prev => [...prev, { title: '', description: '', githubLink: '', liveDemoLink: '' }]);
  };

  const handleRemoveProject = (index) => {
    setProjects(prev => prev.filter((_, i) => i !== index));
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate("/resume/templates/from4");
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  const selectedTemplate = templateData.find(template => template.id === templateId);
  const TemplateComponent = selectedTemplate?.component;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-orange-900 text-white">
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

        <div className="w-full lg:w-1/3">
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

      {/* Projects Form & Preview */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Projects Form */}
        <div className="bg-gray-950 p-8 rounded-2xl border border-orange-600 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-orange-400">Projects</h2>

          {projects.map((project, index) => (
            <div key={index} className="mb-6 bg-gray-900 p-4 rounded-xl border border-gray-700">
              <input
                name="title"
                value={project.title}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Project Title"
                className="w-full bg-gray-800 px-4 py-3 rounded-lg text-white mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                name="description"
                value={project.description}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Project Description"
                className="w-full bg-gray-800 px-4 py-3 rounded-lg text-white mb-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                name="githubLink"
                value={project.githubLink}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="GitHub Link"
                className="w-full bg-gray-800 px-4 py-3 rounded-lg text-white mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                name="liveDemoLink"
                value={project.liveDemoLink}
                onChange={(e) => handleInputChange(index, e)}
                placeholder="Live Demo Link"
                className="w-full bg-gray-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <button
                onClick={() => handleRemoveProject(index)}
                className="mt-2 text-sm text-red-400 hover:text-red-500"
              >
                Remove Project
              </button>

            </div>
          ))}

          <button
            onClick={handleAddProject}
            className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition w-full"
          >
            Add New Project
          </button>

          <button
            onClick={handleNext}
            className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold text-black transition"
          >
            Next
          </button>
          <div className="mt-6">
            <h2 className="text-xl font-bold  text-orange-400">Make a unique description</h2>
            <AIAssistant />
          </div>
        </div>

        {/* Live Preview */}
        <div className="bg-gray-950 p-8 rounded-2xl border border-orange-600 shadow-lg">
          <h2 className="text-xl font-bold mb-6 text-orange-400">Live Preview</h2>
          {TemplateComponent ? (
            <TemplateComponent
              primaryColor={primaryColor}
              formData={{ ...globalFormData, projects }}
              profileImage={profileImage}
            />
          ) : (
            <p className="text-gray-300">No template selected yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeForm3;
