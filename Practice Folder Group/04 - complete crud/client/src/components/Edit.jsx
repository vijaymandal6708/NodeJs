import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Edit = () => {

  const [student,setStudent] = useState([]);

  const navigate = useNavigate();

  const loadData = async () => {
    const editResponse = await axios.get("http://localhost:9000/students/edit");
    setStudent(editResponse.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id)=>{
    const deleteResponse = await axios.get(`http://localhost:9000/students/delete/${id}`);
    loadData();
  }

  const handleEdit = async (id)=>{
      navigate(`/update/${id}`);
  }
  
  return (
    <>
      <table border={1}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Rollno</th>
                <th>City</th>
                <th>Fees</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            {
               student.map((i, index)=>(
                <tr key={index}>
                    <td>{i.name}</td>
                    <td>{i.rollno}</td>
                    <td>{i.city}</td>
                    <td>{i.fees}</td>
                    <td>
                      <button onClick={()=>handleDelete(i._id)}>Delete</button>|
                      <button onClick={()=>handleEdit(i._id)}>Edit</button>
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
