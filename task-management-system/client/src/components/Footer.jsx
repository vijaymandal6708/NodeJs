import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="tm-footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Task Manager • All Rights Reserved
      </p>

      <div className="footer-icons">
        <a href="mailto:support@taskmanager.com"><FaEnvelope /></a>
        <a href="tel:+919876543210"><FaPhone /></a>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedin /></a>
      </div>
    </footer>
  );
};

export default Footer;
