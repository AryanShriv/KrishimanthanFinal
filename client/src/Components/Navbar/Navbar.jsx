import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../Assets/Header WP.jpg";

import { Flip, Slide, Fade } from "react-awesome-reveal";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div className="nav-logo">
            <Flip>
              <img className="Logo" src={Logo} alt="Krishimanthan" />
            </Flip>
            <Fade>
              <h5 className="tagline">
                {" "}
                कृषि, सहकारिता, पंचायत एवं ग्रामीण विकास, वन पर केंद्रित, का
                प्रखर प्रवक्ता
              </h5>
            </Fade>
          </div>
          <div className="nav-toggle" onClick={toggleMobileMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <Slide>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                होम
                {/* Home */}
              </Link>
            </li>
            <li>
              <Link to="/Krishi" onClick={closeMobileMenu}>
                कृषि
                {/* Krishi */}
              </Link>
            </li>
            <li>
              <Link to="/Sehkarita" onClick={closeMobileMenu}>
                सहकारिता
                {/* Sehkarita */}
              </Link>
            </li>
            <li>
              <Link to="/Panchayat" onClick={closeMobileMenu}>
                पंचायत एवं ग्रामीण विकास
                {/* Panchayat */}
              </Link>
            </li>
            <li>
              <Link to="/Pashupalan" onClick={closeMobileMenu}>
                पशुपालन
                {/* Pashupalan */}
              </Link>
            </li>

            <li>
              <Link to="/Van" onClick={closeMobileMenu}>
                वन
                {/* Van */}
              </Link>
            </li>
            <li>
              <Link to="/EPaper" onClick={closeMobileMenu}>
                ई-पेपर
                {/* E-Paper */}
              </Link>
            </li>
            <li>
              <Link to="/ContactUs" onClick={closeMobileMenu}>
                संपर्क
                {/* Contact Us */}
              </Link>
            </li>
          </Slide>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
