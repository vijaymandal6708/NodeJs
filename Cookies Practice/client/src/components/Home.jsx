import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    axios.get("http://localhost:9000/cookies", {
      withCredentials: true,
    });
  }, []);

  return <h1>This is Home Page</h1>;
};

export default Home;
