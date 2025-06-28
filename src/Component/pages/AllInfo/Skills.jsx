const Skills = ({ skills = [], primaryColor = "blue" }) => {
  return (
    <div>
      <h2 className={`text-xl font-bold text-${primaryColor}-700 mb-2`}>Skills</h2>
      <ul className="list-disc list-inside grid grid-cols-2 gap-1 text-sm">
        {skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </div>
  );
};

export default Skills;
