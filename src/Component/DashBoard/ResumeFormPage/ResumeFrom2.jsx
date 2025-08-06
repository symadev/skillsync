// ResumeForm2.js
import { useState, useEffect } from "react";
import { useResume } from "../../Provider/ResumeContext";
import { useNavigate } from "react-router-dom";
import skillsData from "../../../Data/skills";
import templateData from "../../../Data/templateData";
import AIAssistant from "../../AiAssistant";

const ResumeForm2 = () => {
  const { templateId, primaryColor, formData, setFormData } = useResume();
  const navigate = useNavigate();
  const currentStep = 2;
  const totalSteps = 5;

  // Additional skills to be merged with skillsData
  const additionalSkills = [
    "JavaScript", "React", "Node.js", "Python", "HTML/CSS", "TypeScript",
    "MongoDB", "Express.js", "Git", "AWS", "Docker", "GraphQL",
    "Vue.js", "Angular", "PHP", "MySQL", "PostgreSQL", "Redis",
    "Kubernetes", "Jenkins", "Linux", "Java", "C++", "Go"
  ];

  // Combine existing skillsData with additional skills, removing duplicates
  const [allSkills, setAllSkills] = useState(() => {
    const combined = [...new Set([...skillsData, ...additionalSkills])];
    return combined.sort();
  });

  const [newSkill, setNewSkill] = useState("");
  const [showAddSkill, setShowAddSkill] = useState(false);

  const selectedTemplate = templateData.find((template) => template.id === templateId);
  const TemplateComponent = selectedTemplate?.component;

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate("/resume/templates/from3");
  };

  const handleSkillClick = (skill) => {
    if (!formData.skills.includes(skill)) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill],
      }));
    } else {
      // Remove skill if already selected
      setFormData((prev) => ({
        ...prev,
        skills: prev.skills.filter(s => s !== skill),
      }));
    }
  };

  const handleAddNewSkill = () => {
    if (newSkill.trim() && !allSkills.includes(newSkill.trim())) {
      const updatedSkills = [...allSkills, newSkill.trim()].sort();
      setAllSkills(updatedSkills);
      setNewSkill("");
      setShowAddSkill(false);
      // Automatically select the newly added skill
      handleSkillClick(newSkill.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddNewSkill();
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
              className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Skill Selection */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-gray-950 p-8 rounded-2xl border border-orange-600 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-orange-400">Select Your Skills</h2>
          <p className="text-gray-300 mb-4 text-sm">
            Click on the plus icon to add skills to your resume. Selected skills: {formData.skills.length}
          </p>
          
          {/* Add New Skill Section */}
          <div className="mb-6">
            {!showAddSkill ? (
              <button
                onClick={() => setShowAddSkill(true)}
                className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add Custom Skill
              </button>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter new skill..."
                  className="flex-1 px-3 py-2 bg-orange-500 text-white rounded-lg border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  autoFocus
                />
                <button
                  onClick={handleAddNewSkill}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-200"
                >
                  Add
                </button>
                <button
                  onClick={() => {
                    setShowAddSkill(false);
                    setNewSkill("");
                  }}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
          
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {allSkills.map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-between p-4 bg-orange-600 rounded-lg shadow-sm border border-orange-400"
              >
                <span className="text-white font-medium">{skill}</span>
                <button
                  onClick={() => handleSkillClick(skill)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                    formData.skills.includes(skill)
                      ? "bg-green-500 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  {formData.skills.includes(skill) ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="mt-8 bg-gradient-to-r from-orange-500 via-red-500 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg transform hover:scale-105"
          >
            Next: Projects Section
          </button>


           <div className="mt-6">
              <h2 className="text-xl font-bold  text-orange-400">Added your skills with Ai</h2>
            <AIAssistant />
          </div>
        </div>

        {/* Live Preview */}
        <div className="bg-gray-950 p-8 rounded-2xl border border-orange-600 shadow-lg">
          <h2 className="text-xl font-bold mb-6 text-orange-400">Live Preview</h2>
          {TemplateComponent ? (
            <TemplateComponent primaryColor={primaryColor} formData={formData} />
          ) : (
            <p className="text-gray-300">No template selected yet.</p>
          )}
          <div className="mt-4 text-sm text-gray-400">
            Preview updates automatically as you select skills
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm2;