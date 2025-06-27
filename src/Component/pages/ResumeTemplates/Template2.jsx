
import { useResume } from "../../Provider/ResumeContext";

const Template2 = ({ primaryColor = "purple" }) => {
  const { formData } = useResume();
  const {
    name,
    email,
    phone,
    summary,
    skills,
    experience,
    education,
    profileImage,
  } = formData;

  const colorStyles = {
    purple: {
      headerBg: "bg-purple-700",
      text: "text-purple-700",
    },
    green: {
      headerBg: "bg-green-700",
      text: "text-green-700",
    },
    blue: {
      headerBg: "bg-blue-700",
      text: "text-blue-700",
    },
    orange: {
      headerBg: "bg-orange-600",
      text: "text-orange-600",
    },
  };

  const colors = colorStyles[primaryColor] || colorStyles.purple;

  return (
    <div className="max-w-3xl mx-auto bg-white text-black p-6 shadow-lg" id="resume-output">
      {/* Header */}
      <div className={`${colors.headerBg} text-white p-6 rounded-t-md`}>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold uppercase">{name || "Your Name"}</h1>
            <p>{email || "you@example.com"}</p>
            <p>{phone || "+8801XXXXXXX"}</p>
          </div>
          {profileImage && (
            <img
              src={profileImage}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border border-white"
            />
          )}
        </div>
      </div>

      {/* Summary */}
      <div className="p-4">
        <h2 className={`text-xl font-bold mb-2 ${colors.text}`}>Professional Summary</h2>
        <p className="text-sm">{summary || "Write a short summary about yourself..."}</p>
      </div>

      {/* Skills */}
      <div className="p-4">
        <h2 className={`text-xl font-bold mb-2 ${colors.text}`}>Skills</h2>
        <ul className="list-disc list-inside grid grid-cols-2 gap-x-4 text-sm">
          {skills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <div className="p-4">
        <h2 className={`text-xl font-bold mb-2 ${colors.text}`}>Work Experience</h2>
        {experience?.map((exp, index) => (
          <div key={index} className="mb-3">
            <p className="font-semibold">
              {exp.title || "Job Title"} @ {exp.company || "Company"}{" "}
              <span className="italic text-sm">
                ({exp.startDate} - {exp.endDate})
              </span>
            </p>
            <ul className="list-disc list-inside text-sm ml-4">
              {exp.details?.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="p-4">
        <h2 className={`text-xl font-bold mb-2 ${colors.text}`}>Education</h2>
        {education?.map((edu, index) => (
          <div key={index}>
            <p className="font-semibold">{edu.degree || "Degree"} – {edu.institution || "University"}</p>
            <p className="text-sm italic">{edu.year || "Year"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template2;
