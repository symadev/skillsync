const Work = ({ jobTitle, company, location, dateRange, responsibilities }) => {
  return (
    <div className="rounded-lg p-3 w-full max-w-xs mx-auto  text-left">
      <div className="space-y-1">
        {/* Title */}
        <h2 className="text-sm font-bold text-gray-800">Work History</h2>

        {/* Position & Company */}
        <p className="text-[10px] font-semibold text-gray-700">{jobTitle}</p>
        <p className="text-[10px] italic text-gray-600">
          {company}, {location} 
          <span className="float-right not-italic">{dateRange}</span>
        </p>
      </div>

      {/* Responsibilities */}
      <ul className="mt-2 list-disc list-inside space-y-1 text-[10px] text-gray-700 leading-tight">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
