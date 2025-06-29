import { useResume } from "../../Provider/ResumeContext";

import Education from "../AllInfo/Education";

import Skills from "../AllInfo/Skills";
import Projects from "../AllInfo/Projects";
import PersonalInfoCard from "../AllInfo/PersonalInfoCard";
import personalInfo from "../../../Data/PersonalInfoData";
import projectData from "../../../Data/projectData";
import workData from "../../../Data/workData";
import Work from "../AllInfo/Work";
import educationInfo from "../../../Data/educationInfo";
import skillsData from "../../../Data/skills";

const Template2 = ({ primaryColor = "purple" }) => {
  const { formData } = useResume();
  const {
 
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
        <div className="flex justify-between items-start text-start">
         
      {/* Personal Info */}
      <div className={`space-y-1 text-white`}>
        <PersonalInfoCard {...personalInfo} />
      </div>
        </div>
      </div>

      
      {/* Skills */}
      <div className="space-y-2">
        <h3 className={`text-xl font-bold text-${primaryColor}-700 border-b-2 border-${primaryColor}-700 pb-1`}>
          Skills
        </h3>
        <Skills {...skillsData} />
      </div>

      {/* Projects */}
      <div className="space-y-2">
        <h3 className={`text-xl font-bold text-${primaryColor}-700 border-b-2 border-${primaryColor}-700 pb-1`}>
          Projects
        </h3>
        <Projects {...projectData} />
      </div>

      {/* Work History */}
      <div className="space-y-2">
        <h3 className={`text-xl font-bold text-${primaryColor}-700 border-b-2 border-${primaryColor}-700 pb-1`}>
          Work History
        </h3>
        <Work {...workData} />
      </div>

      {/* Education */}
      <div className="space-y-2">
        <h3 className={`text-xl font-bold text-${primaryColor}-700 border-b-2 border-${primaryColor}-700 pb-1`}>
          Education
        </h3>
        <Education {...educationInfo} />
      </div>
       <div className="absolute top-4 right-4">
        
      </div>
    </div>
  );
};

export default Template2;
