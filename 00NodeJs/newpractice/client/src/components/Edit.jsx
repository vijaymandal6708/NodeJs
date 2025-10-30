import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Edit = () => {

  const [displayData, setDisplaydata] = useState([]);

  useEffect(()=>{
    loadData();
  }, []);

  const loadData = async ()=>{
    const displayResponse = await axios.get("http://localhost:8500/students/display");
    setDisplaydata(displayResponse.data);
  };

  const handleDelete = async (id)=>{
    const deleteResponse = await axios.post("http://localhost:8500/students/delete", {id});
  }

  return (
    <>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Rollno</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            {
                displayData.map((i, index)=>(
                    <tr key={index}>
                        <td>{i.name}</td>
                        <td>{i.rollno}</td>
                        <td>
                            <button>Edit</button>|
                            <button onClick={()=>handleDelete(i._id)}>Delete</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </>
  )
}

export default Edit
