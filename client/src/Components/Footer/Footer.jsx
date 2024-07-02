import React from 'react';
import './Footer.css';
import FacebookIcon from '../../Assets/LandingPage/Facebook.png';
import InstagramIcon from '../../Assets/LandingPage/Instagram.png';
import TwitterIcon from '../../Assets/LandingPage/TwitterX.png';

const Footer = () => {
  return (
    <footer className="footer-container">     
      <div className="footer-line-social">
        <div className="footer-line"></div>
        <div className="footer-social">
        <div className="footer-text">Follow us</div>
          <img src={FacebookIcon} alt="Facebook icon" className="footer-social-icon" />
          <img src={InstagramIcon} alt="Instagram icon" className="footer-social-icon" />
          <img src={TwitterIcon} alt="Twitter icon" className="footer-social-icon" />
        </div>
        <div className="footer-line"></div>
      </div>

      <div className="footer-container-box">
        <div className="footer-content">
          <div className="footer-item">
            <div className="footer-item-head">Email</div>
            <div className="footer-item-content">benvisionprinters@gmail.com</div>
          </div>
          <div className="footer-vertical-line"></div>
          <div className="footer-item">
            <div className="footer-item-head">Phone no</div>
            <div className="footer-item-content">076 900 0035 / 077 571 8119</div>
          </div>
          <div className="footer-vertical-line"></div>
          <div className="footer-item">
            <div className="footer-item-head">Location</div>
            <div className="footer-item-content">Sampanthar street, Trincomalee</div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Copyright © 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
