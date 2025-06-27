import TemplateCard from "../../Component/TemplateCard";
const templateData = [
  { id: 1, title: "Creative Modern", type: "creative", preview: "url1" },
  { id: 2, title: "Professional", type: "professional", preview: "url2" },
  { id: 3, title: "Simple Clean", type: "simple", preview: "url3" },
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