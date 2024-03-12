import React, { createContext, useContext, useState } from 'react';

const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [selectedFont, setSelectedFont] = useState('Inter'); // Default font
  const changeFont = (font) => setSelectedFont(font);

  return (
    <FontContext.Provider value={{ selectedFont, changeFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => {
  return useContext(FontContext);
};
