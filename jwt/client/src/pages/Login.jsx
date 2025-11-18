import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit =async()=>{
    const response = await axios.post("http://localhost:9000/students/login", {email,password});
    console.log(response.data);
    localStorage.setItem("token", response.data.token);
    navigate("/home");
  }

  return (
    <>
      <h1>User Login</h1>

      Enter Email : <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      Enter Password : <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br /> <br />
      <button onClick={handlesubmit}>Login</button>

    </>
  )
}
export default Login;