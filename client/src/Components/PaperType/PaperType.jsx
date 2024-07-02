import React from 'react'
import './PaperType.css'

function PaperType() {
  return (
    <div className="paper-type-container">
        <h2>Paper Type</h2>
        <div className="type-card-container">
            <div className="type-card">
                <h3>80 gsm</h3>
                <p>Standard</p>
            </div>
            <div className="type-card">
                
                <h3>70 gsm</h3>
                <p>Standard</p>
            </div>
        </div>
    </div>
  )
}

export default PaperType