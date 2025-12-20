import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import axios from 'axios';

const Home = () => {

  const [mydata,setMydata] = useState();

         const loadData = async () => {
      const {data} = await axios.get(`${import.meta.env.VITE_BACKENDURL}/product/product-display`);
     setMydata(data);
    }

    useEffect(()=>{
 
      loadData();
    },[]);

  return (
    <>
      <Slider></Slider>
    </>
  )
}

export default Home
