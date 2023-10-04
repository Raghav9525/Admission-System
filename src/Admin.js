import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar'
import { useNavigate } from 'react-router-dom';


function Admin() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);
  // to navigate to studentdata route
  const navigate = useNavigate(); 

  //fetch admission request student data
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/admin/admission');
      setData(response.data);
      setShowData(true); // Show data after the button click and data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

 //fetch student data
function fetchStudent(){
    navigate('/admin/studentdata'); // Use navigate to navigate to the route
}


  const handleButtonClick = (roll, clas) => {
    axios.post(`http://localhost:5000/admin/approve/${roll}/${clas}`)
      .then((res) => {
        console.log('Data sent');
        // You can also refresh the data here if needed
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <AdminNavbar />
      <h2>Admin Panel</h2>
      <br /><br />
      <button onClick={fetchData}>Admission Request</button>
      <button onClick={fetchStudent}>Student Details</button>
      <br />
      <br />
      {showData && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>Class</th>
              <th>Payment Method</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item) => (
            <tr key={item.roll}>
              <td>{item.name}</td>
              <td>{item.mobile}</td>
              <td>{item.gender}</td>
              <td>{item.class}</td> {/* Render class value once */}
              <td>{item.pay_method}</td>
              <td>
                <button onClick={() => handleButtonClick(item.roll, item.class)}>Approve</button>
              </td>
            </tr>
          ))}

          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;
