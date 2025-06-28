import { useResume } from "../../Provider/ResumeContext";

import Education from "../AllInfo/Education";

import Skills from "../AllInfo/Skills";
import Projects from "../AllInfo/Projects";
import PersonalInfoCard from "../AllInfo/PersonalInfoCard";
import personalInfo from "../../../Data/PersonalInfoData";

const Template2 = ({ primaryColor = "purple" }) => {
  const { formData } = useResume();
  const {
    
    summary,
    skills,
    experience,
    education,
    
    projects,
  } = formData;

  const colorStyles = {
    purple: {
      headerBg: "bg-purple-700",
      text: "text-purple-700",
    },
    green: {
      headerBg: "bg-green-700",
      text: "text-green-700",
    },
    blue: {
      headerBg: "bg-blue-700",
      text: "text-blue-700",
    },
    orange: {
      headerBg: "bg-orange-600",
      text: "text-orange-600",
    },
  };

  const colors = colorStyles[primaryColor] || colorStyles.purple;

  return (
    <div className="max-w-3xl mx-auto bg-white text-black p-6 shadow-lg" id="resume-output">
      <div className={`${colors.headerBg} text-white p-6 rounded-t-md`}>
        <div className="flex justify-between items-start">
         
      {/* Personal Info */}
      <div className="text-center space-y-1 text-white">
        <PersonalInfoCard {...personalInfo} />
      </div>
        </div>
      </div>

      <div className="p-4">
        <h2 className={`text-xl font-bold mb-2 ${colors.text}`}>Professional Summary</h2>
        <p className="text-sm">{summary || "Write a short summary about yourself..."}</p>
      </div>

      <div className="p-4 space-y-4">
        <Skills skills={skills} primaryColor={primaryColor} />
        <Projects projects={projects} primaryColor={primaryColor} />
       
        <Education education={education} primaryColor={primaryColor} />
      </div>
    </div>
  );
};

export default Template2;
