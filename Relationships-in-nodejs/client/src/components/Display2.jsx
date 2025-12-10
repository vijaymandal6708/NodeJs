import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Display2 = () => {

  const [mydata,setMydata]=useState([]);
  
  const loadData = async () =>{
    const response = await axios.get("http://localhost:8000/students/display2");
    console.log(response.data);
    setMydata(response.data);
  }

  useEffect(()=>{
    loadData();
  }, []);

  const ans = mydata.map((key)=>
     (
      <tr>
        <td>{key.bookname}</td>
        <td>{key.price}</td>
        <td>{key.authorid?.authorname}</td>
        <td>{key.authorid?.email}</td>

      </tr>
     )
  )


  return (
    <div>
      <h1>Display Data Book wise</h1>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Price</th>
            <th>Author Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
      </table>
    </div>
  )
}

export default Display2
