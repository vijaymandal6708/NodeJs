import { Link } from "react-router-dom";
import "./Header.css";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
// import { addToCart } from "../cartSlice";

const Header = () => {
  const myData=useSelector(state=>state.mycart.cart);
  console.log(myData);
  const productLength=myData.length;
  return (
    <div className="header-container">
      {/* <div className="top-line" style={{background:"#310253",height:"1px",width:"100%"}}></div> */}
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
          <FaRegHeart />
          <div className="cart-container">
             {productLength}
            <FiShoppingCart />
          </div>
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
        <Link to="/login">Login</Link>
        <div className="profile"></div>
      </div>
    </div>
  );
};

export default Header;
