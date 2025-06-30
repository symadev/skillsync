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
      {/* Header */}
      <div className={`${colors.headerBg} text-white p-6 rounded-t-md flex items-center gap-6`}>
        {/* Profile Image */}
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Personal Info */}
        <div className="flex-1 text-white">
          <PersonalInfoCard {...personalInfoToShow} />
        </div>
      </div>

      {/* Skills */}
      {skillsToShow.length > 0 && (
        <div className="space-y-2 mt-6">
          <h3 className={`text-xl font-bold ${colors.text} border-b-2 ${colors.border} pb-1`}>Skills</h3>
          <Skills skills={skillsToShow} />
        </div>
      )}

      {/* Projects */}
      {projectsToShow.length > 0 && (
        <div className="space-y-2 mt-6">
          <h3 className={`text-xl font-bold ${colors.text} border-b-2 ${colors.border} pb-1`}>Projects</h3>
          <Projects projects={projectsToShow} />
        </div>
      )}

      {/* Work History */}
      {experienceToShow.length > 0 && (
        <div className="space-y-2 mt-6">
          <h3 className={`text-xl font-bold ${colors.text} border-b-2 ${colors.border} pb-1`}>Work History</h3>
          <Work experience={experienceToShow} />
        </div>
      )}

      {/* Education */}
      {educationToShow.length > 0 && (
        <div className="space-y-2 mt-6">
          <h3 className={`text-xl font-bold ${colors.text} border-b-2 ${colors.border} pb-1`}>Education</h3>
          <Education education={educationToShow} />
        </div>
      )}
    </div>
  );
};

export default Template6;
