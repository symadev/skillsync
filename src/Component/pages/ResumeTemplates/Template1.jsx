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
    <div
      className={`w-full max-w-3xl mx-auto bg-white text-black shadow-lg rounded-lg border-4 ${colorClass} px-8 py-10 space-y-6`}
      id="resume-output"
    >
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-6">
        <div className="flex items-center gap-5">
          {profileImage && (
            <img
              src={profileImage}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border border-gray-400"
            />
          )}
          <div>
            <h1 className="text-3xl font-bold uppercase">{name || "Your Name"}</h1>
            <p className="text-sm">{email || "youremail@example.com"}</p>
            <p className="text-sm">{phone || "+8801XXXXXXXXX"}</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className={`text-xl font-bold text-${primaryColor}-700 mb-2`}>Professional Summary</h2>
        <p className="text-sm">{summary || "Professional summary goes here..."}</p>
      </div>

      {/* Skills */}
      <div>
        <h2 className={`text-xl font-bold text-${primaryColor}-700 mb-2`}>Skills</h2>
        <ul className="list-disc list-inside grid grid-cols-2 gap-1 text-sm">
          {skills?.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <div>
        <h2 className={`text-xl font-bold text-${primaryColor}-700 mb-2`}>Work History</h2>
        {experience?.map((exp, i) => (
          <div key={i} className="mb-4">
            <p className="font-semibold">
              {exp.title || "Job Title"} | {exp.company || "Company"}{" "}
              <span className="italic text-sm">
                ({exp.startDate} - {exp.endDate})
              </span>
            </p>
            <ul className="list-disc list-inside text-sm ml-5">
              {exp.details?.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div>
        <h2 className={`text-xl font-bold text-${primaryColor}-700 mb-2`}>Education</h2>
        {education?.map((edu, i) => (
          <div key={i} className="mb-2">
            <p className="font-semibold">
              {edu.degree || "Degree"} – {edu.institution || "Institution"}
            </p>
            <p className="text-sm italic">{edu.year || "Year"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template1;
