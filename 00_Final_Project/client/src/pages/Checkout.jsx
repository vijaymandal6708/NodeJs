import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.mycart.cart);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qnty,
    0
  );

  const shipping = subtotal > 1000 ? 0 : 99;
  const total = subtotal + shipping;

  const initPay = (order) => {
    const options = {
      key: "rzp_test_Rw76xQgbll2xwW",
      amount: order.amount,
      currency: order.currency,
      name: "Gadget Galaxy",
      description: "Secure Checkout",
      order_id: order.id,
      handler: async (response) => {
        try {
          await axios.post(
            "http://localhost:8000/api/payment/verify",
            response
          );
          alert("Payment Successful ✅");
          navigate("/payment-success");
        } catch {
          alert("Payment verification failed ❌");
        }
      },
      theme: { color: "#0c0243" },
    };

    new window.Razorpay(options).open();
  };

  const handlePay = async () => {
    if (cartItems.length === 0) {
      alert("Cart is empty ❌");
      return;
    }

    const { data } = await axios.post(
      "http://localhost:8000/api/payment/orders",
      { amount: total * 100 }
    );

    initPay(data.data);
  };

  return (
    <>
      {/* ===== PROFESSIONAL CHECKOUT CSS ===== */}
      <style>{`
        * {
          box-sizing: border-box;
          font-family: "Inter", system-ui, sans-serif;
        }

        body {
          background: #f4f6f8;
        }

        /* ===== PAGE ===== */
        .checkout-page {
          min-height: 100vh;
          max-width: 960px;
          margin: auto;
          padding: 40px 20px 80px;
          overflow-x: hidden;
        }

        .checkout-title {
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 30px;
          text-align: center;
        }

        /* ===== SECTION ===== */
        .section {
          background: #ffffff;
          border-radius: 16px;
          padding: 28px 35px;
          margin-bottom: 26px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }

        .section h3 {
          font-size: 20px;
          margin-bottom: 20px;
          font-weight: 600;
        }

        /* ===== INPUTS ===== */
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-grid input {
          height: 44px;
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 14px;
          display: block;
          line-height: normal;
        }

        .form-grid .full {
          grid-column: span 2;
        }

        /* ===== SUMMARY ===== */
        .summary-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
          font-size: 15px;
        }

        .summary-item strong {
          font-weight: 600;
        }

        hr {
          border: none;
          border-top: 1px solid #eee;
          margin: 18px 0;
        }

        .summary-total {
          font-size: 18px;
          font-weight: 700;
        }

        /* ===== PAY BUTTON ===== */
        .pay-btn {
          margin-top: 22px;
          width: 40%;
          height: 48px;
          border-radius: 12px;
          border: none;
          background: #0c0243;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          margin-left: 250px;
        }

        .pay-btn:hover {
          background: #1b0f6f;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 600px) {
          .checkout-title {
            font-size: 26px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-grid .full {
            grid-column: span 1;
          }
        }
      `}</style>

      {/* ===== JSX ===== */}
      <div className="checkout-page">
        <h2 className="checkout-title">Checkout</h2>

        {/* SHIPPING DETAILS */}
        <div className="section">
          <h3>Shipping Information</h3>

          <div className="form-grid">
            <input placeholder="Full Name" />
            <input placeholder="Email Address" />
            <input placeholder="Phone Number" />
            <input placeholder="City" />
            <input className="full" placeholder="Full Address" />
            <input placeholder="Pincode" />
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="section">
          <h3>Order Summary</h3>

          {cartItems.map((item) => (
            <div key={item.id} className="summary-item">
              <span>
                {item.name} × {item.qnty}
              </span>
              <strong>₹{item.price * item.qnty}</strong>
            </div>
          ))}

          <hr />

          <div className="summary-item">
            <span>Subtotal</span>
            <strong>₹{subtotal}</strong>
          </div>

          <div className="summary-item">
            <span>Shipping</span>
            <strong>{shipping === 0 ? "Free" : `₹${shipping}`}</strong>
          </div>

          <div className="summary-item summary-total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button className="pay-btn" onClick={handlePay}>
            Pay Securely ₹{total}
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
