import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedPageSizeId, setSelectedPageSizeId] = useState(null);
  const [selectedFrontMaterial, setSelectedFrontMaterial] = useState(null);
  const [selectedFrontMaterialColour, setSelectedFrontMaterialColour] = useState(null);
  const [selectedBackMaterial, setSelectedBackMaterial] = useState(null);

  const selectPageSize = (pageSizeId) => {
    setSelectedPageSizeId(pageSizeId);
  };

  const selectFrontMaterial = (frontMaterial) => {
    setSelectedFrontMaterial(frontMaterial);
  };

  const selectFrontMaterialColour = (frontMaterialColour) => {
    setSelectedFrontMaterialColour(frontMaterialColour);
  }

  return (
    <AppContext.Provider 
    value={{ 
      selectedFrontMaterial, selectFrontMaterial,
      selectedPageSizeId, selectPageSize,
      selectedFrontMaterialColour,selectFrontMaterialColour }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
