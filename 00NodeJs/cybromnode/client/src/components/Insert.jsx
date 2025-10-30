import React, { useState } from 'react'
import axios from 'axios';
const Insert = () => {
  const [frmData,setFrmData]=useState({});

  const handleInput=(e)=>{

      setFrmData(()=>({...frmData,[e.target.name]:e.target.value}));
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/student/create`,frmData);
    alert(res.data);
  }
  return (
    <div>
      <h1>Insert Student Data</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        Enter Roll No:<input type="text" name="rollno" onChange={handleInput}/>
        <br/>
        Enter Name:<input type="text" name="name" onChange={handleInput}/>
        <br/>
        Enter City:<input type="text" name="city" onChange={handleInput}/>
        <br/>
        Enter Fees:<input type="text" name="fees" onChange={handleInput}/>
        <br/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default Insert