import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Display = () => {
   const [mtdata, setmydata] = useState([]);
   const [authid, setAuthid] = useState("");
   const [bookname, setBookname] = useState("");
   const [price, setPrice] = useState("");
   
   useEffect(()=>{
      let loadData = async () =>{
        const res = await axios.get("http://localhost:9000/students/display");
        setStudent(res.data);
        console.log(res.data)
      }
      loadData();
   },[]);

   return (
    <>
      <table border={1}>
        <thead>
            <tr>
                <th>AuthName</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                student.map((i, index)=>(
                    <tr key={index}>
                        <td>{key.authorname}</td>
                        <td>{key.email}</td>

                    </tr>
                ))
            }
        </tbody>
      </table>
    </>
  )
}

export default Display
