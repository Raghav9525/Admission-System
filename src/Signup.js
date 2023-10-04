
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginValidation from './LoginValidation';
import axios from 'axios';
import Login from './Login';

function Signup() {
  // create state
  const [values, setValues] = useState({
    nam: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // submit method
  const submitForm = (event) => {
    event.preventDefault();
    
    // Validate the form
    const validationErrors = LoginValidation(values);
    setErrors(validationErrors);
    
    // Send data to the database if there are no validation errors
    if (validationErrors.nam==="" && validationErrors.email==="" && validationErrors.password==="") {
    
      axios.post("http://localhost:5000/signup/", values)
        .then((res) => {
          navigate('/login');
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else{
      console.log("data error");
    }
  }

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-50'>
        <form onSubmit={submitForm}>
          <div class="mb-3">
            <label for="exampleInputName" class="form-label">Name</label>
            <input
              type="text"
              name="nam"
              class="form-control"
              id="exampleInputName"
              onChange={handleInput}
            />
            {errors.nam && <span className='text-danger'> {errors.nam}</span>}
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              onChange={handleInput}
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input
              type="password"
              name="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={handleInput}
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>

          <button type="submit" class="btn btn-primary">SignUp</button>
          <br />
          <NavLink to="/Login">New user?Login</NavLink>
        </form>
      </div>
    </div>
  )
}

export default Signup;
