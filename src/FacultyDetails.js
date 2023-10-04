import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './faculty.css';

function FacultyDetails() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:5000/facultydata`;
        const response = await axios.get(url);

        // Check if the response data is empty or undefined
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
    };

    fetchData(); // Fetch data when the component mounts
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="faculty-details">
      {showData ? (
        data.map((data, index) => (
          <div key={index} className="row">
            <div className="col-6 fac1 order-first">
                <img src={require(`./upload/${data.image}`)} alt={`Faculty ${index + 1}`} className="img-fluid" />
              {/* <img src={require(`./upload/${data.image}`)} alt="im" /> */}

            </div>
            <div className="col-md-6 details">
              <div className="row">
                <div className="col-12">
                  <h3>{data.name}</h3>
                  <h5>{data.qualification}</h5>
                  <h5>{data.mobile}</h5>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No faculty data available.</p>
      )}
    </div>
  
  );
}

export default FacultyDetails;
