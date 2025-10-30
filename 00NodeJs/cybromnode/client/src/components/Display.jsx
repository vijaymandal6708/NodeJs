import React, { useEffect, useState } from 'react'
import axios from "axios";
const Display = () => {
  const [student,setStudent]=useState([]);

  const loadData=async()=>{
    const res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/student/display`);
    setStudent(res.data);
  }

  useEffect(()=>{
    loadData();
  })

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
        </tr>
        {
          student.map((item)=>(
            <tr>
              <td>{item.rollno}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.fees}</td>
            </tr>
          ))
        }
      </table>
      <hr />
    </div>
  )
}

export default Display