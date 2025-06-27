
import { useResume } from "../../Provider/ResumeContext";

const Template1 = ({ primaryColor = "blue" }) => {
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

  const colorClass = `border-${primaryColor}-700`;

  return (
    <div className={`max-w-3xl mx-auto p-8 border-4 ${colorClass} bg-white text-black`} id="resume-output">
      {/* Header */}
      <div className="flex justify-between items-start border-b-2 pb-4 mb-4">
        <div className="flex items-center gap-4">
          {profileImage && (
            <img
              src={profileImage}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border border-gray-400"
            />
          )}
          <h1 className="text-3xl font-bold uppercase leading-tight">{name || "Your Name"}</h1>
        </div>
        <div className="text-right text-sm">
          <p>{email || "youremail@example.com"}</p>
          <p>{phone || "+8801XXXXXXXXX"}</p>
        </div>
      </div>

      {/* Summary */}
      <p className="text-sm mb-6">{summary || "Professional summary goes here..."}</p>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="font-bold text-lg text-gray-700 mb-2">Skills</h2>
        <ul className="list-disc list-inside grid grid-cols-2 gap-1">
          {skills?.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="font-bold text-lg text-gray-700 mb-2">Work History</h2>
        {experience?.map((exp, i) => (
          <div key={i} className="mb-3">
            <p className="font-semibold">
              {exp.title || "Job Title"} | {exp.company || "Company"} |{" "}
              <span className="text-sm italic">
                {exp.startDate} - {exp.endDate}
              </span>
            </p>
            <ul className="list-disc list-inside text-sm ml-4">
              {exp.details?.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div>
        <h2 className="font-bold text-lg text-gray-700 mb-2">Education</h2>
        {education?.map((edu, i) => (
          <div key={i}>
            <p className="font-semibold">{edu.degree || "Degree"} – {edu.institution || "Institution"}</p>
            <p className="text-sm italic">{edu.year || "Year"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template1;
