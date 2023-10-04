import React, { useState } from 'react';
import { BiSolidUser } from 'react-icons/bi';
// import { GiHamburgerMenu } from 'react-icons/gi';
import { BrowserRouter as  Link } from 'react-router-dom'; // Import BrowserRouter and Routes


function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light my-custom-nav">
        <Link className="navbar-brand" to="/">Poineer Acadmey</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowMediaIcons(!showMediaIcons)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMediaIcons ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Admission">Admission Request</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/studentdata">Student Details</a>
            </li>
          </ul>

          <div className='logout'>
            <ul className='logout-desktop'>
              <li>
                <Link to="/Logout">
                  <BiSolidUser />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
