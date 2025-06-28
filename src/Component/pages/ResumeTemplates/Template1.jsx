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

  } = formData;





  return (
    <div
      className={`w-full bg-white text-black shadow-lg rounded-lg border-4 border-${primaryColor}-700 px-2 py-4 space-y-2`}
      id="resume-output"
    >
      {/* Personal Info */}
      <div className={`space-y-1 `}>
        <PersonalInfoCard {...personalInfo} />
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
    </div>
  );
};

export default Template1;
