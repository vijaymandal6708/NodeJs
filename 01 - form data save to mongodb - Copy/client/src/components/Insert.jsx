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
        Enter authorname : <input type="text" name="uname" onChange={handleInput}/> <br /> <br />
        Enter email : <input type="text" name="email" onChange={handleInput}/> <br /> <br />
        Enter Booktitle :  <input type="text" 
        name="booktitle" /> <br /> <br />
        Enter Booktitle :  <input type="text" 
        name="price" /> <br /> <br />

        <button type="Save">Add Student</button>
      </form>
    </>
  )
}

export default Insert
