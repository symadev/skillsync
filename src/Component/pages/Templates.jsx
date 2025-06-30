import { useNavigate } from "react-router-dom";
import TemplateCard from "../../Component/pages/TemplateCard";
import templateData from "../../Data/templateData";

const Templates = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gradient-to-br from-black via-gray-800 to-orange-900 rounded-xl shadow-md">
      
      {/* Go Back Button */}
      <div className="mb-6">
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 text-orange-600 hover:text-black transition-colors duration-200 font-medium"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Go Back
        </button>
      </div>

      {/* Title */}
      <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center mb-2 bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
        Choose Your Resume Template
      </h2>

      {/* Subtitle */}
      <p className="text-center text-orange-400 text-sm md:text-base mb-8">
        Stand out with a professionally designed resume – pick a style that fits you.
      </p>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {templateData.map((template) => (
          <div
            key={template.id}
            className="transition-transform transform hover:-translate-y-1 hover:shadow-xl duration-300"
          >
            <TemplateCard template={template} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;