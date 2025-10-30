import React, { useState } from 'react';
import axios from 'axios';

const Insert = () => {

    const [formdata, setFormdata] = useState({});

    const handleInput = (e) =>{
        setFormdata(()=>({...formdata, [e.target.name]:e.target.value}));
        console.log(formdata);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const resFormdata = await axios.post("http://localhost:8500/students/insert", formdata);
        alert("student added successfully");
        console.log(resFormdata.data)
    }

  return (
    <>
      <br /> <br />
      <form onSubmit={handleSubmit}>
        Enter Name: <input type="text" name="name" onChange={handleInput}/> <br /> <br />
        Enter Rollno: <input type="number" name="rollno" onChange={handleInput}/> <br /> <br />
        <button type="submit">Add Student</button>
      </form>
    </>
  )
}

export default Insert
