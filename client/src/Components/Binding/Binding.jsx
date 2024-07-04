// Binding.js
import React, { useState } from 'react';
import { useAppContext } from '../AppContext';
import './Binding.css';
import WireIcon from '../../Assets/WireIcon.svg';
import SpiralIcon from '../../Assets/SpiralIcon.svg';
import VelvoIcon from '../../Assets/VelvoIcon.svg';
import TapeIcon from '../../Assets/TapeIcon.svg';
import HardcoverIcon from '../../Assets/HardcoverIcon.svg';
import PerfectIcon from '../../Assets/PerfectIcon.svg';

function Binding() {
  const { selectBindingOption, selectedBindingOption } = useAppContext();

  const handleBindingSelect = (bindingOption) => {
    selectBindingOption(bindingOption);
  };

  return (
    <div className="binding-container">
      <h2>Binding</h2>
      <div className="binding-card-container">
        <div
          className={`binding-card ${selectedBindingOption === 'Wire' ? 'selected' : ''}`}
          onClick={() => handleBindingSelect('Wire')}
        >
          <div className="binding-content">
            <img src={WireIcon} alt="Wire binding" />
            <p>Wire</p>
          </div>
        </div>
        <div
          className={`binding-card ${selectedBindingOption === 'Spiral' ? 'selected' : ''}`}
          onClick={() => handleBindingSelect('Spiral')}
        >
          <div className="binding-content">
            <img src={SpiralIcon} alt="Spiral binding" />
            <p>Spiral</p>
          </div>
        </div>
        <div
          className={`binding-card ${selectedBindingOption === 'Velvo' ? 'selected' : ''}`}
          onClick={() => handleBindingSelect('Velvo')}
        >
          <div className="binding-content">
            <img src={VelvoIcon} alt="Velvo binding" />
            <p>Velvo</p>
          </div>
        </div>
        <div
          className={`binding-card ${selectedBindingOption === 'Tape' ? 'selected' : ''}`}
          onClick={() => handleBindingSelect('Tape')}
        >
          <div className="binding-content">
            <img src={TapeIcon} alt="Tape binding" />
            <p>Tape</p>
          </div>
        </div>
        <div
          className={`binding-card ${selectedBindingOption === 'Hardcover' ? 'selected' : ''}`}
          onClick={() => handleBindingSelect('Hardcover')}
        >
          <div className="binding-content">
            <img src={HardcoverIcon} alt="Hardcover binding" />
            <p>Hardcover</p>
          </div>
        </div>
        <div
          className={`binding-card ${selectedBindingOption === 'Perfect' ? 'selected' : ''}`}
          onClick={() => handleBindingSelect('Perfect')}
        >
          <div className="binding-content">
            <img src={PerfectIcon} alt="Perfect binding" />
            <p>Perfect</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Binding;
