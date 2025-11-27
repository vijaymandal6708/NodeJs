import { useState } from "react";
import axios from "axios";
const Insert=()=>{
    const [input, setInput]= useState({});
     const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
     } 
     const handleSubmit=async()=>{
       let api=`http://localhost:8000/students/save`;
       const response = await axios.post(api, input);
       console.log(response);
       alert(response.data);
     }
    return(
        <>
         <h1> Insert Author Detail</h1>
         Enter authorname : <input type="text" name="name" onChange={handleInput} />
         <br/>
          Enter email : <input type="email" name="email" onChange={handleInput} />
         <br/>
          Enter Booktitle : <input type="text" name="booktitle" onChange={handleInput} />
         <br/>
          Enter Price : <input type="text" name="price" onChange={handleInput} />
        
         <br/>
         <button onClick={handleSubmit}>Save!</button>
        </>
    )
}
export default Insert;