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
    <div className="p-6 md:p-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Resume Template</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {templateData.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
};

export default Templates;
