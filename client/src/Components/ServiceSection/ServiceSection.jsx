import React from 'react';
import './ServiceSection.css';
import CardPrintImg from '../../Assets/LandingPage/cardPrint.png';
import PaperPrintImg from '../../Assets/LandingPage/paperPrint.png';
import BookPrintImg from '../../Assets/LandingPage/bookPrint.png';
import BoxBagImg from '../../Assets/LandingPage/boxBag.png';

const ServiceSection = () => {
    return (
        <div className='service-section'>
            <div className="section-title">Our Services</div>

            <div className="service-grid">
                <div className="service-box">
                    <div className="service-img">
                        <img src={CardPrintImg} alt="Card Printing" />
                    </div>
                    <div className="service-heading">Card printing</div>
                    <div className="service-content">
                        Personalized cards for every occasion,<br />
                        weddings, puberty ceremonies, and<br />
                        professional needs. Tailored to your style.
                    </div>
                    <div className='view-more-button'>
                        <button className='view-more-btn'>View more</button>
                    </div>
                </div>

                <div className="service-box">
                    <div className="service-img">
                        <img src={PaperPrintImg} alt="Paper Printing" />
                    </div>
                    <div className="service-heading">Paper print & copy</div>
                    <div className="service-content">
                        Discover our essential printing services, <br/>
                        photocopying, scanning, color printing,<br/>
                        stickers, and laminating.
                    </div>
                    <div className='view-more-button'>
                        <button className='view-more-btn'>View more</button>
                    </div>
                </div>

                <div className="service-box">
                    <div className="service-img">
                        <img src={BookPrintImg} alt="Book Printing" />
                    </div>
                    <div className="service-heading">Book printing</div>
                    <div className="service-content">
                        Your one-stop solution for typing,<br/>
                        printing, and binding. We bring your<br/>
                        words to life with precision and care.
                    </div>
                    <div className='view-more-button'>
                        <button className='view-more-btn'>View more</button>
                    </div>
                </div>

                <div className="service-box">
                    <div className="service-img">
                        <img src={BoxBagImg} alt="Box & Paper bag" />
                    </div>
                    <div className="service-heading">Box & Paper bag</div>
                    <div className="service-content">
                        Personalized cards for every occasion,<br />
                        weddings, puberty ceremonies, and<br />
                        professional needs. Tailored to your style.
                    </div>
                    <div className='view-more-button'>
                        <button className='view-more-btn'>View more</button>
                    </div>
                </div>

                <div className="service-box">
                    <div className="service-img">
                        <img src={PaperPrintImg} alt="Calendar Printing" />
                    </div>
                    <div className="service-heading">Calendar printing</div>
                    <div className="service-content">
                        Discover our essential printing services, <br/>
                        photocopying, scanning, color printing,<br/>
                        stickers, and laminating.
                    </div>
                    <div className='view-more-button'>
                        <button className='view-more-btn'>View more</button>
                    </div>
                </div>

                <div className="service-box">
                    <div className="service-img">
                        <img src={BookPrintImg} alt="Bill Book" />
                    </div>
                    <div className="service-heading">Bill Book</div>
                    <div className="service-content">
                        Your one-stop solution for typing,<br/>
                        printing, and binding. We bring your<br/>
                        words to life with precision and care.
                    </div>
                    <div className='view-more-button'>
                        <button className='view-more-btn'>View more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
