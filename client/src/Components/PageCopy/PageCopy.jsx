// PageCopy.js
import React, { useState } from 'react';
import { useAppContext } from '../AppContext';
import './PageCopy.css';

function PageCopy() {
  const { selectCopySide, selectedCopySide, selectCopyColour } = useAppContext();
  const [warningMessage, setWarningMessage] = useState('');

  const handleCopySideSelect = (side) => {
    selectCopySide(side);
    setWarningMessage('');
  };

  const handleCopyColourSelect = (colour) => {
    if (!selectedCopySide) {
      setWarningMessage('Please select One Side or Both Side first.');
    } else {
      selectCopyColour(colour);
      setWarningMessage('');
    }
  };

  return (
    <div className="copy-container">
      <h2>Copies to be printed in</h2>
      {warningMessage && <p className="warning-message">{warningMessage}</p>}
      <div className="copy-card-small">
        <div
          className={`copy-card-small-left ${selectedCopySide === 'One Side' ? 'selected' : ''}`}
          onClick={() => handleCopySideSelect('One Side')}
        >
          <h3>One Side</h3>
        </div>
        <div
          className={`copy-card-small-right ${selectedCopySide === 'Both Side' ? 'selected' : ''}`}
          onClick={() => handleCopySideSelect('Both Side')}
        >
          <h3>Both Side</h3>
        </div>
      </div>
      <div className="copy-container-card">
        <div className="copy-card" onClick={() => handleCopyColourSelect('01 Colour')}>
          <h3>01 Colour</h3>
        </div>
        <div className="copy-card" onClick={() => handleCopyColourSelect('02 Colour')}>
          <h3>02 Colour</h3>
        </div>
        <div className="copy-card" onClick={() => handleCopyColourSelect('03 Colour')}>
          <h3>03 Colour</h3>
        </div>
        <div className="copy-card" onClick={() => handleCopyColourSelect('04 Colour')}>
          <h3>04 Colour</h3>
        </div>
      </div>
    </div>
  );
}

export default PageCopy;
