import axios from 'axios';
import React, { useState } from 'react'

const Home3 = () => {
    const [input, setInput] = useState({});
    const [images,setImages] = useState("");

    const handleInput =async(e)=>{
        setInput({...input, [e.target.name]:e.target.value});
        console.log(input);
    };

    const handleImage =async(e)=>{
        console.log(e.target.files);
        setImages(e.target.files);
    }

    const handleSubmit =async()=>{
        const formData = new FormData();

        for (var key in input){
            formData.append(key, input[key]);
        }
        for (let i=0; i<images.length; i++){
            formData.append('images', images[i]);
        }
        const response =await axios.post("http://localhost:9000/students/studentsave", formData);
    }

  return (
    <div>
      <h1>User Registration</h1>
      Enter Student Name : <input type="text" name="name" onChange={handleInput} /> <br />
      Enter Email : <input type="text" name="email" onChange={handleInput} /> <br />
      Enter Subject : <input type="text" name="subject" onChange={handleInput} />  <br />
      Upload Image : <input type="file" multiple onChange={handleImage} /> <br />
      <button onClick={handleSubmit}>Save!!!</button>

    </div>
  )
}

export default Home3
