// src/context/ResumeContext.jsx
import React, { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

const ResumeProvider = ({ children }) => {
  const [templateId, setTemplateId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    education: [],
    experience: [],
    skills: [],
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-orange-600 text-white">
      <ResumeContext.Provider
        value={{
          templateId,
          setTemplateId,
          formData,
          setFormData,
        }}
      >
        {children}
      </ResumeContext.Provider>
    </div>
  );
};

export default ResumeProvider;
