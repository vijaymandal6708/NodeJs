import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const Edit = () => {
    const [student,setStudent]=useState({});
    const {id}=useParams();

    const loadData=async()=>{
         const stu=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/student/show/${id}`);
        setStudent(stu.data);
    }

    useEffect(()=>{
        loadData();
    },[]);

    const handleInput=(e)=>{
        setStudent((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleUpdate=async()=>{
      const stu=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/student/updatestu`,student);
      alert(stu.data.msg);
           
    }
  return (
    <div>
        <h1>Edit Student Data</h1>
        <hr />
         Enter Roll No:<input type="text" name="rollno" value={student.rollno} onChange={handleInput}/>
        <br/>
        Enter Name:<input type="text" name="name" value={student.name} onChange={handleInput}/>
        <br/>
        Enter City:<input type="text" name="city" value={student.city} onChange={handleInput}/>
        <br/>
        Enter Fees:<input type="text" name="fees" value={student.fees} onChange={handleInput}/>
        <br/>
        <button onClick={handleUpdate}>Update</button>
    </div>
  )
}

export default Edit