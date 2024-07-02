import React from 'react'
import './Folding.css'
import FoldingOne from '../../Assets/FoldingOne.svg'

function Folding() {
  return (
    <div className="folding-container">
        <h2>Folding</h2>
        <div className="folding-card-container">
            <div className="folding-card">
                <img src={FoldingOne} alt="stapling" />
            </div>
            <div className="folding-card">
                <img src={FoldingOne} alt="stapling" />
            </div>
            <div className="folding-card">
                <img src={FoldingOne} alt="stapling" />
            </div>
            <div className="folding-card">
                <img src={FoldingOne} alt="stapling" />
            </div>
        </div>
    </div>
  )
}

export default Folding