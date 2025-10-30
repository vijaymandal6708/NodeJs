import axios from 'axios';
import React, { useState } from 'react';

const Search = () => {

  const [rollno, setRollno] = useState("");
  const [searchresponse,  setSearchresponse] = useState([]);

  const handleInput = (e) =>{
    setRollno(e.target.value);
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const searchResponse = await axios.post("http://localhost:8500/students/search", {rollno});
    setSearchresponse(searchResponse.data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        Enter Roll no : <input type="number" name="rollno" onChange={handleInput} />
        <button type="submit">Search</button>
      </form>
      <br />
      <br />
      <table border={1}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Rollno</td>
            </tr>
        </thead>
        <tbody>
            {
              searchresponse.map((i, index)=>(
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

export default Search
