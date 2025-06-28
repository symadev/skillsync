import { useResume } from "../../Provider/ResumeContext";
import Education from "../AllInfo/Education";
import Skills from "../AllInfo/Skills";
import Projects from "../AllInfo/Projects";
import PersonalInfoCard from "../AllInfo/PersonalInfoCard";
import personalInfo from "../../../Data/PersonalInfoData";
import projectData from "../../../Data/projectData";
import workData from "../../../Data/workData";
import Work from "../AllInfo/Work";
import profileImage from "../../../assets/images/elsa.png"
import educationInfo from "../../../Data/educationInfo";
import skillsData from "../../../Data/skills";

const Template6 = ({ primaryColor = "orange" }) => {
  const { formData } = useResume();
  const {} = formData;
    const { profileImage: uploadedImage } = formData;

  const colorStyles = {
    purple: {
      accent: "text-purple-600",
      border: "border-purple-600",
      divider: "border-purple-200",
    },
    green: {
      accent: "text-green-600",
      border: "border-green-600",
      divider: "border-green-200",
    },
    blue: {
      accent: "text-blue-600",
      border: "border-blue-600",
      divider: "border-blue-200",
    },
    orange: {
      accent: "text-orange-600",
      border: "border-orange-600",
      divider: "border-orange-200",
    },
  };

  const colors = colorStyles[primaryColor] || colorStyles.orange;

  return (
    <div className="max-w-4xl mx-auto bg-white text-black border border-gray-300 p-8" id="resume-output">
      
      {/* Header Section */}
      <div className="flex items-start gap-6 mb-8 pb-6 border-b border-gray-200">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 bg-gray-300   border-4 border-gray-600  rounded-full overflow-hidden">
            <img 
              src={profileImage } 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Name and Contact Info */}
        <div className="flex-1">
          
          <div className="text-gray-600 space-y-1">
            <PersonalInfoCard {...personalInfo} />
          </div>
        </div>
      </div>

     

      {/* Education Section */}
      <div className="mb-8">
        <h2 className={`text-2xl font-light ${colors.accent} mb-4 pb-2 border-b ${colors.divider}`}>
          Education
        </h2>
        <div className="space-y-3">
          <Education {...educationInfo} />
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-8">
        <h2 className={`text-2xl font-light ${colors.accent} mb-4 pb-2 border-b ${colors.divider}`}>
          Skills
        </h2>
        <div className="space-y-2">
          <Skills {...skillsData} />
        </div>
      </div>

      {/* Work History Section */}
      <div className="mb-8">
        <h2 className={`text-2xl font-light ${colors.accent} mb-4 pb-2 border-b ${colors.divider}`}>
          Work History
        </h2>
        <div className="space-y-6">
          <Work {...workData} />
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-8">
        <h2 className={`text-2xl font-light ${colors.accent} mb-4 pb-2 border-b ${colors.divider}`}>
          Projects
        </h2>
        <div className="space-y-4">
          <Projects {...projectData} />
        </div>

         <div className="absolute top-4 right-4">
        <div className="bg-orange-500 text-white px-4 py-2 rounded-md font-bold text-sm">
          RECOMMENDED
        </div>
      </div>
      </div>

    </div>
  );
};

export default Template6;