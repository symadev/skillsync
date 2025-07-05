import Education from "../AllInfo/Education";
import Skills from "../AllInfo/Skills";
import Projects from "../AllInfo/Projects";
import PersonalInfoCard from "../AllInfo/PersonalInfoCard";
import Work from "../AllInfo/Work";

import defaultProfileImage from "../../../assets/images/image.png"; // fallback image

const Template1 = ({ primaryColor = "purple", formData = {} }) => {
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

  // Tailwind এর জন্য safe ক্লাস নেম তৈরি (avoid purge issues)
  const colorText = {
    purple: "text-purple-700",
    green: "text-green-700",
    blue: "text-blue-700",
    orange: "text-orange-600",
  }[primaryColor] || "text-purple-700";

  const colorBorder = {
    purple: "border-purple-700",
    green: "border-green-700",
    blue: "border-blue-700",
    orange: "border-orange-600",
  }[primaryColor] || "border-purple-700";

  // 🛠 Debug: Log the structure to ensure all data is correct
  console.log("[Template1] formData:", {
    name, surname, postcode, email, phone, city, Motivation, country,
    summary, skills, projects, experience, education, profileImage
  });

  return (
    <div
      className={`w-full bg-white text-black border-4 ${colorBorder} px-4 py-4 space-y-3`}
      id="resume-output"
      style={{ minHeight: "600px", width: "100%" }}
    >
      <div className="text-center space-y-3 px-4">
        {/* Name */}
        <h1 className="text-2xl font-bold" style={{ color: primaryColor || '#007BFF' }}>
          {name} {surname}
        </h1>

        {/* Location + Contact Info */}
        <p className="text-gray-600 text-sm">
          {city}, {postcode} {country} | {phone} | {email}
        </p>

       
        {/* Additional Motivation (Optional) */}
        {Motivation && (
          <p className="text-justify  text-gray-600 text-sm leading-relaxed">
            {Motivation}
          </p>
        )}
      </div>

      {/* Skills */}
      {Array.isArray(skills) && skills.length > 0 && (
        <div className="space-y-2">
          <h3 className={`text-xl font-bold ${colorText} border-b-2 ${colorBorder} pb-3`}>
            Skills
          </h3>
          <Skills skills={skills} />
        </div>
      )}

      {/* Projects */}
      {Array.isArray(projects) && projects.length > 0 && (
        <div className="space-y-2">
          <h3 className={`text-xl font-bold ${colorText} border-b-2 ${colorBorder} pb-3`}>
            Projects
          </h3>
          <Projects projects={projects} />
        </div>
      )}

      {/* Work History */}
      {Array.isArray(experience) && experience.length > 0 && (
        <div className="space-y-2">
          <h3 className={`text-xl font-bold ${colorText} border-b-2 ${colorBorder} pb-3`}>
            Work History
          </h3>
          <Work experience={experience} />
        </div>
      )}

      {/* Education */}
      {Array.isArray(education) && education.length > 0 && (
        <div className="space-y-2">
          <h3 className={`text-xl font-bold ${colorText} border-b-2 ${colorBorder} pb-3`}>
            Education
          </h3>
          <Education education={education} />
        </div>
      )}
    </div>
  );
};

export default Template1;