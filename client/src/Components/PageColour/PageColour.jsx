// PageColour.js
import './PageColour.css';
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { useAppContext } from '../AppContext';

function PageColour() {
  const { selectPaperColour, selectedPaperColour } = useAppContext();
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleColorClick = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorChange = (color) => {
    selectPaperColour(color.hex);
    setShowColorPicker(false);
  };

  return (
    <div className="colour-container">
      <h2>Colour of paper/envelop</h2>
      <div className="colour-card-container">
        <div className='colour-card-white' onClick={() => selectPaperColour('White')}>
          <div className="colour-box-white"></div>
          <div className="colour-text-content">
            <p>White</p>
          </div>
        </div>
        <div className='colour-card-custom' onClick={handleColorClick}>
          <div className="colour-box-white" style={{ 
            background: selectedPaperColour ? selectedPaperColour : 
              'linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)'
           }}></div>
          <div className="colour-text-content">
            <p>{selectedPaperColour ? selectedPaperColour : 'Custom'}</p>
          </div>
        </div>
      </div>
      {showColorPicker && (
        <div className="color-picker-popup">
          <SketchPicker color={selectedPaperColour || '#ffffff'} onChangeComplete={handleColorChange} />
        </div>
      )}
    </div>
  );
}

export default PageColour;
