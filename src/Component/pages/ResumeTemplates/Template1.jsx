import Education from "../AllInfo/Education";
import Skills from "../AllInfo/Skills";
import Projects from "../AllInfo/Projects";
import PersonalInfoCard from "../AllInfo/PersonalInfoCard";
import Work from "../AllInfo/Work";

const Template1 = ({ primaryColor, formData = {} }) => {
  const {
    name = '',
    surname = '',
    postcode = '',
    email = '',
    phone = '',
    city = '',
    Motivation='',

    country = '',
    summary = '',
    skills = [],
    projects = [],
    experience = [],
    education = [],
    profileImage = ''
  } = formData;



  return (
    <div
      className={`w-full bg-white text-black border-4 border-${primaryColor}-700 px-4 py-4 space-y-3`}
      id="resume-output"
      style={{ minHeight: "600px", width: "100%" }}
    >
      {/* Personal Info */}
      <div className={`space-y-1`}>
        <PersonalInfoCard
          name={`${name} ${surname}`}
          email={email}
          phone={phone}
          city={city}
           Motivation={Motivation}
          postcode={postcode}
          country={country}
          profileImage={profileImage}
          summary={summary}
          primaryColor={primaryColor}
        />
      </div>

      {/* Skills */}
      {skills?.length > 0 && (
        <div className="space-y-2">
          <h3
            className={`text-xl font-bold text-${primaryColor}-700 border-b-2 border-${primaryColor}-700 pb-1`}
          >
            Skills
          </h3>
          <Skills skills={skills} />
        </div>
      )}

      {/* Projects */}
      {projects && (
        <div className="space-y-2">
          <h3
            className={`text-xl font-bold text-${primaryColor}-700 border-b-2 border-${primaryColor}-700 pb-1`}
          >
            Projects
          </h3>
          <Projects projects={projects} />
        </div>
      )}

      {/* Work History */}
      {experience && (
        <div className="space-y-2">
          <h3
            className={`text-xl font-bold text-${primaryColor}-700 border-b-2 border-${primaryColor}-700 pb-1`}
          >
            Work History
          </h3>
          <Work experience={experience} />
        </div>
      )}

      {/* Education */}
      {education && (
        <div className="space-y-2">
          <h3
            className={`text-xl font-bold text-${primaryColor}-700 border-b-2 border-${primaryColor}-700 pb-1`}
          >
            Education
          </h3>
          <Education education={education} />
        </div>
      )}
    </div>
  );
};

export default Template1;
