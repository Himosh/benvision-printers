import React from 'react';
import './ReviewSection.css';
import StuartImg from '../../Assets/LandingPage/Stuart.png';
import TitusImg from '../../Assets/LandingPage/titus.png';
import KeshiImg from '../../Assets/LandingPage/keshi.png';

const ReviewSection = () => {
    return (
        <div className='review-section'>
            <div className="section-title-review">Our Customers Say</div>

            <div className="review-grid">
                <div className="review-box">
                    <div className="review-img">
                        <img src={StuartImg} alt="Stuartshan" />
                    </div>
                    <div className="review-heading">Stuartshan</div>
                    <div className="review-content">
                        Personalized cards for every occasion,<br />
                        weddings, puberty ceremonies, and<br />
                        professional needs. Tailored to your style.
                    </div>
                </div>

                <div className="review-box">
                    <div className="review-img">
                        <img src={KeshiImg} alt="Keshinathan" />
                    </div>
                    <div className="review-heading">Keshinathan</div>
                    <div className="review-content">
                        Personalized cards for every occasion,<br />
                        weddings, puberty ceremonies, and<br />
                        professional needs. Tailored to your style.
                    </div>
                </div>

                <div className="review-box">
                    <div className="review-img">
                        <img src={TitusImg} alt="Tituskumar" />
                    </div>
                    <div className="review-heading">Tituskumar</div>
                    <div className="review-content">
                        Personalized cards for every occasion,<br />
                        weddings, puberty ceremonies, and<br />
                        professional needs. Tailored to your style.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;
