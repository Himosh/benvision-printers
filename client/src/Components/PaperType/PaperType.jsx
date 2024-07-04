// PaperType.js
import React from 'react';
import { useAppContext } from '../AppContext';
import './PaperType.css';

function PaperType() {
  const {selectPaperType, selectedPaperType } = useAppContext();

  const handlePaperTypeSelect = (paperType) => {
    selectPaperType(paperType);
  };

  return (
    <div className="paper-type-container">
      <h2>Paper Type</h2>
      <div className="type-card-container">
        <div className={`type-card ${selectedPaperType === '80 gsm' ? 'selected' : ''}`} onClick={() => handlePaperTypeSelect('80 gsm')}>
          <h3>80 gsm</h3>
          <p>Standard</p>
        </div>
        <div className={`type-card ${selectedPaperType === '70 gsm' ? 'selected' : ''}`} onClick={() => handlePaperTypeSelect('70 gsm')}>
          <h3>70 gsm</h3>
          <p>Standard</p>
        </div>
      </div>
    </div>
  );
}

export default PaperType;
