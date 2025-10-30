import React, { useState } from 'react';
import axios from 'axios';

const Insert = () => {
  const [value, setValue] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({...prev,[name]: value,}));
  };

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:8000/students/insert", value);
    alert(response.data);
  };

  return (
    <div>
      <h2>Add New Student</h2>
        <label>Name: </label>
        <input type="text" name="name" onChange={handleInput} /> <br /><br />

        <label>Roll No: </label>
        <input type="text" name="rollno" onChange={handleInput} /> <br /><br />

        <label>City: </label>
        <input type="text" name="city" onChange={handleInput} /> <br /><br />

        <label>Fees: </label>
        <input type="text" name="fees" onChange={handleInput} /> <br /><br />

        <button type="submit" onClick={handleSubmit}>Add Student</button>
    </div>
  );
};

export default Insert;
