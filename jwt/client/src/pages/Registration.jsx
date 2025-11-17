import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Registration = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handlesubmit =async(e)=>{
      e.preventDefault();
      const response = await axios.post("http://localhost:9000/students/registration", {name,email,password});
      console.log(response.data);
    }

  return (
    <>
      <h1>User Registration</h1>
      Enter Username : <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /> <br />
      Enter Email : <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      Enter Password : <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br /> <br />
      <button onClick={handlesubmit}>Register!</button>
    </>
  )
}

export default Registration
