const Skills = () => {
  return (
    <div className=" rounded-lg p-3 w-full max-w-xs mx-auto text-left">
      <div className="space-y-1">
        {/* Section Title */}
        <h2 className="text-sm font-bold text-gray-800">Skills</h2>
      </div>

      {/* Skills List */}
      <ul className="mt-2 list-disc list-inside space-y-1 text-[10px] text-gray-700 leading-tight">
        <li>React.js</li>
        <li>Node.js</li>
        <li>Java</li>
        <li>Python</li>
        <li>State Management</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
};

export default Skills;
