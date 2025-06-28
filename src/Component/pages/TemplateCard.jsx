import { useNavigate } from "react-router-dom";
import { useResume } from "../Provider/ResumeContext";
import { useState } from "react";

const TemplateCard = ({ template }) => {
  const navigate = useNavigate();
  const { setTemplateId, setPrimaryColor } = useResume();
  const [selectedColor, setSelectedColor] = useState("blue");

  const handleApply = () => {
    setTemplateId(template.id);
    setPrimaryColor(selectedColor);
    navigate("/form");
  };

  const PreviewComponent = template.component;

  return (
    <div className=" shadow p-2 text-black">
      {/* ✅ Live Component Preview */}
      <div className="h-[350px] overflow-auto border rounded p-2">
        <PreviewComponent primaryColor={selectedColor} />
      </div>

      <h3 className="mt-4 font-bold text-lg">{template.title}</h3>

      {/* 🎨 Color Selection */}
      <div className="mt-2 flex gap-2">
        {["blue", "green", "purple", "orange","yellow"].map((color) => (
          <span
            key={color}
            className={`w-5 h-5 rounded-full cursor-pointer border-2 ${
              selectedColor === color ? "border-black" : "border-transparent"
            } ${getColorClass(color)}`}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>

      <button
        className="mt-4 w-full bg-orange-600 text-white py-2 rounded hover:bg-black transition"
        onClick={handleApply}
      >
        Use This Template
      </button>
    </div>
  );
};

// ✅ Helper function for Tailwind-safe class
const getColorClass = (color) => {
  const colors = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    orange: "bg-orange-600",
    yellow: "bg-yellow-300",
  };
  return colors[color] || "bg-gray-300";
};

export default TemplateCard;
