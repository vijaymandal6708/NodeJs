import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Display = () => {

   const [displaydata, setDisplaydata] = useState([]);

   useEffect(()=>{
    loadData();
   }, []);

   const loadData = async () =>{
    const displayResponse = await axios.get("http://localhost:8500/students/display");
    setDisplaydata(displayResponse.data);
   }

  return (
    <>
      <table border={1}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Rollno</td>
            </tr>
        </thead>
        <tbody>
            {
                displaydata.map((i,index)=>(
                    <tr key={index}>
                        <td>{i.name}</td>
                        <td>{i.rollno}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </>
  )
}

export default Display
