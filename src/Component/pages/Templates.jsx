import Template1 from "../../Component/pages/ResumeTemplates/Template1";
import Template2 from "../../Component/pages/ResumeTemplates/Template2";
import TemplateCard from "../../Component/pages/TemplateCard";
import Template3 from "./ResumeTemplates/Template3";
import Template4 from "./ResumeTemplates/Template4";
import Template5 from "./ResumeTemplates/Template5";
import Template6 from "./ResumeTemplates/Template6";

const templateData = [
    {
    id: 6,
    title: "Professional Black",
    component: Template6,
  },
 
  {
    id: 2,
    title: "Clean Gray",
    component: Template2,
  },
  {
    id: 3,
    title: "Simple Black",
    component: Template3,
  },
  {
    id: 4,
    title: "Mordern Black",
    component: Template4,
  },
  {
    id: 5,
    title: "Classic Black",
    component: Template5,
  },

   {
    id: 1,
    title: "Modern Blue",
    component: Template1,
  },
];

const Templates = () => {
  return (
  <div className="p-4 sm:p-6 md:p-10 bg-gradient-to-br from-white via-orange-50 to-yellow-100 rounded-xl shadow-md">
  {/* Title */}
  <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-center mb-2 bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
    Choose Your Resume Template
  </h2>

  {/* Subtitle */}
  <p className="text-center text-gray-600 text-sm md:text-base mb-8">
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
