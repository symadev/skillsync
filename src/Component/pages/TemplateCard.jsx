import { useNavigate } from "react-router-dom";
import { useResume } from "../Provider/ResumeContext";
import { useState } from "react";

const TemplateCard = ({ template }) => {
  const navigate = useNavigate();
  const { setTemplateId, setPrimaryColor } = useResume();
  const [selectedColor, setSelectedColor] = useState("purple");

  const handleApply = () => {
    setTemplateId(template.id);
    setPrimaryColor(selectedColor);
    navigate("/resume/templates/from1");
  };

  const PreviewComponent = template.component;

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 mx-auto">
      {/*  Preview Area */}
      <div className="relative h-[300px] overflow-hidden">
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-semibold">
          RECOMMENDED
        </div>
        <div className="h-full overflow-y-auto p-2 bg-white">
          <PreviewComponent primaryColor={selectedColor} />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 py-2 text-lg font-bold text-center text-gray-900 border-t">
        {template.title}
      </div>

       {/*  the color picker  */}
      <div className="px-4 py-2 flex justify-center gap-2 border-t">
        {["blue", "green", "purple", "orange",  "red"].map((color) => (
          <span
            key={color}
            className={`w-5 h-5 rounded-full cursor-pointer border-2 ${
              selectedColor === color ? "border-white" : "border-transparent"
            } ${getColorClass(color)}`}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>

      {/*  Action Button */}
      <button
        className="w-full bg-orange-500 hover:bg-black transition text-white  font-bold py-2 rounded-b"
        onClick={handleApply}
      >
        Use This Template
      </button>
    </div>
  );
};

// Color Helper
const getColorClass = (color) => {
  const colors = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
    orange: "bg-orange-600",
    red: "bg-red-500",
  };
  return colors[color] || "bg-gray-400";
};

export default TemplateCard;
