const Projects = ({ title, description, githubLink, liveDemoLink }) => {
  return (
    <div className="rounded-lg w-full max-w-xs mx-auto   text-left">
      <div className="space-y-1">
        {/* Title */}
       

        {/* Project Title */}
        <p className="text-[10px] font-semibold text-gray-700">{title}</p>

        {/* Description */}
        <p className="text-[10px] italic text-gray-600 mt-1">{description}</p>
      </div>

      {/* Links */}
      <div className="mt-2 text-[10px] text-gray-700 space-x-2">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub Repo
        </a>
        <span>|</span>
        <a
          href={liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default Projects;
