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

const Template5 = ({ primaryColor = "green" }) => {
  const { formData } = useResume();
  const {} = formData;

  const colorStyles = {
    purple: {
      headerBg: "bg-purple-600",
      accentBg: "bg-purple-100",
      text: "text-purple-700",
      border: "border-purple-600",
      underline: "border-purple-600",
    },
    green: {
      headerBg: "bg-green-600",
      accentBg: "bg-green-100",
      text: "text-green-700",
      border: "border-green-600",
      underline: "border-green-600",
    },
    blue: {
      headerBg: "bg-blue-600",
      accentBg: "bg-blue-100",
      text: "text-blue-700",
      border: "border-blue-600",
      underline: "border-blue-600",
    },
    orange: {
      headerBg: "bg-orange-600",
      accentBg: "bg-orange-100",
      text: "text-orange-700",
      border: "border-orange-600",
      underline: "border-orange-600",
    },
  };

  const colors = colorStyles[primaryColor] || colorStyles.green;

  return (
    <div className="max-w-4xl mx-auto bg-white text-black shadow-lg" id="resume-output">
      {/* Header Section */}
      <div className={`${colors.headerBg} text-white px-8 py-6`}>
        <div className="text-center">
          
         
            <PersonalInfoCard {...personalInfo} />
             <div className="border-t border-white mt-3 pt-3">
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 py-6 space-y-8">
        
       

        {/* Education Section */}
        <div className="space-y-4">
          <h3 className={`text-2xl font-bold ${colors.text} pb-2`}>
            Education
          </h3>
          <div className="border-l-4 border-gray-200 pl-6">
            <Education {...educationInfo} />
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-4">
          <h3 className={`text-2xl font-bold ${colors.text} pb-2`}>
            Skills
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            <Skills {...skillsData} />
          </div>
        </div>

        {/* Work History Section */}
        <div className="space-y-4">
          <h3 className={`text-2xl font-bold ${colors.text} pb-2`}>
            Work History
          </h3>
          <div className="space-y-6">
            <Work {...workData} />
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-4">
          <h3 className={`text-2xl font-bold ${colors.text} pb-2`}>
            Projects
          </h3>
          <div className="space-y-4">
            <Projects {...projectData} />
          </div>
        </div>

      </div>

      {/* Recommended Badge */}
      <div className="absolute top-4 right-4">
        <div className="bg-orange-500 text-white px-4 py-2 rounded-md font-bold text-sm">
          RECOMMENDED
        </div>
      </div>
    </div>
  );
};

export default Template5;