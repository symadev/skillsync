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

const Template5 = ({ primaryColor = "black" }) => {
  const { formData } = useResume();
  const {
    name = "",
    surname = "",
    phone = "",
    email = "",
    postcode = "",
    country = "",
    city = "",
    summary = "",
    Motivation = "",
    profileImage = "",
    skills = [],
    projects = [],
    experience = [],
    education = [],
  } = formData;

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
    black: {
      headerBg: "bg-black",
      accentBg: "bg-black",
      text: "text-black",
      border: "border-black",
      underline: "border-black",
    },
  };

  const colors = colorStyles[primaryColor] || colorStyles.black;

  // Fallback demo data logic
  const personalInfoToShow =
    name || email || phone ? formData : personalInfo;
  const skillsToShow = skills.length > 0 ? skills : skillsData;
  const projectsToShow = projects.length > 0 ? projects : [projectData];
  const experienceToShow = experience.length > 0 ? experience : [workData];
  const educationToShow = education.length > 0 ? education : [educationInfo];

  return (
    <div className="max-w-4xl mx-auto bg-white text-black shadow-lg" id="resume-output">
     {/* Header */}
      <div className={`${colors.headerBg} text-white p-6 rounded-md`}>
        <div className="flex justify-between items-start text-start">
          {/* Personal Info */}
          <div className="space-y-1 text-white">
            <PersonalInfoCard {...personalInfoToShow} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 py-6 space-y-8">
        {/* Education Section */}
        {educationToShow.length > 0 && (
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold ${colors.text} pb-2`}>
              Education
            </h3>
            <div className="border-l-4 border-gray-200 pl-6">
              <Education education={educationToShow} />
            </div>
          </div>
        )}

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

        {/* Work History Section */}
        {experienceToShow.length > 0 && (
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold ${colors.text} pb-2`}>
              Work History
            </h3>
            <div className="space-y-6">
              <Work experience={experienceToShow} />
            </div>
          </div>
        )}

        {/* Projects Section */}
        {projectsToShow.length > 0 && (
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold ${colors.text} pb-2`}>
              Projects
            </h3>
            <div className="space-y-4">
              <Projects projects={projectsToShow} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Template5;
