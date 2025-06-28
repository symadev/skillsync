const Education = ({ education = [], primaryColor = "blue" }) => {
  return (
    <div>
      <h2 className={`text-xl font-bold text-${primaryColor}-700 mb-2`}>Education</h2>
      {education.map((edu, i) => (
        <div key={i} className="mb-2">
          <p className="font-semibold">{edu.degree || "Degree"} – {edu.institution || "Institution"}</p>
          <p className="text-sm italic">{edu.year || "Year"}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
