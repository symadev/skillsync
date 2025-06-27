import { useNavigate } from "react-router-dom";

const HomeMain = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to Resume Builder</h1>
      <button
        onClick={() => navigate("/templates")}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Choose Template
      </button>
    </div>
  );
};

export default HomeMain;
