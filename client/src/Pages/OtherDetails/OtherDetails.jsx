import React from 'react'
import Binding from '../../Components/Binding/Binding'
import Padding from '../../Components/Padding/Padding'
import PaperType from '../../Components/PaperType/PaperType'
import Stapling from '../../Components/Stapling/Stapling'
import Folding from '../../Components/Folding/Folding'
import "./OtherDetails.css"

function OtherDetails() {
  return (
    <div className="other-details-container">
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
  )
}

export default OtherDetails