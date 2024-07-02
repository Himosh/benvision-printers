import React, { useState } from 'react'
import './NavBar.css'
import BenLogo from '../../Assets/LandingPage/benVision.png'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const onClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="NavBar">
            <div className="navbar-desktop">
                <div className="NavBarLogo">
                    <img src= {BenLogo} />
                </div>
                <div className="NavBarOpt">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className="menu-icon">
                <FontAwesomeIcon 
                    onClick={onClick} 
                    icon={showMenu ? faX : faBars}  
                />
                </div>
            </div>
            <div className={`mobile-menu ${showMenu? 'show' : ''}`}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar

