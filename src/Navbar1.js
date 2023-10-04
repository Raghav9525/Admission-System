import React, { useState } from 'react';
import { BiSolidUser } from 'react-icons/bi';
import './style.css';

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
          <a className="navbar-brand" href="/">Pioneer Academy</a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${showMobileMenu ? 'show' : ''}`} id="navbarNav">
            <ul id="sidemenu">
              <li><a href="/" onClick={closeMobileMenu}>Home</a></li>
              <li><a href="/#admission" onClick={closeMobileMenu}>Admission</a></li>
              <li><a href="/#academics" onClick={closeMobileMenu}>Academics</a></li>
              <li><a href="/#faculty" onClick={closeMobileMenu}>Faculty</a></li>
              <li><a href="/#contact" onClick={closeMobileMenu}>Contact</a></li>
              <li><a href="/Login"><BiSolidUser style={{ fontSize: '32px' }} /></a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar1;
