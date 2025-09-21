// src/api/cartAPI.js
const API_URL = "https://dummyjson.com/carts";

// ✅ Get cart by user
export async function getCartByUser(userId) {
  const res = await fetch(`${API_URL}/user/${userId}`);
  return res.json();
}

// ✅ Add a new cart (لو مفيش كارت)
export async function addCart(userId, products) {
  const res = await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, products }),
  });
  return res.json();
}

// ✅ Update an existing cart
export async function updateCart(cartId, products) {
  const res = await fetch(`${API_URL}/${cartId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ merge: true, products }),
  });
  return res.json();
}

// ✅ Delete a cart
export async function deleteCart(cartId) {
  const res = await fetch(`${API_URL}/${cartId}`, { method: "DELETE" });
  return res.json();
}
