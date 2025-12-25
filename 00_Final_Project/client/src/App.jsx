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

function App() {
  return (
    <Routes>

      {/* Main website + Admin */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetails />} />


        {/* ADMIN ROUTES */}
        <Route path="admin-dashboard" element={<AdminDashboard />}>
          <Route path="add-product" element={<AddProduct />} />
        </Route>
      </Route>

      {/* Auth */}
      <Route path="/login" element={<Layout2 />}>
        <Route index element={<Login />} />
      </Route>

    </Routes>
  );
}

export default App;
