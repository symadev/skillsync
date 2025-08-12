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
  }, [projects, profileImage, setGlobalFormData]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    setProjects(prevProjects => {
      const updated = [...prevProjects];
      updated[index] = { ...updated[index], [name]: value };
      return updated;
    });
  };

  const handleAddProject = () => {
    setProjects(prev => [...prev, { title: '', description: '', githubLink: '', liveDemoLink: '' }]);
  };

  const handleRemoveProject = (index) => {
    setProjects(prev => prev.filter((_, i) => i !== index));
  };

  const handleGoBack = () => navigate(-1);
  const handleNext = () => navigate("/resume/templates/from4");

  const progressPercentage = (currentStep / totalSteps) * 100;

  const selectedTemplate = templateData.find(template => template.id === templateId);
  const TemplateComponent = selectedTemplate?.component;

  
  const [rightTab, setRightTab] = useState("preview"); // "preview" | "assistant"
  const currentSection = "projects";

  const openAssistantForSection = () => setRightTab("assistant");


//handle for the ai assistant section

  const handleApplyFromAI = (patch) => {
    if (!patch || typeof patch !== "object") return;

    // If AI returns full projects array
    if (Array.isArray(patch.projects)) {
      setProjects(patch.projects);
      return;
    }
    // Targeted update: { projectIndex, projectData }
    if (patch.projectIndex != null && patch.projectData) {
      setProjects(prev => {
        const i = Number(patch.projectIndex);
        if (Number.isNaN(i) || i < 0 || i >= prev.length) return prev;
        const copy = [...prev];
        copy[i] = { ...copy[i], ...patch.projectData };
        return copy;
      });
      return;
    }
    
  };


  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-950 to-orange-700 text-white">
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

      {/* Projects Form & Right Panel */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Projects Form */}
        <div className="bg-gray-950 p-8 rounded-2xl border border-orange-600 shadow-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold mb-6 text-orange-400">Projects</h2>

            
            <button
              type="button"
              onClick={openAssistantForSection}
              className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/60 hover:bg-gray-800 border border-orange-600/40 text-sm"
              title="Get AI suggestions for this section"
            >
              <span className="text-lg leading-none">✨</span>
              <span className="hidden sm:block">Suggest</span>
            </button>
          </div>

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

         
        </div>

        {/* Right panel for single box with the tab for the live preview| Assistant */}
        <div className="bg-gray-950 p-0 rounded-2xl border border-orange-600 shadow-lg overflow-hidden">
          {/* Tabs header */}
          <div className="flex">
            <button
              className={`flex-1 py-3 text-center text-sm font-semibold transition ${
                rightTab === "preview" ? "bg-gray-900 text-orange-400" : "bg-gray-800 text-gray-200 hover:text-white"
              }`}
              onClick={() => setRightTab("preview")}
            >
              Live Preview
            </button>
            <button
              className={`flex-1 py-3 text-center text-sm font-semibold transition ${
                rightTab === "assistant" ? "bg-gray-900 text-orange-400" : "bg-gray-800 text-gray-200 hover:text-white"
              }`}
              onClick={() => setRightTab("assistant")}
            >
              Assistant
            </button>
          </div>

          {/* Tab content */}
          <div className="p-8">
            {rightTab === "preview" ? (
              <>
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
              </>
            ) : (
              <div className="min-h-[420px]">
                <AIAssistant
                  section={currentSection}
                  data={{ ...globalFormData, projects, profileImage }}
                  onApply={handleApplyFromAI}
                />
                <p className="mt-3 text-xs text-gray-400">
                  Try: “3 impact bullets (problem→action→result)”, “Add metrics”, “Polish wording under 18 words”.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm3;
