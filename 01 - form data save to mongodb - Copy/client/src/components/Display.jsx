import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Display = () => {
   const [mydata, setmydata] = useState([]);
   const [authid, setAuthid] = useState("");
   const [bookname, setBookname] = useState("");
   const [price, setPrice] = useState("");
   

        const loadData = async () =>{
        const res = await axios.get("http://localhost:9000/students/display");
        setmydata(res.data);
        console.log(res.data)
      };

      useEffect(()=>{
        loadData();
      }, []);

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
                mydata.map((i, index)=>(
                    <tr key={index}>
                        <td>{i.authorname}</td>
                        <td>{i.email}</td>
                        <td> 
                        {
                         key.booksid.map((key1)=>{
                             return(
                                <>
                                   <p>Title : {key1.bookname}, Price : {key1.price} </p>
                                </>
                             )
                         })

                        } 
                    </td>

                    </tr>
                ))
            }
        </tbody>
      </table>
    </>
  )
}

export default Display
