import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { useState } from 'react';
import logo from '../images/logo.png';

function Header() {
    const [isMobile, setIsMobile] = useState(false);
      const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <Nav className="navbar">
            <h3 className="logo"><a href='#'><img src={logo} /></a></h3>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                onClick={()=> setIsMobile(false)}
                >
                    <Link to="/" className="list" spy={true} smooth={true} offset={0} duration={1500} onClick={()=> setIsMobile(false)}>
                        <li>Home</li>
                    </Link>
                    <Link to="about" className="list" spy={true} smooth={true} hashSpy={true} offset={0} duration={1500} onClick={()=> setIsMobile(false)}>
                        <li>About</li>
                    </Link>
                    <Link to="services" className="list" spy={true} smooth={true} hashSpy={true} offset={0} duration={1500} onClick={()=> setIsMobile(false)}>
                        <li>Services</li>
                    </Link>
                    <Link to="contact" className="list" spy={true} smooth={true} hashSpy={true} offset={0} duration={1500} onClick={()=> setIsMobile(false)}>
                        <li>Contact Us</li>
                    </Link>


                </ul>
                <button className="mobile-menu-icon"
                    onClick={() => setExpanded(expanded ? false : "expanded"), () => setIsMobile(!isMobile)}
                    onClick={() => setIsMobile(!isMobile)}
                >
                    {isMobile ? (
                        <i className="fas fa-times"></i>
                    ) : (
                        <i className="fas fa-bars"></i>
                    )}


                </button>
            </Nav>
            
            {/* <Home />
            <About />
            <Services />
            <Contact />
            <Footer /> */}

        </div>
    )
}
export default Header;