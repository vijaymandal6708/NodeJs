import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Display = () => {
   const [student, setStudent] = useState([]);
   
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
                <th>FirstName</th>
                <th>LastName</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                student.map((i, index)=>(
                    <tr key={index}>
                        <th>{i.fname}</th>
                        <th>{i.lname}</th>
                        <th>{i.userid.uname}</th>
                        <th>{i.userid.email}</th>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </>
  )
}

export default Display
