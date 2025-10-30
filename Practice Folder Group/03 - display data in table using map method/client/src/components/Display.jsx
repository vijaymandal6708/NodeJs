import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Display = () => {
   const [student, setStudent] = useState([]);
   
   useEffect(()=>{
      let loadData = async () =>{
        const res = await axios.get("http://localhost:9000/students/display");
        setStudent(res.data);
      }
      loadData();
   },[]);

   return (
    <>
      <table border={1}>
        <thead>
            <tr>
                <th>Name</th>
                <th>RollNo</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
        </thead>
        <tbody>
            {
                student.map((i)=>(
                    <tr>
                        <th>{i.name}</th>
                        <th>{i.rollno}</th>
                        <th>{i.city}</th>
                        <th>{i.fees}</th>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </>
  )
}

export default Display
