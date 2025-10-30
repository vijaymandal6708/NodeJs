
import React, { useEffect, useState } from 'react'
import axios from "axios";


const Display = () => {
  const [mydata, setMydata] = useState([]);
  const loadData = async () =>{
    let api = "http://localhost:3001/students/display";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }
  useEffect(()=>{
    loadData();
  }, [])
  const ans = mydata.map((key)=>{
    return(
      <>
        <tr>
          <td>{key.rollno}</td>
          <td>{key.name}</td>
          <td>{key.city}</td>
          <td>{key.fees}</td>
        </tr>
      </>
    )
  })
  return (
    <>
      <h1>Display Record</h1>
      <hr />
      <table border={1}>
         <tr>
           <th>Rollno</th>
           <th>Name</th>
           <th>City</th>
           <th>Fees</th>
         </tr>
         {ans}
      </table>
    </>
    
  )
}

export default Display