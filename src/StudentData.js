import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

function StudentData() {
  
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false);
    const [selectedClas, setSelectClass] = useState('nursery');
    const navigate = useNavigate();
  
    const showStudent = useCallback(async () => {
      try {

        const url = `http://localhost:5000/admin/studentdata?clas=${selectedClas}`;
        const response = await axios.get(url);
        
        // Check if the data array is empty or undefined
        if (!response.data || response.data.length === 0) {
          setShowData(false);
          return;
        }

        setData(response.data);
        setShowData(true);
      } catch (error) {
        console.error('Error fetching data:', error);
        setShowData(false); // Handle error by setting showData to false
      }
    }, [selectedClas]);
  
    const handleShowStudentClick = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

      showStudent();
    };
  
    return (
      <div>
        <AdminNavbar /><br /> <br/ >
        <form>
          <div className="mb-3">
            <label htmlFor="clas" className="form-label">Select Class</label>
            <select
              id="clas"
              name="clas"
              value={selectedClas}
              onChange={(e) => setSelectClass(e.target.value)}
            >
              <option value="nursery">Nursery</option>
              <option value="lkg">LKG</option>
              <option value="ukg">UKG</option>
            </select>
          </div>
          <button onClick={handleShowStudentClick}>Show Student</button>
        </form>
  
        {showData && (
          <table>
            <thead>
              <tr>
                <th>Roll</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Payment Method</th>
              </tr>
            </thead>
            <tbody>
              {data.map((student) => (
                <tr key={student.key}>
                    <td>{student.roll}</td>
                  <td>{student.name}</td>
                  <td>{student.mobile}</td>
                  <td>{student.gender}</td>
                  <td>{student.class}</td> {/* Updated key name */}
                  <td>{student.pay_method}</td> {/* Updated key name */}
                </tr>
              ))}

            </tbody>
          </table>
        )}
      </div>
    );
  }
  
  export default StudentData;
  