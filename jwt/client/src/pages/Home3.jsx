import { useState } from "react";
import axios from "axios";



const Insert = () => {
  const [input, setInput] = useState({}); 
  const [images, setImages] = useState(""); 

  const handleInput=async(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}));
      console.log(input);
  }



  const handleImage=async(e)=>{
      console.log(e.target.files);
      setImages(e.target.files);
  }

  const handleSubmit=async()=>{

    let api="http://localhost:8000/students/studentsave";
     
      const formData = new FormData();

       for (var key in input){
          formData.append(key, input[key]);
       }
         for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }
    const response = await axios.post(api, formData);
    console.log(response.data);
    }

  return (
    <>
      <h1> User Registration</h1>
      Enter Student Name <input type="text" name="name" onChange={handleInput} />
      <br />
      Enter Email <input type="text" name="email"  onChange={handleInput} />
      <br />
      Enter Subject <input type="text" name="subject" onChange={handleInput} />
      <br />
      Upload Image : <input type="file" multiple onChange={handleImage} />
   <br/>
      <button onClick={handleSubmit}>Save!!!</button>

    </>
  )
}
export default Insert;