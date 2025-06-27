import Template1 from "../../Component/pages/ResumeTemplates/Template1";
import Template2 from "../../Component/pages/ResumeTemplates/Template2";

import TemplateCard from "../../Component/pages/TemplateCard";

const templateData = [
  {
    id: 1,
    title: "Modern Blue",
    component: Template1,
  },
  {
    id: 1,
    title: "Modern Blue",
    component: Template2,
  }
];
 

const Templates = () => {
    return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">Choose Your Resume Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templateData.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
};

export default Templates;