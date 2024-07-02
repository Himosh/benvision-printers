import React from 'react'
import './PageCopy.css'

function PageCopy() {
  return (
    <div className="copy-container">
      <h2>Copies to be print in</h2>
      <div className="copy-card-small">
            <div className="copy-card-small-left">
                <h3>One Side</h3>
            </div>
            <div className="copy-card-small-right">
                <h3>Both side</h3>
            </div>
      </div>
        <div className="copy-container-card">
            <div className="copy-card">
                <h3>01 Colour</h3>
            </div>
            <div className="copy-card">
                <h3>01 Colour</h3>
            </div>
            <div className="copy-card">
                <h3>01 Colour</h3>
            </div>
            <div className="copy-card">
                <h3>01 Colour</h3>
            </div>
        </div>
    </div>
  )
}

export default PageCopy