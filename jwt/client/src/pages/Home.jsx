import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const userAuthenticate=async()=>{
      const token = localStorage.getItem("token");

      if(token){
        const response=await axios.post("http://localhost:9000/students/userauth", {} , {headers: {"auth-token": token}});
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        navigate("/dashboard");
        console.log(response.data);
      }
      else{
        console.log("No token !!! you have in your Browser!")
      }
    }

    useEffect(()=>{
      userAuthenticate();
    }, []);

  return (
    <div style={{ backgroundColor:"rgb(240,248,255)", height:"670px", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <h1 style={{marginTop:"-90px"}}>This is the homepage</h1> 
    </div>
  )
}

export default Home
