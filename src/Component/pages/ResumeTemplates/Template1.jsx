import { useResume } from "../../Provider/ResumeContext";
import Education from "../AllInfo/Education";
import WorkHistory from "../AllInfo/WorkHistory";
import Skills from "../AllInfo/Skills";
import Projects from "../AllInfo/Projects";
import PersonalInfoCard from "../AllInfo/PersonalInfoCard";
import personalInfo from "../../../Data/PersonalInfoData";

const Template1 = ({ primaryColor = "blue" }) => {
  const { formData } = useResume();
  const {
    summary,
    skills,
    experience,
    education,
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

      {/* Professional Summary */}
      <div>
        <h2 className={`text-lg font-semibold text-${primaryColor}-700 border-b-2 border-${primaryColor}-700 pb-1 mb-2`}>
          Professional Summary
        </h2>
        <p className="text-sm leading-relaxed">
          {summary || "Professional summary goes here..."}
        </p>
      </div>

      {/* Skills */}
      {skills && skills.length > 0 && (
        <Skills skills={skills} primaryColor={primaryColor} />
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <Projects projects={projects} primaryColor={primaryColor} />
      )}

      {/* Work History */}
      {experience && experience.length > 0 && (
        <WorkHistory experience={experience} primaryColor={primaryColor} />
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <Education education={education} primaryColor={primaryColor} />
      )}
    </div>
  );
};

export default Template1;
