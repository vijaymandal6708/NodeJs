import React, { useState } from 'react'
import axios from 'axios';

const Insert = () => {

  const [frmdata, setFrmdata] = useState({}); 

  const handleInput = (e) => {
     setFrmdata(()=>({...frmdata, [e.target.name]:e.target.value}));
  }

  const handleSubmit = async (e) => {
     e.preventDefault();
     const url = "http://localhost:3002/students/create";
     const res = await axios.post(url, frmdata);
     alert(res.data);
  }

  return (
    <div>
      <h1>This is the insert page</h1>
      Name : <input type="text" name="name" onChange={handleInput}/> <br /> <br />
      Roll No : <input type="text" name="rollno" onChange={handleInput}/> <br /> <br />
      City : <input type="text" name="city" onChange={handleInput}/> <br /> <br />
      Fees : <input type="text" name="fees" onChange={handleInput}/> <br /> <br />
      <button type="submit" onClick={handleSubmit}>Add Student</button>
    </div>
  )
}

export default Insert
