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
    <div style={{ backgroundColor:"rgb(240,248,255)", height:"670px", display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
      <div style={{backgroundColor:"white", height:"400px", width:"350px", borderRadius:"20px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <h1>User Registration</h1>
        <input style={inputStyle} type="text" value={name} onChange={(e)=>{setName(e.target.value); console.log(e.target.value)}} /> <br /> <br />
        <input style={inputStyle} type="text" value={email} onChange={(e)=>{setEmail(e.target.value); console.log(e.target.value)}} /> <br /> <br />
        <input style={inputStyle} type="password" value={password} onChange={(e)=>{setPassword(e.target.value); console.log(e.target.value)}} /> <br /> <br />
        <button style={inputStyle} onClick={handlesubmit}>Register!</button>
      </div>
    </div>
  )
}

const inputStyle={
  width:"220px",
  height:"30px"
}

export default Registration
