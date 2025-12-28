import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Layout2 from "./Layout2";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./admin/AdminDashboard";
import AddProduct from "./admin/AddProduct";
import ProductDetails from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Signup from "./pages/Signup";
import OrderConfirmation from "./pages/OrderConfirmation";

function App() {
  return (
    <Routes>
      {/* MAIN WEBSITE + ADMIN */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="order-confirmation" element={<OrderConfirmation />} />
        <Route path="orders" element={<Orders />} />

        {/* ADMIN */}
        <Route path="admin-dashboard" element={<AdminDashboard />}>
          <Route path="add-product" element={<AddProduct />} />
        </Route>
      </Route>

      {/* AUTH (NO HEADER/FOOTER) */}
      <Route path="/login" element={<Layout2 />}>
        <Route index element={<Login />} />
      </Route>

      <Route path="/signup" element={<Layout2 />}>
        <Route index element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
