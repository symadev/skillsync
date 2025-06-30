const Education = ({ education = [] }) => {
  if (!education.length) return null;

  return (
    <div className="space-y-4 w-full max-w-xl mx-auto text-left">
      {education.map((edu, index) => (
        <div key={index} className="text-[10px] text-gray-800 space-y-1">
          <p className="font-medium">
            {edu.institution}, {edu.location}
          </p>
          <p>
            <span className="font-semibold">{edu.degree}</span> in {edu.field} &nbsp; {edu.graduationDate}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Education;
