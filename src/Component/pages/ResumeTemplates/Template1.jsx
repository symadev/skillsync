import Education from "../AllInfo/Education";
import Skills from "../AllInfo/Skills";
import Projects from "../AllInfo/Projects";
import Work from "../AllInfo/Work";

const Template1 = ({ primaryColor = "black", formData = {}, isForATS = false }) => {
  const {
    name = '',
    surname = '',
    postcode = '',
    email = '',
    phone = '',
    city = '',
    Motivation = '',
    country = '',
    summary = '',
    skills = [],
    projects = [],
    experience = [],
    education = [],
    profileImage = ''
  } = formData;

  const colorText = {
    purple: "text-purple-700",
    green: "text-green-700",
    blue: "text-blue-700",
    orange: "text-orange-600",
    red: "text-red-500",
  }[primaryColor] || "text-purple-700";

  const colorBorder = {
    purple: "border-purple-700",
    green: "border-green-700",
    blue: "border-blue-700",
    orange: "border-orange-600",
    red: "border-red-500",
  }[primaryColor] || "border-black";

  console.log("[Template1] formData:", {
    name, surname, postcode, email, phone, city, Motivation, country,
    summary, skills, projects, experience, education, profileImage
  });

  return (
    <div
      className={`w-full bg-white text-black ${!isForATS ? `border-4 ${colorBorder}` : ''} px-4 py-4 space-y-3`}
      id="resume-output"
      style={{ minHeight: "700px", width: "100%" }}
    >
      <header className="text-center space-y-3 px-4">
        <h1 className="text-2xl font-bold" style={{ color: primaryColor || '#007BFF' }}>
          {name} {surname}
        </h1>
        <p className="text-gray-900 text-sm">
          {city}, {postcode} {country} | {phone} | {email}
        </p>
      </header>

      {/* Summary Section */}
      {Motivation && (
        <section aria-labelledby="summary-heading">
          <h3 id="summary-heading" className={`text-xl font-bold ${colorText} border-b-2 ${colorBorder} pb-3`}>
            Summary
          </h3>
          <p className="text-justify text-gray-900 text-sm leading-relaxed">
            {Motivation}
          </p>
        </section>
      )}

      {/* Skills */}
      {Array.isArray(skills) && skills.length > 0 && (
        <section aria-labelledby="skills-heading" className="space-y-2">
          <h3 id="skills-heading" className={`text-lg font-bold ${colorText} border-b-2 ${colorBorder} pb-3`}>
            Skills
          </h3>
          <Skills skills={skills} />
        </section>
      )}

      {/* Projects */}
      {Array.isArray(projects) && projects.length > 0 && (
        <section aria-labelledby="projects-heading" className="space-y-2">
          <h3 id="projects-heading" className={`text-xl font-bold ${colorText} border-b-2 ${colorBorder} pb-3`}>
            Projects
          </h3>
          <Projects projects={projects} />
        </section>
      )}

      {/* Work History */}
      {Array.isArray(experience) && experience.length > 0 && (
        <section aria-labelledby="work-heading" className="space-y-2">
          <h3 id="work-heading" className={`text-xl font-bold ${colorText} border-b-2 ${colorBorder} pb-3`}>
            Work History
          </h3>
          <Work experience={experience} />
        </section>
      )}

      {/* Education */}
      {Array.isArray(education) && education.length > 0 && (
        <section aria-labelledby="education-heading" className="space-y-2">
          <h3 id="education-heading" className={`text-xl font-bold ${colorText} border-b-2 ${colorBorder} pb-3`}>
            Education
          </h3>
          <Education education={education} />
        </section>
      )}
    </div>
  );
};

export default Template1;
