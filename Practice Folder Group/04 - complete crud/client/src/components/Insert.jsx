import React, { useState } from 'react'
import axios from 'axios';

const Insert = () => {

   const [frmdata, setFrmdata] = useState({});

   const handleInput =(e)=>{
     console.log(e.target.value);
     setFrmdata(()=>({...frmdata, [e.target.name]:e.target.value}));
   }

   const handleSubmit =async(e)=>{
    e.preventDefault();
    console.log(frmdata);
    const response = await axios.post("http://localhost:9000/students/insert", frmdata);
     alert("Student added successfully!");
   }


  return (
    <>
      <h1>This is the insert page</h1>
      <form onSubmit={handleSubmit}>
        Enter Name : <input type="text" name="name" onChange={handleInput}/> <br /> <br />
        Enter RollNo : <input type="number" name="rollno" onChange={handleInput}/> <br /> <br />
        Enter City : <input type="text" name="city" onChange={handleInput}/> <br /> <br />
        Enter Fees : <input type="number" name="fees" onChange={handleInput}/> <br /> <br />
        <button type="submit">Add Student</button>
      </form>
    </>
  )
}

export default Insert
