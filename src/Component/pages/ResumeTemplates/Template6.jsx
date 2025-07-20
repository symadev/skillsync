import { useResume } from "../../Provider/ResumeContext";

import Education from "../AllInfo/Education";
import Skills from "../AllInfo/Skills";
import Projects from "../AllInfo/Projects";
import PersonalInfoCard from "../AllInfo/PersonalInfoCard";
import Work from "../AllInfo/Work";

import personalInfo from "../../../Data/PersonalInfoData";
import projectData from "../../../Data/projectData";
import workData from "../../../Data/workData";
import educationInfo from "../../../Data/educationInfo";
import skillsData from "../../../Data/skills";

import defaultProfileImage from "../../../assets/images/image.png";

const Template6 = ({ primaryColor = "orange" }) => {
  const { formData } = useResume();

  // Destructure formData with fallback values
  const {
    profileImage = defaultProfileImage,
    name = "",
    email = "",
    phone = "",
    skills = [],
    projects = [],
    experience = [],
    education = [],
  } = formData || {};

  const skillsToShow = skills.length > 0 ? skills : skillsData;
  const projectsToShow = projects.length > 0 ? projects : projectData;
  const experienceToShow = experience.length > 0 ? experience : workData;
  const educationToShow = education.length > 0 ? education : educationInfo;
  const personalInfoToShow = name || email || phone ? formData : personalInfo;

  const colorStyles = {
    purple: {
      headerBg: "bg-purple-700",
      text: "text-purple-700",
      border: "border-purple-700",
    },
    green: {
      headerBg: "bg-green-700",
      text: "text-green-700",
      border: "border-green-700",
    },
    blue: {
      headerBg: "bg-blue-700",
      text: "text-blue-700",
      border: "border-blue-700",
    },
    orange: {
      headerBg: "bg-orange-600",
      text: "text-orange-600",
      border: "border-orange-600",
    },
  };

  const colors = colorStyles[primaryColor] || colorStyles.orange;

  return (
    <div className="max-w-4xl mx-auto bg-white text-black p-6 shadow-lg" id="resume-output">
      {/* Header Section */}
      <div className="bg-gray-100 text-black rounded-md p-4 flex items-center gap-3">
        {/* Profile Image */}
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md flex-shrink-0">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Personal Info */}
        <div className="flex-1">
          <PersonalInfoCard {...personalInfoToShow} primaryColor={primaryColor} />
        </div>
      </div>


      {/* Skills Section */}
        {skillsToShow.length > 0 && (
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold ${colors.text} pb-2`}>
              Skills
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <Skills skills={skillsToShow} />
            </div>
          </div>
        )}

      {/* Projects */}
      {projectsToShow.length > 0 && (
        <div className="space-y-2 mt-6">
          <h3 className={`text-xl font-bold ${colors.text} border-b-2 ${colors.border} pb-3`}>Projects</h3>
          <Projects projects={projectsToShow} />
        </div>
      )}

      {/* Work History */}
      {experienceToShow.length > 0 && (
        <div className="space-y-2 mt-6">
          <h3 className={`text-xl font-bold ${colors.text} border-b-2 ${colors.border} pb-3`}>Work History</h3>
          <Work experience={experienceToShow} />
        </div>
      )}

      {/* Education */}
      {educationToShow.length > 0 && (
        <div className="space-y-2 mt-6">
          <h3 className={`text-xl font-bold ${colors.text} border-b-2 ${colors.border} pb-3`}>Education</h3>
          <Education education={educationToShow} />
        </div>
      )}
    </div>
  );
};

export default Template6;
