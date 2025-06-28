const Education = ({ degree, institution, field, location, graduationDate }) => {
  return (
    <div className="w-full max-w-xl mx-auto  text-left" >
      {/* Section title aligned left */}
   

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
