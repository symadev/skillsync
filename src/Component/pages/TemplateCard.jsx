import { useNavigate } from "react-router-dom";
import { useResume } from "../Provider/ResumeContext";

const TemplateCard = ({ template }) => {
  const navigate = useNavigate();
  const { setTemplateId } = useResume();

  const handleApply = () => {
    setTemplateId(template.id); // context-এ template id সেট করো
    navigate("/form"); // form fill page এ যাও
  };

  return (
    <div className="border rounded shadow p-4 bg-white text-black">
      <img
        src={template.preview}
        alt={template.title}
        className="w-full h-64 object-cover rounded"
      />
      <h3 className="mt-4 font-bold text-lg">{template.title}</h3>

      <div className="mt-2 flex gap-2">
        {/* কালার অপশন */}
        {["blue", "green", "purple", "orange"].map((color) => (
          <span
            key={color}
            className={`w-5 h-5 rounded-full bg-${color}-600 cursor-pointer`}
          ></span>
        ))}
      </div>

      <button
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-black"
        onClick={handleApply}
      >
        Use This Template
      </button>
    </div>
  );
};

export default TemplateCard;
