import React, { useState } from 'react'
import axios from 'axios'

const Search = () => {
  const [rno, setRno] = useState("");
  const [mydata, setMydata] = useState([]);
  const handleSubmit = async()=>{
    let api = "http://localhost:3001/students/search";
    const response = await axios.post(api, {rno: rno});
    console.log(response.data);
    setMydata(response.data);
  }
  const ans= mydata.map((key)=>{
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
      <h1>Search Data</h1>
      enter rollno : <input type="text" name="rno" value={rno} onChange={(e)=>{setRno(e.target.value)}}/>
      <button onClick={handleSubmit}>Search</button>
      <hr />
      <table border={1}>
        <tr>
            <th>RollNo</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
        </tr>
        {ans}
      </table>
    </>
  )
}

export default Search
