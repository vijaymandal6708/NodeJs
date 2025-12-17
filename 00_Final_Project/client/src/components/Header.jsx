import { Link } from "react-router-dom";
import "./Header.css";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="header-container">
      <div className="top-header-container">
        <div className="left-container">
          <div className="logo">
            <div className="circle"></div>
            <p>.Gadget Galaxy</p>
          </div>

          <Link to="/home">Home</Link>
          <Link to="/home">Smartphones</Link>
          <Link to="/home">Laptops</Link>
          <Link to="/home">Accessories</Link>
          <Link to="/home">Cameras</Link>
        </div>

        <div className="right-container">
          <p>Wishlist</p>
          <p>Cart</p>
        </div>
      </div>
      <div className="bottom-header-container">
        <div className="search-bar">
          <div className="search-icon">
            <IoSearchOutline />
          </div>
          <input type="text" placeholder="Search products"/>
          <div className="search-button">Search</div>
        </div>
        <div className="profile"></div>
      </div>
    </div>
  );
};

export default Header;
