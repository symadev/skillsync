const TemplateCard = ({ template }) => {
  return (
    <div className="border rounded shadow hover:shadow-lg transition duration-300 p-4">
      <img src={template.preview} alt={template.title} className="mb-3" />
      <h3 className="text-lg font-semibold">{template.title}</h3>
      <p className="text-sm text-gray-600 capitalize">{template.type} template</p>
      <button className="mt-2 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
        Use Template
      </button>
    </div>
  );
};

export default TemplateCard;
