import React from 'react';
import axios from "axios";
import { useState,useEffect } from 'react';

const Update = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:3001/students/updatedata";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }

  useEffect(()=>{
    loadData();
  }, []);

  const myDel = async(id)=>{
    let api = `http://localhost:3001/students/updatedelete?id=${id}`;
    const response = await axios.delete(api);
    alert(response.data.msg);
    loadData();
  }

  const ans = mydata.map((key)=>{
    return(
      <>
        <tr>
          <td>{key.rollno}</td>
          <td>{key.name}</td>
          <td>{key.city}</td>
          <td>{key.fees}</td>
          <td>Edit | <a href="#" onClick={()=>{myDel(key._id)}}>Delete</a></td>
        </tr>
      </>
    )
  });

  return (
    <>
      <h1>Update Student Data</h1>
      <hr />
      <table>
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
          <th>Update</th>
        </tr>
        {ans}
      </table>
    </>
  )
}

export default Update