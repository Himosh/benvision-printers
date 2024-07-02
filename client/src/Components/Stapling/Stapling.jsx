import React from 'react'
import './Stapling.css'
import StaplingOne from '../../Assets/StaplingOne.svg'

function Stapling() {
  return (
    <div className="stapling-container">
        <h2>Stapling</h2>
        <div className="stapling-card-container">
            <div className="stapling-card">
                <img src={StaplingOne} alt="stapling" />
            </div>
            <div className="stapling-card">
                <img src={StaplingOne} alt="stapling" />
            </div>
            <div className="stapling-card">
                <img src={StaplingOne} alt="stapling" />
            </div>
        </div>
    </div>
  )
}

export default Stapling