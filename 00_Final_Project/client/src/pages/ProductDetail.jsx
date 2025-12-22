import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const loadProduct = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKENDURL}/product/product-display`
      );

      const p = data.find(item => item._id === id);
      setProduct(p);
      setSelectedImage(p?.defaultImage || p?.images?.[0]);
    };

    loadProduct();
  }, [id]);

  if (!product) return <h2 style={{ padding: 60 }}>Loading...</h2>;

  const rating = parseFloat(product.starRating) || 0;

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: #f4f6f8;
        }

        /* FULL PAGE */
        .pd-page {
          width: 100vw;
          min-height: 80vh;
          padding: 30px 80px;
        }

        .pd-wrapper {
          width: 100%;
          min-height: calc(100vh - 100px);
          display: grid;
          grid-template-columns: 1.1fr 1.4fr;
          gap: 80px;
          background: #fff;
          border-radius: 28px;
          padding: 50px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
        }

        /* IMAGE SIDE */
        .image-side {
          display: flex;
          gap: 20px;
          height: 500px;
        }

        /* THUMBNAILS */
        .thumb-column {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .thumb {
          width: 80px;
          height: 80px;
          border-radius: 14px;
          background: #fff;
          border: 2px solid transparent;
          padding: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.25s;
        }

        .thumb img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .thumb:hover {
          border-color: #bbb;
        }

        .thumb.active {
          border-color: #4b0082;
          box-shadow: 0 6px 14px rgba(75,0,130,0.25);
        }

        /* MAIN IMAGE */
        .main-image {
          flex: 1;
          background: linear-gradient(145deg, #eef1f5, #ffffff);
          border-radius: 28px;
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .main-image img {
          max-width: 100%;
          max-height: 520px;
          object-fit: contain;
        }

        /* INFO SIDE */
        .info-side h1 {
          font-size: 32px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 14px;
        }

        .category {
          font-size: 13px;
          color: #777;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .rating {
          font-size: 18px;
          color: #f5b301;
          margin-bottom: 14px;
        }

        .rating span {
          color: #666;
          font-size: 14px;
          margin-left: 8px;
        }

        .price-box {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 20px 0;
        }

        .price {
          font-size: 26px;
          font-weight: 700;
          color: #4b0082;
        }

        .mrp {
          font-size: 18px;
          color: #999;
          text-decoration: line-through;
        }

        .offer {
          font-size: 14px;
          color: green;
          font-weight: 600;
        }

        .description {
          font-size: 16px;
          color: #555;
          line-height: 1.8;
          margin: 30px 0;
        }

        .qty-box {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 30px;
        }

        .qty-box button {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          border: none;
          font-size: 18px;
          cursor: pointer;
          background: #eee;
        }

        .qty-box span {
          font-size: 17px;
          font-weight: 600;
        }

        .action-buttons {
          display: flex;
          gap: 26px;
        }

        .add-cart,
        .buy-now {
          flex: 1;
          height: 56px;
          border-radius: 20px;
          font-size: 17px;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }

        .add-cart {
          background: linear-gradient(135deg, #4b0082, #6a1bb1);
          color: white;
        }

        .buy-now {
          background: #111;
          color: white;
        }

        /* RESPONSIVE */
        @media (max-width: 1000px) {
          .pd-page {
            padding: 20px;
          }

          .pd-wrapper {
            grid-template-columns: 1fr;
            padding: 30px;
            gap: 40px;
          }

          .image-side {
            flex-direction: column-reverse;
          }

          .thumb-column {
            flex-direction: row;
            justify-content: center;
          }
        }
      `}</style>

      <div className="pd-page">
        <div className="pd-wrapper">
          {/* IMAGE SIDE */}
          <div className="image-side">
            <div className="thumb-column">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  className={`thumb ${selectedImage === img ? "active" : ""}`}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt={`thumb-${i}`} />
                </div>
              ))}
            </div>

            <div className="main-image">
              <img src={selectedImage} alt={product.name} />
            </div>
          </div>

          {/* INFO SIDE */}
          <div className="info-side">
            {/* <div className="category">{product.category}</div> */}
            <h1>{product.name}</h1>

            <div className="rating">
              {"★".repeat(Math.floor(rating))}
              {"☆".repeat(5 - Math.floor(rating))}
              <span>{rating} stars</span>
            </div>

            <div className="price-box">
              <span className="price">₹{product.price}</span>
              <span className="mrp">₹{product.MRP}</span>
              <span className="offer">30% OFF</span>
            </div>

            <p className="description">
              {product.description ||
                "High-performance premium product with excellent build quality and long-term durability."}
            </p>

            <div className="qty-box">
              <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>

            <div className="action-buttons">
              <button className="add-cart">Add to Cart</button>
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
