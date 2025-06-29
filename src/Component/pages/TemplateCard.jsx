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
    navigate("/dashboard/templates/from1");
  };

  const PreviewComponent = template.component;

  return (
    <div className="w-[350px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
      {/* ✅ Preview Area */}
      <div className="relative h-[480px] overflow-hidden">
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-semibold">
          RECOMMENDED
        </div>
        <div className="h-full overflow-y-auto p-2 bg-white">
          <PreviewComponent primaryColor={selectedColor} />
        </div>
      </div>

      {/* ✅ Title */}
      <div className="px-4 py-2 text-lg font-bold text-center text-gray-700 border-t">
        {template.title}
      </div>

      {/* 🎨 Color Picker */}
      <div className="px-4 py-2 flex justify-center gap-2 border-t">
        {["blue", "green", "purple", "orange", "gray"].map((color) => (
          <span
            key={color}
            className={`w-5 h-5 rounded-full cursor-pointer border-2 ${
              selectedColor === color ? "border-black" : "border-transparent"
            } ${getColorClass(color)}`}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>

      {/* 🟠 Action Button */}
      <button
        className="w-full bg-orange-600 hover:bg-black transition text-white py-2 rounded-b"
        onClick={handleApply}
      >
        Use This Template
      </button>
    </div>
  );
};

// ✅ Color Helper
const getColorClass = (color) => {
  const colors = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    orange: "bg-orange-600",
    gray: "bg-gray-600",
  };
  return colors[color] || "bg-gray-300";
};

export default TemplateCard;
