import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductDetail = () => {
  const [data, setData] = useState({});

  const loadData = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKENDURL}/product/product-detail`
    );
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const starRating = parseFloat(data.starRating)||0;

  return (
    <div
      className="main-container"
      style={{ padding: "30px 70px", height: "83vh", width: "100vw" }}
    >
      <div
        className="detail-container"
        style={{
          background: "white",
          minHeight: "78vh",
          borderRadius: "25px",
          padding: "25px 60px",
          display: "flex",
        }}
      >
        <div
          className="image-container"
          style={{
            height: "520px",
            width: "37vw",
            border: "1px solid black",
            display: "flex",
          }}
        >
          <div
            className="thumb"
            style={{ height: "520px", width: "22%", border: "1px solid black" }}
          >
            {/* <img src="" alt="" /> */}
            {/* <img src="" alt="" /> */}
            {/* <img src="" alt="" /> */}
            {/* <img src="" alt="" /> */}
          </div>
          <div
            className="main-image"
            style={{
              height: "519px",
              width: "78%",
              padding: "50px 20px",
              background: "lightgrey",
              border: "8px solid white",
              boxSizing: "border-box",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/asus-rog-strix01.jpg"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div
          className="description"
          style={{
            height: "520px",
            width: "48vw",
            border: "1px solid black",
            paddingTop: "50px",
            paddingBottom: "50px",
            paddingLeft: "60px",
            paddingRight: "10px",
          }}
        >
          <h2 style={{ fontWeight: "bolder", fontSize: "34px" }}>
            {data.name}
          </h2>
          <div className="rating">
            {"★".repeat(Math.floor(starRating))}
            {starRating % 1 >= 0.5 && "⯪"}
            {"☆".repeat(5 - Math.floor(starRating) - (starRating % 1 >= 0.5 ? 1 : 0))}
            <span style={{marginLeft:"15px"}}>{starRating} stars</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
