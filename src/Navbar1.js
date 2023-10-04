
import React, { useState } from 'react';
import { BiSolidUser } from 'react-icons/bi';
import './style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import "./Navbar1.css";

function Navbar1() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div id="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light  my-custom-nav">
          <Link className="navbar-brand" to="/">Pioneer Academy</Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${showMobileMenu ? 'show' : ''}`} id="navbarNav">
            <ul id="sidemenu">
              <li><a href="#header" onClick={closeMobileMenu}>Home</a></li>
              <li><a href="#admission" onClick={closeMobileMenu}>Admission</a></li>
              <li><a href="#academics" onClick={closeMobileMenu}>Academics</a></li>
              <li><a href="#faculty" onClick={closeMobileMenu}>Faculty</a></li>
              <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
              <li><Link to="/Login"><BiSolidUser style={{ fontSize: '32px' }} /></Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar1;
