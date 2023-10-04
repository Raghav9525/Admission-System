import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

function Admission() {
  // create state
  const [values, setValues] = useState({
    nam: '',
    mobile: '',
    gender: '',
    clas: '',
    payment: '',
  });

  const [insertionStatus, setInsertionStatus] = useState({
    isSuccess: false,
    message: '',
  });


  const submitForm = (event) => {
    event.preventDefault();

    // Send data to the database if there are no validation errors
    if (values.nam !== "") {
      axios.post("http://localhost:5000/admission/", values)
        .then((res) => {
          console.log("Data sent");
          setInsertionStatus({
            isSuccess: true,
            message: "Admission request successful! Congratulations!",
          });
        })
        .catch((err) => {
          console.log(err);
          setInsertionStatus({
            isSuccess: false,
            message: "Admission request failed. Please try again.",
          });
        });
    }
  }


  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }
  

  return (
    <div>
      <Navbar />

      <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-50'>
          <form onSubmit={submitForm}>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">Name</label>
              <input
                type="text"
                name="nam"
                className="form-control"
                id="exampleInputName"
                onChange={handleInput}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputMobile" className="form-label">Mobile</label>
              <input
                type="text"
                name="mobile"
                className="form-control"
                id="exampleInputMobile"
                onChange={handleInput}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Gender</label>
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="maleRadio"
                  value="male"
                  onChange={handleInput}
                />
                <label htmlFor="maleRadio" className="form-check-label">Male</label>
              </div>

              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="femaleRadio"
                  value="female"
                  onChange={handleInput}
                />
                <label htmlFor="femaleRadio" className="form-check-label">Female</label>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="clas" className="form-label">Class</label>
              <select name="clas" id="clas" onChange={handleInput}>
                <option value="nursery" selected>Nursery</option>
                <option value="lkg">LKG</option>
                <option value="ukg">UKG</option>
              </select>
            </div>


            <div className="mb-3">
              <label className="payment-method">Payment Method</label>
              <div>
                <input
                  className="payment-radio"
                  type="radio"
                  name="payment"
                  id="online"
                  value="online"
                  onChange={handleInput}
                />
                <label htmlFor="online" className="payment-radio">Online</label>
              </div>

              <div>
                <input
                  className="payment-radio"
                  type="radio"
                  name="payment"
                  id="cash"
                  value="cash"
                  onChange={handleInput}
                />
                <label htmlFor="cash" className="payment-radio">Cash</label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            
          </form>
          {insertionStatus.isSuccess && (
            <div>
              {insertionStatus.message}
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Admission;
