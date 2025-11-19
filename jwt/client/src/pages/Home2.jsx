import React, { useState } from 'react';
import axios from 'axios';

const Home2 = () => {
    const [file, setFile] = useState("");

    const handleFile =(e)=>{
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    };

    const handleUpload =async()=>{
        const formdata=new FormData();
        formdata.append("myfile", file);
        const response =await axios.post("http://localhost:9000/upload", formdata);
        console.log(response.data);
    }

  return (
    <div>
      <h1>Upload File using Multer</h1>
      Upload File: <input type="file" onChange={handleFile}/>
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default Home2
