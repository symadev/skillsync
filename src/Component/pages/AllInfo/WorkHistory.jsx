const WorkHistory = ({ experience = [], primaryColor = "blue" }) => {
  return (
    <div>
      <h2 className={`text-xl font-bold text-${primaryColor}-700 mb-2`}>Work History</h2>
      {experience.map((exp, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">
            {exp.title || "Job Title"} | {exp.company || "Company"}{" "}
            <span className="italic text-sm">({exp.startDate} - {exp.endDate})</span>
          </p>
          <ul className="list-disc list-inside text-sm ml-5">
            {exp.details?.map((d, j) => <li key={j}>{d}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkHistory;
