import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {

    const {id} = useParams();
    const [updateStudent, setUpdateStudent]=useState({});

    const loadData = async()=>{
        const updateRes = await axios.get(`http://localhost:9000/students/update/${id}`)
        setUpdateStudent(updateRes.data);
        console.log(updateRes.data);
    };

    const handleInput = (e) =>{
        setUpdateStudent(()=>({...updateStudent, [e.target.name]:e.target.value}));
        console.log(updateStudent);
    };

    const handleSubmit = async ()=>{
        const finalupdate = await axios.post("http://localhost:9000/students/finalupdate", updateStudent);
    }

    useEffect(()=>{
        loadData();
    }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        Name: <input type="text" value={updateStudent.name} name="name" onChange={handleInput} /> <br /> <br />
        Rollno: <input type="number" value={updateStudent.rollno} name="rollno" onChange={handleInput} /> <br /> <br />
        City: <input type="text" value={updateStudent.city} name="city" onChange={handleInput} /> <br /> <br />
        Fees: <input type="number" value={updateStudent.fees} name="fees" onChange={handleInput} /> <br /> <br />
        <button type="submit">Update</button>
      </form>
    </>
  )
}

export default Update
