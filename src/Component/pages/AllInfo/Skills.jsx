const Skills = ({ skills = [] }) => {
  if (!skills.length) return null;

  return (
    <div className="rounded-lg w-full max-w-xs mx-auto text-left">
      <ul className="mt-2 list-disc list-inside space-y-1 text-[10px] text-gray-700 leading-tight">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
