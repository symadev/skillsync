import { useState, useEffect } from "react";
import { useResume } from "../../Provider/ResumeContext";
import templateData from "../../../Data/templateData";
import { useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";

const ResumeForm5 = () => {
  const {
    templateId,
    primaryColor,
    formData: globalFormData,
    setFormData: setGlobalFormData,
  } = useResume();
  const navigate = useNavigate();
  const [currentStep] = useState(5);
  const totalSteps = 6;

  const [localFormData, setLocalFormData] = useState({
    ...globalFormData,
    education:
      globalFormData.education && globalFormData.education.length > 0
        ? globalFormData.education
        : [
            {
              institution: "",
              degree: "",
              field: "",
              location: "",
              graduationDate: "",
            },
          ],
  });

  const [profileImage, setProfileImage] = useState(
    globalFormData.profileImage || null
  );

  // Sync local form data + image to global context
  useEffect(() => {
    setGlobalFormData({ ...localFormData, profileImage });
  }, [localFormData, profileImage, setGlobalFormData]);

  const handleInputChange = (e, index, field) => {
    const { value } = e.target;
    const updatedEducation = [...localFormData.education];
    updatedEducation[index][field] = value;
    setLocalFormData((prev) => ({ ...prev, education: updatedEducation }));
  };

  const handleAddEducation = () => {
    setLocalFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { institution: "", degree: "", field: "", location: "", graduationDate: "" },
      ],
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setProfileImage(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGoBack = () => navigate(-1);

  // Using html2pdf.js to download the resume preview as PDF
  const handleDownload = () => {
    const element = document.getElementById("resume-output");
    if (!element) return;

    const opt = {
      margin: 0.3,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, logging: false, dpi: 192, letterRendering: true },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .catch((err) => console.error("PDF generation error:", err));
  };

  const progressPercentage = (currentStep / totalSteps) * 100;
  const selectedTemplate = templateData.find((t) => t.id === templateId);
  const TemplateComponent = selectedTemplate?.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 text-white">
      {/* Header & Progress */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4 p-6">
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 text-orange-400 hover:text-white transition duration-200 font-medium"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Go Back
        </button>

        <div className="w-full lg:w-2/3">
          <div className="mb-2 flex justify-between text-sm font-medium">
            <span>
              Step {currentStep} of {totalSteps}
            </span>
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
        {/* Education Form */}
        <div className="bg-gray-950 p-8 rounded-2xl border border-orange-600 shadow-lg overflow-y-auto max-h-[80vh]">
          <h2 className="text-2xl font-bold mb-6 text-orange-400">
            Education Details
          </h2>

          {localFormData.education.map((edu, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 border-b border-orange-700 pb-6"
            >
              <input
                value={edu.degree}
                onChange={(e) => handleInputChange(e, index, "degree")}
                className="bg-gray-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Degree (e.g., BSc)"
              />
              <input
                value={edu.field}
                onChange={(e) => handleInputChange(e, index, "field")}
                className="bg-gray-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Field (e.g., Engineering)"
              />
              <input
                value={edu.institution}
                onChange={(e) => handleInputChange(e, index, "institution")}
                className="bg-gray-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Institution (e.g., Northern University)"
              />
              <input
                value={edu.location}
                onChange={(e) => handleInputChange(e, index, "location")}
                className="bg-gray-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Location (e.g., Khulna)"
              />
              <input
                value={edu.graduationDate}
                onChange={(e) => handleInputChange(e, index, "graduationDate")}
                className="bg-gray-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Graduation Year (e.g., 2025)"
              />
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddEducation}
            className="mb-6 w-full bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition"
          >
            + Add Another Education
          </button>

          {/* Profile Image Upload */}
          <input
            type="file"
            onChange={handleImageUpload}
            className="mt-6 text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-orange-600 file:text-white hover:file:bg-orange-700"
            accept="image/*"
          />

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold text-black transition"
          >
            Download Resume (PDF)
          </button>
        </div>

        {/* Live Preview */}
        <div className="bg-gray-950 p-8 rounded-2xl border border-orange-600 shadow-lg overflow-auto max-h-[80vh]">
          <h2 className="text-xl font-bold mb-6 text-orange-400">Final Preview</h2>
          {TemplateComponent ? (
            <div id="resume-output" className="overflow-auto">
              <TemplateComponent
                primaryColor={primaryColor}
                formData={localFormData}
                profileImage={profileImage}
              />
            </div>
          ) : (
            <p className="text-gray-300">No template selected yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeForm5;
