import axios from 'axios';
import React, { useState } from 'react';

const Search = () => {

    const [rollno, setRollno] = useState("");
    const [student, setStudent] = useState([]);

    const handleInput = (e)=>{
        setRollno(e.target.value)
    }

    const handleSubmit = async (e) =>{
       e.preventDefault();
       const studentSearch = await axios.post("http://localhost:9000/students/search", {rollno});
       setStudent(studentSearch.data);
       console.log(studentSearch.data);
    }

  return (
    <>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        Enter roll no: <input type="number" name="rollno" onChange={handleInput}/>
        <button type="submit">Search</button>
      </form>
      <br />
      <hr />
      <br />
      <table border={1}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Rollno</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
        </thead>
        <tbody>
            {
                student.map((i)=>(
                    <tr>
                        <td>{i.name}</td>
                        <td>{i.rollno}</td>
                        <td>{i.city}</td>
                        <td>{i.fees}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </>
  )
}

export default Search
