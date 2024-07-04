// AppContext.js
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedPageSizeId, setSelectedPageSizeId] = useState(null);
  const [selectedFrontMaterial, setSelectedFrontMaterial] = useState(null);
  const [selectedFrontMaterialColour, setSelectedFrontMaterialColour] = useState(null);
  const [selectedBackMaterial, setSelectedBackMaterial] = useState(null);
  const [selectedBackMaterialColour, setSelectedBackMaterialColour] = useState(null);
  const [selectedPaperColour, setSelectedPaperColour] = useState(null);
  const [selectedCopySide, setSelectedCopySide] = useState(null);
  const [selectedCopyColour, setSelectedCopyColour] = useState(null);
  const [selectedBindingOption, setSelectedBindingOption] = useState(null);
  const [selectedPaddingOption, setSelectedPaddingOption] = useState(null);
  const [selectedFoldingOption, setSelectedFoldingOption] = useState(null); 
  const [selectedPaperType, setSelectedPaperType] = useState(null); 
  const [selectedStaplingOption, setSelectedStaplingOption] = useState(null);

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

  const selectPaperColour = (paperColour) => {
    setSelectedPaperColour(paperColour);
  };

  const selectCopySide = (copySide) => {
    setSelectedCopySide(copySide);
  };

  const selectCopyColour = (copyColour) => {
    setSelectedCopyColour(copyColour);
  };

  const selectBindingOption = (bindingOption) => {
    setSelectedBindingOption(bindingOption);
  };

  const selectPaddingOption = (paddingOption) => {
    setSelectedPaddingOption(paddingOption);
  };

  const selectFoldingOption = (foldingOption) => {
    setSelectedFoldingOption(foldingOption);
  };

  const selectPaperType = (paperType) => {
    setSelectedPaperType(paperType);
  };

  const selectStaplingOption = (staplingOption) => {
    setSelectedStaplingOption(staplingOption);
  };

  return (
    <AppContext.Provider 
      value={{ 
        selectedPageSizeId, selectPageSize,
        selectedFrontMaterial, selectFrontMaterial,
        selectedFrontMaterialColour, selectFrontMaterialColour,
        selectedBackMaterial, selectBackMaterial,
        selectedBackMaterialColour, selectBackMaterialColour,
        selectedPaperColour, selectPaperColour,
        selectedCopySide, selectCopySide,
        selectedCopyColour, selectCopyColour,
        selectedBindingOption, selectBindingOption,
        selectedPaddingOption, selectPaddingOption,
        selectedFoldingOption, selectFoldingOption,
        selectedPaperType, selectPaperType,
        selectedStaplingOption, selectStaplingOption
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
