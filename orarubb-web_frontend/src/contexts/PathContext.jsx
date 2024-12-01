import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PathContext = createContext(null);

export const PathProvider = ({ children }) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <PathContext.Provider value={{ currentPath, setCurrentPath }}>
      {children}
    </PathContext.Provider>
  );
};

// Custom hook to use the path context
export const usePath = () => {
  const context = useContext(PathContext);
  if (context === null) {
    throw new Error('usePath must be used within a PathProvider');
  }
  return context;
};