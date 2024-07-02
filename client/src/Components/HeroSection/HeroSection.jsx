import React from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.css'
import HeroSecImg from '../../Assets/LandingPage/heroSecImg.png'
// import HeroImg from '../Assets/heroSecImg2.png'

export const HeroSection = () => {
  return (
    <div className="hero-conatiner">
        <div className="hero-container-left">
            <div className="title-content">
                <span className="title-blue">Print</span>
                <span className="title-gradient">brilliance</span>
            </div>
            <div className="title-content">
                <span className="title-blue">Publish</span>
                <span className="title-gradient">excellence</span>
            </div>
            <p>Transform Your Vision into Reality with benVision, Your Ultimate
            Destination for Cutting-Edge Printing and Publishing Solutions</p>
            <Link to="/OrderDetailsPage">
            <button className='QuoteButton'>
                 Get a quote
            </button>
            </Link>
        </div>       
        <div className="HeroSectionImg">
            <img src= {HeroSecImg} alt='hero image'/>
        </div>
    </div>
  )
}

export default HeroSection