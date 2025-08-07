import { useState, useEffect } from "react";
import { useResume } from "../../Provider/ResumeContext";
import templateData from "../../../Data/templateData";
import { useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";
import UseAxiosSecure from "../../AdminRoutes/UseAxiosSecure";
import UseAuth from "../../AdminRoutes/UseAuth";




const ResumeForm5 = () => {
  const {
    templateId,
    primaryColor,
    formData: globalFormData,
    setFormData: setGlobalFormData,
  } = useResume();
  const { user } = UseAuth();
  const navigate = useNavigate();
  const [currentStep] = useState(5);
  const axiosSecure = UseAxiosSecure();
  const totalSteps = 5;

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
        {
          institution: "",
          degree: "",
          field: "",
          location: "",
          graduationDate: "",
        },
      ],
    }));
  };



  const handleGoBack = () => navigate(-1);

  //  Fix unsupported `oklch()`  for color styles//its help to get the unique colors
  const fixGlobalOKLCH = () => {
    const elements = document.querySelectorAll("*");
    elements.forEach((el) => {
      const style = getComputedStyle(el);
      if (style.color?.includes("oklch")) {
        el.style.color = "#000000";
      }
      if (style.backgroundColor?.includes("oklch")) {
        el.style.backgroundColor = "#ffffff";
      }
      if (style.borderColor?.includes("oklch")) {
        el.style.borderColor = "#cccccc";
      }
    });

    const html = document.documentElement;
    const body = document.body;
    if (getComputedStyle(html).color.includes("oklch"))
      html.style.color = "#000000";
    if (getComputedStyle(html).backgroundColor.includes("oklch"))
      html.style.backgroundColor = "#ffffff";
    if (getComputedStyle(body).color.includes("oklch"))
      body.style.color = "#000000";
    if (getComputedStyle(body).backgroundColor.includes("oklch"))
      body.style.backgroundColor = "#ffffff";
  };

const handleDownload = async () => {
  const element = document.getElementById("resume-output");
  if (!element) return;

  fixGlobalOKLCH();

  const opt = {
    margin: 0.3,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, logging: false, dpi: 192, letterRendering: true },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  try {
    // First generate the PDF and download it
    await html2pdf().set(opt).from(element).save();

    //  Then track the download
    await axiosSecure.post('/track-download', { email: user.email });

  } catch (err) {
    console.error("PDF generation or tracking error:", err.response?.data || err.message);
  }
};



  const progressPercentage = (currentStep / totalSteps) * 100;
  const selectedTemplate = templateData.find((t) => t.id === templateId);
  const TemplateComponent = selectedTemplate?.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 text-white">
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

        <div className="w-full lg:w-1/3">
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

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
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
                onChange={(e) =>
                  handleInputChange(e, index, "graduationDate")
                }
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

      

          <button
            onClick={handleDownload}
            className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-semibold text-black transition"
          >
            Download Resume (PDF)
          </button>
        </div>

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
