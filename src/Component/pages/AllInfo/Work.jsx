const Work = ({ experience = [] }) => {
  if (!experience.length) return null;

  return (
    <div className="space-y-4 w-full max-w-2xl mx-auto text-left">
      {experience.map((job, index) => (
        <div key={index} className="rounded-lg space-y-1">
          <p className="text-[10px] font-semibold text-gray-700">
            {job.jobTitle}
          </p>
          <p className="text-[10px] italic text-gray-600">
            {job.company}, {job.location}
            <span className="float-right not-italic">{job.dateRange}</span>
          </p>

          <ul className="mt-2 list-disc list-inside space-y-1 text-[10px] text-gray-700 leading-tight">
            {job.responsibilities?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Work;
