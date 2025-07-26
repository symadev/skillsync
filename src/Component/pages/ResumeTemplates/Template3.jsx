import { useResume } from "../../Provider/ResumeContext";




import Education from "../AllInfo/Education";
import Skills from "../AllInfo/Skills";
import Projects from "../AllInfo/Projects";
import PersonalInfoCard from "../AllInfo/PersonalInfoCard";
import Work from "../AllInfo/Work";

import personalInfo from "../../../Data/PersonalInfoData";
import educationInfo from "../../../Data/educationInfo";
import skillsData from "../../../Data/skills";
import projectData from "../../../Data/projectData";
import workData from "../../../Data/workData";

const Template3 = ({ primaryColor = "black" }) => {
  const { formData } = useResume();
  const {
    name = '',
    surname = '',
    email = '',
    phone = '',
    city = '',
    postcode = '',
    country = '',
    profileImage: uploadedImage,
    summary = '',
    Motivation = '',
    skills = [],
    projects = [],
    experience = [],
    education = [],
  } = formData;

  const colorStyles = {
    purple: { headerBg: "bg-purple-700", text: "text-purple-700" },
    green: { headerBg: "bg-green-700", text: "text-green-700" },
    blue: { headerBg: "bg-blue-700", text: "text-blue-700" },
    orange: { headerBg: "bg-orange-600", text: "text-orange-600" },
    black: { headerBg: "bg-black", text: "text-black" },
  };

  const colors = colorStyles[primaryColor] || colorStyles.black;

  // Use form data if available, otherwise fallback
  const personalInfoToShow = name || email || phone
    ? { name: `${name} ${surname}`, email, phone, city, postcode, country, profileImage: uploadedImage, summary, Motivation }
    : personalInfo;

  const skillsToShow = skills.length > 0 ? skills : skillsData;
  const projectsToShow = projects.length > 0 ? projects : [projectData];
  const experienceToShow = experience.length > 0 ? experience : [workData];
  const educationToShow = education.length > 0 ? education : [educationInfo];

  return (
    <div
      className="max-w-4xl mx-auto bg-white text-black shadow rounded-lg overflow-hidden flex flex-col md:flex-row p-4 gap-4"
      id="resume-output"
    >
      {/* Sidebar */}
      <aside className="w-full md:w-1/3 bg-gray-100 rounded-md p-3">
        <div className="flex justify-center">
          <img
            src={uploadedImage || "/assets/image.png"}
            alt="Profile"
            className={`w-28 h-28 rounded-full object-cover border-4 ${colors.text} shadow`}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-2/3 flex flex-col space-y-4">
        <div className="space-y-1">
          <PersonalInfoCard {...personalInfoToShow} primaryColor={primaryColor} />
        </div>

        {skillsToShow.length > 0 && (
          <div>
            <h3 className={`text-lg font-semibold ${colors.text} border-b pb-3`}>Skills</h3>
            <Skills skills={skillsToShow} />
          </div>
        )}

        {projectsToShow.length > 0 && (
          <div>
            <h3 className={`text-lg font-semibold ${colors.text} border-b pb-3`}>Projects</h3>
            <Projects projects={projectsToShow} />
          </div>
        )}

        {experienceToShow.length > 0 && (
          <div>
            <h3 className={`text-lg font-semibold ${colors.text} border-b pb-3`}>Work History</h3>
            <Work experience={experienceToShow} />
          </div>
        )}

        {educationToShow.length > 0 && (
          <div>
            <h3 className={`text-lg font-semibold ${colors.text} border-b pb-3`}>Education</h3>
            <Education education={educationToShow} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Template3;
