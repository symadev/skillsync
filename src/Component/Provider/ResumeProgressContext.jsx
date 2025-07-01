// src/Provider/ResumeProgressContext.jsx
import { createContext, useContext, useState } from 'react';

const ResumeProgressContext = createContext();

export const ResumeProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0); // percentage

  return (
    <ResumeProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ResumeProgressContext.Provider>
  );
};

export const useResumeProgress = () => useContext(ResumeProgressContext);
