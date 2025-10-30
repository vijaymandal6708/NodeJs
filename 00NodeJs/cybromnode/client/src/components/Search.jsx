import React from 'react'
import { useState } from 'react'
import axios from "axios";
const Search = () => {
    const [rollno,setRollNo]=useState("");
    const [student,setStudent]=useState([]);

    const handleSubmit=async()=>{
            const stu=await axios.post(`${import.meta.env.VITE_BACKEND_URL}/student/search`,{rollno});
            setStudent(stu.data);
    }
    return (
        <div>
            <h1>Search Student Data</h1>
            <hr />
            Enter Roll No <input type="text" name="rollno" onChange={(e)=>setRollNo(e.target.value)}/>
            <button onClick={handleSubmit}>Search</button>
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

export default Search