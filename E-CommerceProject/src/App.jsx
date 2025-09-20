import React, { useMemo, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

// Components
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Filter from "./Components/Filter";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import SinglePage from "./Components/SinglePage";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Contact from "./Components/ContactUs";
import About from "./Components/About/About";


// Dashboards
import AdminDashboard from "./Components/AdminDashboard";
import SellerDashboard from "./Components/SellerDashboard";
import CustomerDashboard from "./Components/CustomerDashboard";

function AppRoutes() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add to cart
  const addToCart = (item) => {
    setCartItems((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + 1 };
        return copy;
      }
      return [
        ...prev,
        {
          id: item.id,
          title: item.title,
          price: item.price,
          thumbnail: item.thumbnail,
          quantity: 1,
        },
      ];
    });
  };

  // ✅ Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  // ✅ Cart counter
  const cartCount = useMemo(
    () => cartItems.reduce((sum, p) => sum + p.quantity, 0),
    [cartItems]
  );

  return (
    <>
      <NavBar cartCount={cartCount} />
      {isHome && <Header />}
      {isHome && <Filter onSearch={setSearchQuery} />}
      <Routes>
        {/* صفحات المتجر */}
        <Route path="/" element={<Home query={searchQuery} />} />
        <Route
          path="/product/:id"
          element={<SinglePage onAddToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart items={cartItems} onRemoveItem={removeFromCart} />}
        />

        {/* صفحات عامة */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* Dashboards حسب الدور */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route
          path="/customer/dashboard"
          element={<CustomerDashboard onAddToCart={addToCart} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
    useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;





