import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {

  const [frmdata, setFrmdata] = useState({});

  const handleInput = (e) => {
     setFrmdata(()=>({...frmdata, [e.target.name]:e.target.value}));
     console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:9002/home", frmdata);
  }


  return (
    <>
      <h1>This is HomePage</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter Name : </label>
        <input type="text" name="name" onChange={handleInput}/> <br /> <br />
        <label>Enter RollNo :</label>
        <input type="text" name="rollno" onChange={handleInput}/> <br /> <br />

        <button type="submit">Add Student</button>
      </form>
    </>
  )
}

export default Home
