import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom";
const Update = () => {
  const [students,setStudents]=useState([]);
  
  const navigate=useNavigate();

  const loadData=async()=>{
    const res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/student/display`);
    setStudents(res.data);
  }
  useEffect(()=>{
    loadData();
  })
  const handleDelete=async(id)=>{
      const stu=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/student/delete/${id}`);
       alert(stu.data.msg);
       loadData();
  }
  const handleEdit=async(id)=>{
        navigate(`/edit/${id}`);
       
  }

  return (
    <div>
      <h1>Student Data</h1>
      <hr />
      <table border="2px" width="600" align="center">
        <tr style={{backgroundColor:"grey"}}>
          <th>Roll No</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
          <th>Action</th>
        </tr>
        {
          students.map((item)=>(
            <tr>
              <td>{item.rollno}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.fees}</td>
              <td>
                <button onClick={()=>handleEdit(item._id)}>Edit</button>
               <button onClick={()=>handleDelete(item._id)}>Delete</button>
               </td>
            </tr>
          ))
        }
      </table>
      <hr />
    </div>
  )
}

export default Update