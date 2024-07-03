import React from 'react'
import CoverFront from '../../Components/CoverFront/CoverFront'
import CoverBack from '../../Components/CoverBack/CoverBack'
import "./CoverDetails.css"

function CoverDetails() {
  return (
    <div className="cover-details-container">
        <CoverFront/>
        <CoverBack/>
    </div>
  )
}

export default CoverDetails