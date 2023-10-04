
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function AdminDashboard() {

    const [showMediaIcons, setShowMediaIcons] = useState(false)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light my-custom-nav">

            <a className="navbar-brand" href="#">ADMIN PANEL</a>

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
                        <a className="nav-link" href="#">
                            Student Details
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="a">
                            Admission Request
                        </a>
                    </li>
                    
                </ul>

                <div className='logout'>
                    <ul className='logout-desktop'>
                        <li>
                            <a href="./login.js" target="_blank">
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default AdminDashboard