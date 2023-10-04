import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
// import { BiSolidUser } from 'react-icons/bi';
import Login from './Login';
import Admission from './Admission'; // Import your Admission component here
import Signup from './Signup';
import Home from './Home';
import Admin from './Admin';
import StudentData from './StudentData';
import FacultyDetails from './FacultyDetails';

function PoineerAcadmeyBoot() {

    return (
        <div className='container'>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admission" element={<Admission />} />
                    <Route path="/facultydata" element={<FacultyDetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/admin" element={<Admin/>} />
                    <Route path='/admin/studentdata' element={<StudentData />} />
                </Routes>
            </Router>
        </div>
    );
}


export default PoineerAcadmeyBoot;
