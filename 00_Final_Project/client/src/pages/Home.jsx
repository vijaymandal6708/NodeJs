import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const navigate = useNavigate();
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
      {/* ===== FULL PAGE CSS ===== */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #f4f6f8;
        }

        .home-page {
          width: 100vw;
        }

        /* ===== GRID ===== */
        .products-container {
          width: 100vw;
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* ✅ 4 per row */
          gap: 32px;
          padding: 60px 80px;
        }

        /* ===== CARD ===== */
        .product-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          width: 325px;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.18);
        }

        /* ===== IMAGE ===== */
        .product-image {
          height: 260px;
          background: linear-gradient(145deg, #eef1f5, #ffffff);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .product-image img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .product-card:hover img {
          transform: scale(1.06);
        }

        /* ===== INFO ===== */
        .product-info {
          padding: 8px 30px 25px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .product-info h4 {
          font-size: 17px;
          font-weight: 600;
          color: #222;

          /* 👇 force 2-line space */
          line-height: 1.4;
          height: calc(1.4em * 2); /* always 2 lines */
  
          display: -webkit-box;
          -webkit-line-clamp: 2;   /* max 2 lines */
          -webkit-box-orient: vertical;
          overflow: hidden;

          margin-bottom: 6px;
        }


        .category {
          font-size: 12px;
          color: #888;
          text-transform: uppercase;
          margin-bottom: 0px;
        }

        /* ===== STAR RATING ===== */
        .rating {
          font-size: 14px;
          color: #f5b301;
          margin-bottom: 2px;
        }

        .rating span {
          color: #666;
          font-size: 12px;
          margin-left: 6px;
        }

        /* ===== PRICE ===== */
        .price-box {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .mrp {
          font-size: 14px;
          color: #999;
          text-decoration: line-through;
        }

        .price {
          font-size: 18px;
          font-weight: 700;
          color: #4b0082;
        }

        .offer{
          font-size: 12px;
        }

        /* ===== BUTTON ===== */
        .add-cart-btn {
          margin-top: -10px;
          width: 100%;
          background: linear-gradient(135deg, #4b0082, #6a1bb1);
          border: none;
          color: white;
          padding: 10px 0;
          border-radius: 16px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .add-cart-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(75,0,130,0.45);
        }

        .section-header {
          width: 100%;
          padding: 40px 80px 10px;
          text-align: center;
          margin-bottom: -40px;
        }

        .section-header h2 {
          font-size: 32px;
          font-weight: 700;
          color: #222;
          margin-bottom: 4px;
        }

        .section-header p {
          font-size: 14px;
          color: #666;
        }


        /* ===== RESPONSIVE ===== */
        @media (max-width: 1200px) {
          .products-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 900px) {
          .products-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .products-container {
            grid-template-columns: 1fr;
            padding: 30px 20px;
          }
        }
      `}</style>

      {/* ===== UI ===== */}
      <div className="home-page">
        <Slider />

        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Top picks hand-selected for you</p>
        </div>

        <div className="products-container">
          {mydata.map((item) => (
            <div className="product-card" key={item._id} onClick={()=> navigate(`/product/${item._id}`)}>
              <div className="product-image">
                <img src={item.defaultImage} alt={item.name} />
              </div>

              <div className="product-info">
                <h4>{item.name}</h4>

                <div className="rating">
                  {(() => {
                    let rating = parseFloat(item.starRating);

                    // ✅ If NaN or invalid → treat as 0
                    if (isNaN(rating)) rating = 0;

                    const fullStars = Math.floor(rating);
                    const hasHalfStar = rating - fullStars >= 0.5;
                    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

                    return (
                      <>
                        {"★".repeat(fullStars)}
                        {hasHalfStar && "⯪"}
                        {"☆".repeat(emptyStars)}
                        <span>{rating} stars</span>
                      </>
                    );
                  })()}
                </div>

                <div className="price-box">
                  <span className="price">₹{item.price}</span>
                  <span className="mrp">₹{item.MRP}</span>
                  <span className="offer">30% off</span>
                </div>

                <button className="add-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
