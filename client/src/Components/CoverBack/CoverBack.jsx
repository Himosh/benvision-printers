import React, { useState } from 'react';
import { useAppContext } from '../AppContext';
import './CoverBack.css';

function CoverBack() {
  const { selectBackMaterial, selectedBackMaterial, selectBackMaterialColour, selectedBackMaterialColour } = useAppContext();
  const [warningMessage, setWarningMessage] = useState('');

  const handleBackMaterialSelect = (backMaterial) => {
    selectBackMaterial(backMaterial);
    setWarningMessage(''); // Clear the warning message if any
  };

  const handleBackMaterialColourSelect = (backMaterialColour) => {
    if (selectedBackMaterial) {
      selectBackMaterialColour(backMaterialColour);
      setWarningMessage(''); // Clear the warning message if any
    } else {
      setWarningMessage('Please select Paper or Board first.');
    }
  };

  return (
    <div className="copy-container">
      <h2>Cover page Material</h2>
      <h4>Back</h4>
      {warningMessage && <p className="warning-message">{warningMessage}</p>}
      <div className="copy-card-small">
        <div className={`copy-card-small-left ${selectedBackMaterial === 'Paper' ? 'selected' : ''}`} onClick={() => handleBackMaterialSelect('Paper')}>
          <h3>Paper</h3>
        </div>
        <div className={`copy-card-small-right ${selectedBackMaterial === 'Board' ? 'selected' : ''}`} onClick={() => handleBackMaterialSelect('Board')}>
          <h3>Board</h3>
        </div>
      </div>
      <div className="copy-container-card">
        <div className={`copy-card ${selectedBackMaterialColour === '01 Colour' ? 'selected' : ''}`} onClick={() => handleBackMaterialColourSelect('01 Colour')}>
          <h3>01 Colour</h3>
        </div>
        <div className={`copy-card ${selectedBackMaterialColour === '02 Colour' ? 'selected' : ''}`} onClick={() => handleBackMaterialColourSelect('02 Colour')}>
          <h3>02 Colour</h3>
        </div>
        <div className={`copy-card ${selectedBackMaterialColour === '03 Colour' ? 'selected' : ''}`} onClick={() => handleBackMaterialColourSelect('03 Colour')}>
          <h3>03 Colour</h3>
        </div>
        <div className={`copy-card ${selectedBackMaterialColour === '04 Colour' ? 'selected' : ''}`} onClick={() => handleBackMaterialColourSelect('04 Colour')}>
          <h3>04 Colour</h3>
        </div>
      </div>
    </div>
  );
}

export default CoverBack;
