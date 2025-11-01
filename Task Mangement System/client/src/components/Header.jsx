import React from "react";
import "../css/header.css";

const Header = () => {
  return (
    <div className="page">
      <header className="header">
        <div className="logo">Task Manager</div>
        <nav className="nav">
          {["Home", "Tasks", "Profile", "Logout"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="nav-link"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Header;
