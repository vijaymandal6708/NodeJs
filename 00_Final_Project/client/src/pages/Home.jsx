import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import axios from "axios";

const Home = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKENDURL}/product/product-display`
    );
    setMydata(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {/* ===== HOME CSS (SAME FILE) ===== */}
      <style>{`
        .products-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 30px;
          padding: 40px 70px;
          background: #f7f7f7;
        }

        .product-card {
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }

        .product-image {
          height: 200px;
          background: #f1f1f1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-image img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }

        .product-info {
          padding: 15px;
          text-align: center;
        }

        .product-info h4 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .category {
          font-size: 13px;
          color: #777;
          margin-bottom: 8px;
        }

        .price {
          font-size: 18px;
          font-weight: bold;
          color: #4b0082;
          margin-bottom: 12px;
        }

        .add-cart-btn {
          background: linear-gradient(135deg, #6a00ff, #9d4edd);
          border: none;
          color: white;
          padding: 10px 16px;
          border-radius: 25px;
          cursor: pointer;
          font-size: 14px;
        }

        .add-cart-btn:hover {
          background: linear-gradient(135deg, #4b0082, #7b2cbf);
        }
      `}</style>

      {/* ===== UI ===== */}
      <Slider />

      <div className="products-container">
        {mydata.map((item) => (
          <div className="product-card" key={item._id}>
            <div className="product-image">
              <img src={item.defaultImage} alt={item.name} />
            </div>

            <div className="product-info">
              <h4>{item.name}</h4>
              <p className="category">{item.category}</p>
              <p className="price">₹{item.price}</p>
              <button className="add-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
