import React, { useMemo, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
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

function AppRoutes() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

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

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  const cartCount = useMemo(
    () => cartItems.reduce((sum, p) => sum + p.quantity, 0),
    [cartItems]
  );

  return (
    <>
      <NavBar cartCount={cartCount} />
      {isHome && <Header />}
      <Filter onSearch={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home query={searchQuery} />} />
        <Route
          path="/product/:id"
          element={<SinglePage onAddToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart items={cartItems} onRemoveItem={removeFromCart} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
