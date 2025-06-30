const Projects = ({ projects = [] }) => {
  if (!projects.length) return null;

  return (
    <div className="space-y-4 w-full max-w-2xl mx-auto text-left">
      {projects.map((project, index) => (
        <div key={index} className="rounded-lg space-y-1">
          {/* Title */}
          <p className="text-[10px] font-semibold text-gray-700">
            {project.title}
          </p>

          {/* Description */}
          <p className="text-[10px] italic text-gray-600 mt-1">
            {project.description}
          </p>

          {/* Links */}
          <div className="mt-2 text-[10px] text-gray-700 space-x-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub Repo
              </a>
            )}
            {project.liveDemoLink && (
              <>
                <span>|</span>
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
