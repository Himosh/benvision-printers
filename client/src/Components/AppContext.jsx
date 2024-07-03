// AppContext.js
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedPageSizeId, setSelectedPageSizeId] = useState(null);
  const [selectedFrontMaterial, setSelectedFrontMaterial] = useState(null);
  const [selectedFrontMaterialColour, setSelectedFrontMaterialColour] = useState(null);
  const [selectedBackMaterial, setSelectedBackMaterial] = useState(null);
  const [selectedBackMaterialColour, setSelectedBackMaterialColour] = useState(null);

  const selectPageSize = (pageSizeId) => {
    setSelectedPageSizeId(pageSizeId);
  };

  const selectFrontMaterial = (frontMaterial) => {
    setSelectedFrontMaterial(frontMaterial);
  };

  const selectFrontMaterialColour = (frontMaterialColour) => {
    setSelectedFrontMaterialColour(frontMaterialColour);
  };

  const selectBackMaterial = (backMaterial) => {
    setSelectedBackMaterial(backMaterial);
  };

  const selectBackMaterialColour = (backMaterialColour) => {
    setSelectedBackMaterialColour(backMaterialColour);
  };

  return (
    <AppContext.Provider 
      value={{ 
        selectedPageSizeId, selectPageSize,
        selectedFrontMaterial, selectFrontMaterial,
        selectedFrontMaterialColour, selectFrontMaterialColour,
        selectedBackMaterial, selectBackMaterial,
        selectedBackMaterialColour, selectBackMaterialColour
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
