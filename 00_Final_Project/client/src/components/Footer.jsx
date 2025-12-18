import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-box brand">
          <h2>ElectroMart</h2>
          <p>
            Your one-stop destination for the latest electronic gadgets,
            accessories, and smart devices at the best prices.
          </p>
        </div>

        {/* Customer Support */}
        <div className="footer-box">
          <h3>Customer Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Order Tracking</li>
            <li>Warranty & Repair</li>
            <li>Returns & Refunds</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Shop Categories */}
        <div className="footer-box">
          <h3>Shop Gadgets</h3>
          <ul>
            <li>Smartphones</li>
            <li>Laptops</li>
            <li>Headphones</li>
            <li>Smart Watches</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* App & Social */}
        <div className="footer-box">
          <h3>Get Our App</h3>
          <p>Fast shopping | Secure payments</p>

          <div className="store-images">
            <img src="play-store.png" alt="Play Store" />
            <img src="app-store.png" alt="App Store" />
          </div>

          <div className="social">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>YouTube</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © 2025 ElectroMart | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
