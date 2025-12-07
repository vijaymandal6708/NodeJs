import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Display = () => {
  const [mydata,setMydata]=useState([]);

  const loadData=async()=>{
     const response = await axios.get("http://localhost:8000/students/display");
     console.log(response.data);
     setMydata(response.data);
  }

  useEffect(()=>{
    loadData();
  },[]);

  const ans = mydata.map((key,index)=>(
    <tr key={index}>
      <td>{key.authorname}</td>
      <td>{key.email}</td>
      <td>
        {
          
        }
      </td>
    </tr>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Author Name :</th>
            <th>Email :</th>
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
      </table>
    </div>
  )
}

export default Display
