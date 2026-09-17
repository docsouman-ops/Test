import React, { createContext, useContext, useState, useEffect } from 'react';

interface ScaleModeContextType {
  isScaleMode: boolean;
  toggleScaleMode: () => void;
  setScaleMode: (active: boolean) => void;
}

const ScaleModeContext = createContext<ScaleModeContextType | undefined>(undefined);

export const ScaleModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScaleMode, setIsScaleMode] = useState<boolean>(false);

  useEffect(() => {
    if (isScaleMode) {
      document.documentElement.classList.add('scale-mode-active');
      document.body.classList.add('scale-mode-active');
    } else {
      document.documentElement.classList.remove('scale-mode-active');
      document.body.classList.remove('scale-mode-active');
    }

    return () => {
      document.documentElement.classList.remove('scale-mode-active');
      document.body.classList.remove('scale-mode-active');
    };
  }, [isScaleMode]);

  const toggleScaleMode = () => {
    setIsScaleMode((prev) => !prev);
  };

  const setScaleMode = (active: boolean) => {
    setIsScaleMode(active);
  };

  return (
    <ScaleModeContext.Provider value={{ isScaleMode, toggleScaleMode, setScaleMode }}>
      {children}
    </ScaleModeContext.Provider>
  );
};

export const useScaleMode = () => {
  const context = useContext(ScaleModeContext);
  if (!context) {
    throw new Error('useScaleMode must be used within a ScaleModeProvider');
  }
  return context;
};
