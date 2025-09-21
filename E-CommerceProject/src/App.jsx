// src/App.jsx
import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Static/Navbar";
import Home from "./pages/Home";
import { WishlistProvider } from "./context/WishlistContext";
import HeroCarousel from "./components/Home/HeroCarousel";
import TopRatedCarousel from "./components/Home/TopRatedCarousel";
import Products from "./components/Home/Products";
import Footer from "./components/Static/Footer";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import SinglePage from "./pages/SinglePage";
import Login from "./components/Login";
import Register from "./components/Register";
import Contact from "./components/ContactUs";
import About from "./components/About/About";
import AdminDashboard from "./pages/AdminDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroCarousel />
                  <TopRatedCarousel />
                  <Home />
                </>
              }
            />
            <Route path="/product/:id" element={<SinglePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
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
              element={<CustomerDashboard />}
            />

          </Routes>
          <Footer />
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
