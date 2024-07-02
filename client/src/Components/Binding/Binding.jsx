import React from 'react'
import './Binding.css'
import WireIcon from '../../Assets/WireIcon.svg'

function Binding() {
  return (
    <div className="binding-container">
        <h2>Binding</h2>
        <div className="binding-card-container">
            <div className="binding-card">
                <div className="binding-content">
                    <img src={WireIcon} alt="binding" />
                    <p>Wire</p>
                </div>
            </div>
            <div className="binding-card">
                <div className="binding-content">
                    <img src={WireIcon} alt="binding" />
                    <p>Wire</p>
                </div>
            </div>
            <div className="binding-card">
                <div className="binding-content">
                    <img src={WireIcon} alt="binding" />
                    <p>Wire</p>
                </div>
            </div>
            <div className="binding-card">
                <div className="binding-content">
                    <img src={WireIcon} alt="binding" />
                    <p>Wire</p>
                </div>
            </div>
            <div className="binding-card">
                <div className="binding-content">
                    <img src={WireIcon} alt="binding" />
                    <p>Wire</p>
                </div>
            </div>
            <div className="binding-card">
                <div className="binding-content">
                    <img src={WireIcon} alt="binding" />
                    <p>Wire</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Binding