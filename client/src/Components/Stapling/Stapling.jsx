// Stapling.js
import React from 'react';
import { useAppContext } from '../AppContext';
import './Stapling.css';
import StaplingOne from '../../Assets/StaplingOne.svg';
import StaplingTwo from '../../Assets/StaplingTwo.svg';
import StaplingThree from '../../Assets/StaplingThree.svg';

function Stapling() {
  const { selectStaplingOption, selectedStaplingOption } = useAppContext();

  const handleStaplingSelect = (staplingOption) => {
    selectStaplingOption(staplingOption);
  };

  return (
    <div className="stapling-container">
      <h2>Stapling</h2>
      <div className="stapling-card-container">
        <div className={`stapling-card ${selectedStaplingOption === 'Stapling One' ? 'selected' : ''}`} onClick={() => handleStaplingSelect('Stapling One')}>
          <img src={StaplingOne} alt="Stapling One" />
        </div>
        <div className={`stapling-card ${selectedStaplingOption === 'Stapling Two' ? 'selected' : ''}`} onClick={() => handleStaplingSelect('Stapling Two')}>
          <img src={StaplingTwo} alt="Stapling Two" />
        </div>
        <div className={`stapling-card ${selectedStaplingOption === 'Stapling Three' ? 'selected' : ''}`} onClick={() => handleStaplingSelect('Stapling Three')}>
          <img src={StaplingThree} alt="Stapling Three" />
        </div>
      </div>
    </div>
  );
}

export default Stapling;
