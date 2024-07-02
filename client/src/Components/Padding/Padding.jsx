import React from 'react'
import './Padding.css'
import SideGlue from '../../Assets/SideGlue.svg'


function Padding() {
  return (
    <div className="padding-container">
        <h2>Padding</h2>
        <div className="padding-card-container">
            <div className="padding-card">
                <img src={SideGlue} alt="stapling" />
            </div>
            <div className="padding-card">
                <img src={SideGlue} alt="stapling" />
            </div>
        </div>
    </div>
  )
}

export default Padding