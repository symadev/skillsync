const Education = ({ education = [] }) => {
  if (!education.length) return null;

  return (
    <section aria-labelledby="education-heading" className="space-y-2 text-left">
 
  <div className="space-y-4 w-full text-left">
    {education.map((edu, index) => (
      <div key={index} className="text-sm  space-y-1 leading-tight">
        <p className="font-semibold">
          {edu.institution}{edu.location ? `, ${edu.location}` : ""}
        </p>
        <p>
          <span className="font-semibold">{edu.degree}</span>
          {edu.field && <> in {edu.field}</>}
          {edu.graduationDate && (
            <span className="ml-2 text-gray-600">{edu.graduationDate}</span>
          )}
        </p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Education;
