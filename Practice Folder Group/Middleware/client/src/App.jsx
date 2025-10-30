import axios from 'axios';

function App() {

  const handleButton1 = async ()=>{
    const button1 = await axios.get("http://localhost:9001");
    console.log(button1.data);
  };

  const handleButton2 = async ()=>{
    const button2 = await axios.get("http://localhost:9001/about");
    console.log(button2.data);
  };

  const handleButton3 = async ()=>{
    const button3 = await axios.get("http://localhost:9001/service");
    console.log(button3.data);
  };

  const handleButton4 = async ()=>{
    try {
      const respnse = await axios.get("http://localhost:9001/home");
      console.log(respnse)
    }
    catch (error) {
      alert(error.response.data);
    }
  };

  const handleButton5 = async ()=>{
    try {
      const respnse = await axios.get("http://localhost:9001/button5");
      console.log(respnse);
    }
    catch (error) {
      alert(error.response.data);
    }
  };

  const handleButton6 = async ()=>{
    try {
      const respnse = await axios.get("http://localhost:9001/button6");
      console.log(respnse)
    }
    catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <>
      <button onClick={handleButton1}>button1</button>
      <button onClick={handleButton2}>button2</button>
      <button onClick={handleButton3}>button3</button>
      <button onClick={handleButton4}>button4</button>
      <button onClick={handleButton5}>button5</button>
      <button onClick={handleButton6}>button6</button>
    </>
  )
}

export default App
