import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      <div style={{backgroundColor:"white", height:"400px", width:"350px",padding:"30px" , boxSizing:"border-box", borderRadius:"20px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", marginTop:"-25px"}}>
        <h1 style={{fontSize:"24px", fontWeight:"bolder"}}>User Registration</h1>
        <input style={{...inputStyle, }} type="text" value={name} placeholder="👤 Enter Username" onChange={(e)=>{setName(e.target.value); console.log(e.target.value)}} /> <br />
        <input style={{...inputStyle, }} type="text" value={email} placeholder="📩 Enter Email" onChange={(e)=>{setEmail(e.target.value); console.log(e.target.value)}} /> <br />
        <input style={{...inputStyle, }} type="password" value={password} placeholder="🛡️ Enter Password" onChange={(e)=>{setPassword(e.target.value); console.log(e.target.value)}} /> <br />
        <button style={{...inputStyle, backgroundColor:"rgba(16, 150, 212, 1)", color:"white", fontWeight:"800"}} onClick={handlesubmit}>Register!</button>
        <Link to="/login" style={{fontSize:"12px", marginLeft:"-70px", marginTop:"5px", marginBottom:"15px",fontStyle:"italic", textDecoration:"none", color:"rgba(16,150,212,1)",}}>Already have an account? Login here</Link>
      </div>
    </div>
  )
}

const inputStyle={
  width:"240px",
  height:"40px",
  borderRadius:"20px",
  border: "1.5px solid lightgrey",
  paddingLeft: "25px",
  outLine:"none"
}

export default Registration
