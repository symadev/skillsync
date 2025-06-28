import { useResume } from "../../Provider/ResumeContext";
import Education from "../AllInfo/Education";

import Skills from "../AllInfo/Skills";
import Projects from "../AllInfo/Projects";
import PersonalInfoCard from "../AllInfo/PersonalInfoCard";
import personalInfo from "../../../Data/PersonalInfoData";
import educationInfo from "../../../Data/educationInfo";
import Work from "../AllInfo/Work";
import workData from "../../../Data/workData";
import skillsData from "../../../Data/skills";
import projectData from "../../../Data/projectData";

const Template1 = ({ primaryColor = "blue" }) => {
  const { formData } = useResume();
  const {

    skills,

    projects,
  } = formData;

  return (
    <div
      className={`w-full max-w-3xl mx-auto bg-white text-black shadow-lg rounded-lg border-4 border-${primaryColor}-700 px-6 py-8 space-y-6`}
      id="resume-output"
    >
      {/* Personal Info */}
      <div className="text-center space-y-1">
        <PersonalInfoCard {...personalInfo} />
      </div>



      {/* Skills */}
      <div className="text-center space-y-1">
        <Skills  {...skillsData} />
      </div>


      {/* Projects */}
      <div className="text-center space-y-1">
        <Projects {...projectData} />

      </div>


      {/* Work History */}

      <div className="text-center space-y-1">
        <Work {...workData} />
      </div>

      {/* Personal Info */}
      <div className="text-center space-y-1">
        <Education {...educationInfo} />
      </div>
    </div>
  );
};

export default Template1;
