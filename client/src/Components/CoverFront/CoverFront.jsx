import React, { useState } from 'react';
import { useAppContext } from '../AppContext';
import './CoverFront.css';

function CoverFront() {
  const { selectFrontMaterial, selectedFrontMaterial, selectFrontMaterialColour, selectedFrontMaterialColour } = useAppContext();
  const [warningMessage, setWarningMessage] = useState('');

  const handleFrontMaterialSelect = (frontMaterial) => {
    selectFrontMaterial(frontMaterial);
    setWarningMessage(''); 
  };

  const handleFrontMaterialColourSelect = (frontMaterialColour) => {
    if (selectedFrontMaterial) {
      selectFrontMaterialColour(frontMaterialColour);
      setWarningMessage('');
    } else {
      setWarningMessage('Please select Paper or Board first.');
    }
  };

  return (
    <div className="copy-container">
      <h2>Cover page Material</h2>
      <h4>Front</h4>
      {warningMessage && <p className="warning-message">{warningMessage}</p>}
      <div className="copy-card-small">
        <div className={`copy-card-small-left ${selectedFrontMaterial === 'Paper' ? 'selected' : ''}`} onClick={() => handleFrontMaterialSelect('Paper')}>
          <h3>Paper</h3>
        </div>
        <div className={`copy-card-small-right ${selectedFrontMaterial === 'Board' ? 'selected' : ''}`} onClick={() => handleFrontMaterialSelect('Board')}>
          <h3>Board</h3>
        </div>
      </div>
      <div className="copy-container-card">
        <div className={`copy-card ${selectedFrontMaterialColour === '01 Colour' ? 'selected' : ''}`} onClick={() => handleFrontMaterialColourSelect('01 Colour')}>
          <h3>01 Colour</h3>
        </div>
        <div className={`copy-card ${selectedFrontMaterialColour === '02 Colour' ? 'selected' : ''}`} onClick={() => handleFrontMaterialColourSelect('02 Colour')}>
          <h3>02 Colour</h3>
        </div>
        <div className={`copy-card ${selectedFrontMaterialColour === '03 Colour' ? 'selected' : ''}`} onClick={() => handleFrontMaterialColourSelect('03 Colour')}>
          <h3>03 Colour</h3>
        </div>
        <div className={`copy-card ${selectedFrontMaterialColour === '04 Colour' ? 'selected' : ''}`} onClick={() => handleFrontMaterialColourSelect('04 Colour')}>
          <h3>04 Colour</h3>
        </div>
      </div>
    </div>
  );
}

export default CoverFront;
