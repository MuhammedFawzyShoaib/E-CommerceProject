// src/context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import {
  getCartByUser,
  addCart,
  updateCart,
  deleteCart,
} from "../api/cartAPI";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const userId = 1; // ثابت مؤقتًا

  // ✅ تحميل الكارت عند أول تشغيل
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setCart(JSON.parse(saved));
    } else {
      getCartByUser(userId).then((data) => {
        if (data?.carts?.length > 0) {
          const products = data.carts[0].products.map((p) => ({
            id: p.id || p.productId,
            title: p.title || "",
            price: p.price || 0,
            quantity: p.quantity || 1,
            thumbnail: p.thumbnail || "",
          }));
          setCart(products);
          localStorage.setItem("cart", JSON.stringify(products));
        }
      });
    }
  }, []);

  // ✅ تحديث localStorage كل ما الكارت يتغير
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ إضافة منتج
  const addToCart = async (product, qty) => {
    const existing = cart.find((item) => item.id === product.id);
    let newCart;
    if (existing) {
      newCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + qty }
          : item
      ).filter((item) => item.quantity > 0); // لو الكمية بقت 0 يتم حذفها
    } else {
      newCart = [
        ...cart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          quantity: qty,
        },
      ];
    }
    setCart(newCart);

    await addCart(userId, newCart.map((p) => ({ id: p.id, quantity: p.quantity })));
  };

  // ✅ تحديث الكمية مباشرة
  const updateItem = async (productId, qty) => {
    if (qty < 1) return;
    const newCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: qty } : item
    );
    setCart(newCart);
    await updateCart(1, newCart.map((p) => ({ id: p.id, quantity: p.quantity })));
  };

  // ✅ حذف منتج
  const removeItem = async (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
    await updateCart(1, newCart.map((p) => ({ id: p.id, quantity: p.quantity })));
  };

  // ✅ تفريغ الكارت كله
  const clearCart = async () => {
    setCart([]);
    localStorage.removeItem("cart");
    await deleteCart(1);
  };

  // ✅ إتمام الطلب (Checkout)
  const checkout = async () => {
    if (cart.length === 0) return alert("Cart is empty!");
    const res = await addCart(userId, cart.map((p) => ({ id: p.id, quantity: p.quantity })));
    alert("✅ Order placed successfully!");
    clearCart();
    return res;
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateItem, removeItem, clearCart, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
};
