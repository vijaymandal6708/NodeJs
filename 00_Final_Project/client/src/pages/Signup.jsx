import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      !form.name ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.pincode
    ) {
      alert("Please fill all required fields ❌");
      return;
    }

    // ✅ SAVE TO LOCAL STORAGE
    localStorage.setItem("userAddress", JSON.stringify(form));

    navigate("/checkout");
  };

  return (
    <>
      <style>{`
        * {
          font-family: "Inter", system-ui, sans-serif;
          box-sizing: border-box;
        }

        body {
          background: #f4f6f8;
        }

        .signup-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px;
        }

        .signup-box {
          background: white;
          padding: 40px 45px;
          border-radius: 16px;
          width: 420px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }

        h2 {
          text-align: center;
          margin-bottom: 25px;
        }

        input {
          width: 100%;
          padding: 12px;
          margin-bottom: 14px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        button {
          width: 100%;
          height: 44px;
          border: none;
          background: #0c0243;
          color: white;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }

        button:hover {
          background: #1b0f6f;
        }
      `}</style>

      <div className="signup-page">
        <div className="signup-box">
          <h2>Shipping Details</h2>

          <input name="name" placeholder="Full Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} />
          <input name="address" placeholder="Full Address" onChange={handleChange} />
          <input name="city" placeholder="City" onChange={handleChange} />
          <input name="pincode" placeholder="Pincode" onChange={handleChange} />

          <button onClick={handleSubmit}>Continue to Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Signup;
