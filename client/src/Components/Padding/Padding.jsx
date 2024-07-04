// Padding.js
import React from 'react';
import { useAppContext } from '../AppContext';
import './Padding.css';
import SideGlue from '../../Assets/SideGlue.svg';
import TopGlue from '../../Assets/TopGlue.svg';

function Padding() {
  const { selectPaddingOption, selectedPaddingOption } = useAppContext();

  const handlePaddingSelect = (paddingOption) => {
    selectPaddingOption(paddingOption);
  };

  return (
    <div className="padding-container">
      <h2>Padding</h2>
      <div className="padding-card-container">
        <div className={`padding-card ${selectedPaddingOption === 'Side Glue' ? 'selected' : ''}`} onClick={() => handlePaddingSelect('Side Glue')}>
          <img src={SideGlue} alt="Side Glue" />
        </div>
        <div className={`padding-card ${selectedPaddingOption === 'Top Glue' ? 'selected' : ''}`} onClick={() => handlePaddingSelect('Top Glue')}>
          <img src={TopGlue} alt="Top Glue" />
        </div>
      </div>
    </div>
  );
}

export default Padding;
