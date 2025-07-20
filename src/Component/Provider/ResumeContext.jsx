// src/context/ResumeContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import profileImage from "../../assets/images/image.png";

// Import demo data for now
import personalInfo from "../../Data/PersonalInfoData";
import educationInfo from "../../Data/educationInfo";
import skillsData from "../../Data/skills";
import projectData from "../../Data/projectData";
import workData from "../../Data/workData";

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

const ResumeProvider = ({ children }) => {
  const [templateId, setTemplateId] = useState(null);
  const [primaryColor, setPrimaryColor] = useState("blue");

  const [formData, setFormData] = useState({
    name: "",
    surname: '',
    email: "",
    phone: "",
    city: "",
    postcode: "",
    country: "",
    summary: "",
    profileImage: "",
    education: [],     //  FIXED: must be array
    experience: [],    
    projects: [],     
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      ...personalInfo,
      education: educationInfo,
      experience: workData,
      skills: skillsData,
      projects: projectData,
      profileImage: profileImage,
      summary: "Motivated Sales Associate with 5 years of experience boosting sales and customer loyalty.",
    }));
  }, []);

  return (
    <ResumeContext.Provider
      value={{
        templateId,
        setTemplateId,
        formData,
        setFormData,
        primaryColor,
        setPrimaryColor,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;
