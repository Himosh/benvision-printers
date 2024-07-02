import React from 'react';
import { useAppContext } from '../AppContext';
import "./Summary.css";
import PageSizeData from '../Data';

function Summary() {
  const { selectedFrontMaterial, selectedPageSizeId, selectedFrontMaterialColour } = useAppContext();
  const selectedPageSize = PageSizeData.find(item => item.id === selectedPageSizeId);

  return (
    selectedPageSize && (
      <div className="summary">
        <div className='summary-container'>
          {selectedFrontMaterial && (
            <div className="summary-size">
              <h2>Front Cover</h2>
              <p>{selectedFrontMaterial}</p>
              {selectedFrontMaterialColour && (
                <p>{selectedFrontMaterialColour}</p>
              )}
              {!selectedFrontMaterialColour && (
                <p>Please select a color.</p>
              )}
            </div>
          )}
          <div className="summary-size">
            <h2>Selected Size</h2>
            <p>Size: {selectedPageSize.size}</p>
            <p>Dimensions: {selectedPageSize.width} x {selectedPageSize.height}mm</p>
          </div>
        </div>
      </div>
    )
  );
}

export default Summary;
