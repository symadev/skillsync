const Education = ({ degree, institution, field, location, graduationDate }) => {
  return (
    <div className="w-full max-w-xl mx-auto mt-4 text-left" >
      {/* Section title aligned left */}
      <h2 className="text-sm font-semibold  pb-1 mb-2">
        Education
      </h2>

      {/* Education details */}
      <div className="text-[10px] text-gray-800 space-y-1">
        <p className="font-medium">
          {institution}, {location}
        </p>
        <p>
          <span className="font-semibold">{degree}</span> in {field} &nbsp; {graduationDate}
        </p>
      </div>
    </div>
  );
};

export default Education;
