import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/"); 
        setData(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>This is HomePage</h1>
      <h2>API Response: {data}</h2>
    </>
  );
};

export default Home;
