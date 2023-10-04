import React, { useState } from 'react';
import axios from 'axios';

function FacultyUpload() {
  const [formData, setFormData] = useState({
    name: '',
    qualification: '',
    mobile: '',
    myfile: null, // This will store the selected file
  });

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    // Check if the input is a file input
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('qualification', formData.qualification);
      formDataToSend.append('mobile', formData.mobile);
      formDataToSend.append('myfile', formData.myfile); // Append the file

      const response = await axios.post('http://localhost:5000/upload', formDataToSend);
      console.log('Form submitted:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <form onSubmit={submitForm} encType="multipart/form-data">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        /><br />

        <label htmlFor="qualification">Qualification:</label>
        <input
          type="text"
          id="qualification"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
        /><br />

        <label htmlFor="mobile">Mobile:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        /><br />

        <label htmlFor="myfile">Image:</label>
        <input
          type="file"
          id="myfile"
          name="myfile"
          onChange={handleChange}
        /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FacultyUpload;
