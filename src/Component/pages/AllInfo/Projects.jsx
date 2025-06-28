const Projects = ({ projects = [], primaryColor = "blue" }) => {
  return (
    <div>
      <h2 className={`text-xl font-bold text-${primaryColor}-700 mb-2`}>Projects</h2>
      {projects.map((project, i) => (
        <div key={i} className="mb-3">
          <p className="font-semibold">{project.title || "Project Title"}</p>
          <p className="text-sm">{project.description || "Project description..."}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
