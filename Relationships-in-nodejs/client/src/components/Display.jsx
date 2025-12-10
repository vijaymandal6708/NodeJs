import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Display = () => {
  const [mydata,setMydata]=useState([]);
  const [showInput, setShowInput] = useState(false);
  const [authid, setAuthid] = useState("");
  const [bookname, setBookname] = useState("");
  const [price, setPrice] = useState("");


  const loadData=async()=>{
     const response = await axios.get("http://localhost:8000/students/display");
     console.log(response.data);
     setMydata(response.data);
  }

  useEffect(()=>{
    loadData();
  },[]);

  const addMoreBooks = async (authorid) =>{
     setShowInput(true);
     setAuthid(authorid);
  };

  const saveBook = async () =>{
    const saveresponse = await axios.post("http://localhost:8000/students/booksave", {authid, bookname, price});
    console.log(saveresponse);
    alert("book saved successfully");
    loadData();
  }


  const ans = mydata.map((key,index)=>(
    <tr key={index}>
      <td>{key.authorname}</td>
      <td>{key.email}</td>
      <td>
        {
          key.booksid?.map(b=>(
            <p>Title : {b.bookname}, Price : {b.price}</p>
          ))
        }
      </td>
      <td>
        <button onClick={()=>{addMoreBooks(key._id)}}>add more books</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Author Name</th>
            <th>Email</th>
            <th>Books and Price</th>
          </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
      </table>
      {
        showInput && (
          <div>
            <h3>Add Book</h3>
            Book Name : <input type="text" onChange={(e) => { setBookname(e.target.value); } } /> <br />
            Book Price : <input type="number" onChange={(e) => { setPrice(e.target.value); } } /> <br />
            <button onClick={saveBook}>Save Book</button>
          </div>
        )
      }
    </div>
  )
}

export default Display
