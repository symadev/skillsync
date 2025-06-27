// src/context/ResumeContext.jsx
import React, { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

const ResumeProvider = ({ children }) => {
  const [templateId, setTemplateId] = useState(null);
  const [primaryColor, setPrimaryColor] = useState("blue"); // ✅ Add this line
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    education: [],
    experience: [],
    skills: [],
    profileImage: "",
  });

  return (
    <ResumeContext.Provider
      value={{
        templateId,
        setTemplateId,
        formData,
        setFormData,
        primaryColor,       // ✅ Added
        setPrimaryColor,    // ✅ Added
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;
