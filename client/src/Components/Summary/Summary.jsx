// Summary.js
import React from 'react';
import { useAppContext } from '../AppContext'; // Adjust the path as needed
import "./Summary.css";
import PageSizeData from '../Data';

function Summary() {
  const { selectedFrontMaterial, selectedPageSizeId, selectedFrontMaterialColour, selectedBackMaterial, selectedBackMaterialColour } = useAppContext();
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
                <div className="summary-color-box" style={{ backgroundColor: selectedFrontMaterialColour }}></div>
              )}
              {!selectedFrontMaterialColour && (
                <p>Please select a color.</p>
              )}
            </div>
          )}
          {selectedBackMaterial && (
            <div className="summary-size">
              <h2>Back Cover</h2>
              <p>{selectedBackMaterial}</p>
              {selectedBackMaterialColour && (
                <div className="summary-color-box" style={{ backgroundColor: selectedBackMaterialColour }}></div>
              )}
              {!selectedBackMaterialColour && (
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
