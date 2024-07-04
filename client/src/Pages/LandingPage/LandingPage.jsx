import React from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import ServiceSection from "../../Components/ServiceSection/ServiceSection";
import ReviewSection from "../../Components/ReviewSection/ReviewSection";
import Footer from "../../Components/Footer/Footer";
import './LandingPage.css';
import ContactSection from '../../Components/ContactSection/ContactSection';


function LandingPage(props) {
    return (
        <div className='landing-page-container'>
            <HeroSection/>
            <ServiceSection/>
            <ReviewSection/>
            <ContactSection/>
        </div>
    );
}

export default LandingPage;