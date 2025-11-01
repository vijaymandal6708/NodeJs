import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Task Manager. All Rights Reserved.</div>

      <div className="footer-links">
        {["Privacy", "Terms", "Support"].map((item) => (
          <a key={item} href={`/${item.toLowerCase()}`} className="footer-link">
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
