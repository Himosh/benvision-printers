import React from 'react';
import { useAppContext } from '../AppContext';
import './Folding.css';
import FoldingOne from '../../Assets/FoldingOne.svg';
import FoldingTwo from '../../Assets/FoldingTwo.svg';
import FoldingThree from '../../Assets/FoldingThree.svg';
import FoldingFour from '../../Assets/FoldingFour.svg';

function Folding() {
  const { selectFoldingOption, selectedFoldingOption } = useAppContext();

  const handleFoldingSelect = (foldingOption) => {
    selectFoldingOption(foldingOption);
  };

  return (
    <div className="folding-container">
      <h2>Folding</h2>
      <div className="folding-card-container">
        <div className={`folding-card ${selectedFoldingOption === 'Folding One' ? 'selected' : ''}`} onClick={() => handleFoldingSelect('Folding One')}>
          <div className="img-wrapper">
            <img src={FoldingOne} alt="Folding One" />
          </div>
        </div>
        <div className={`folding-card ${selectedFoldingOption === 'Folding Two' ? 'selected' : ''}`} onClick={() => handleFoldingSelect('Folding Two')}>
          <div className="img-wrapper">
            <img src={FoldingTwo} alt="Folding Two" />
          </div>
        </div>
        <div className={`folding-card ${selectedFoldingOption === 'Folding Three' ? 'selected' : ''}`} onClick={() => handleFoldingSelect('Folding Three')}>
          <div className="img-wrapper">
            <img src={FoldingThree} alt="Folding Three" />
          </div>
        </div>
        <div className={`folding-card ${selectedFoldingOption === 'Folding Four' ? 'selected' : ''}`} onClick={() => handleFoldingSelect('Folding Four')}>
          <div className="img-wrapper">
            <img src={FoldingFour} alt="Folding Four" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Folding;
