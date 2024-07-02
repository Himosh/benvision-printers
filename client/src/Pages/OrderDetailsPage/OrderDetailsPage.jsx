import React, { useState } from 'react';
import PageSize from '../../Components/PageSize/PageSize';
import PageColour from '../../Components/PageColour/PageColour';
import PageCopy from '../../Components/PageCopy/PageCopy';
import "./OrderDetailsPage.css";
import CoverFront from '../../Components/CoverFront/CoverFront';
import CoverBack from '../../Components/CoverBack/CoverBack';
import Binding from '../../Components/Binding/Binding';
import Stapling from '../../Components/Stapling/Stapling';
import Padding from '../../Components/Padding/Padding';
import PaperType from '../../Components/PaperType/PaperType';
import Folding from '../../Components/Folding/Folding';
import Summary from '../../Components/Summary/Summary';
import { useAppContext } from '../../Components/AppContext';

function OrderDetailsPage() {
  const { selectedPageSize } = useAppContext();
  const [selectedPageSizeId, setSelectedPageSizeId] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSelectedPageSize = (id) => {
    setSelectedPageSizeId(id);
  };

  const handleSelectedColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className='grid-container'>
            <div className={`grid-summary ${selectedPageSize ? 'grid-summary-selected' : ''}`}>
        <Summary/>
      </div>
      <div className="grid-one">
        <PageSize/>
        <div className="grid-column">
          <PageColour/>
          <PageCopy />
        </div>
        <CoverFront />
        <CoverBack />
      </div>
      <div className="grid-two">
        <Binding/> 
        <div className="grid-column"> 
          <Padding />
          <PaperType />
        </div>
        <div className="grid-column">
          <Stapling/>             
          <Folding/>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsPage;
