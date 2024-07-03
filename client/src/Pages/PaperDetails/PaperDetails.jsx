import React from 'react'
import PageSize from '../../Components/PageSize/PageSize'
import PageColour from '../../Components/PageColour/PageColour'
import PageCopy from '../../Components/PageCopy/PageCopy'

function PaperDetails() {
  return (
    <div className="grid-container">
        <div className="grid-one">
            <PageSize/>
            <div className="grid-column">
                <PageColour/>
                <PageCopy/>
            </div>
        </div>
    </div>   
  )
}

export default PaperDetails