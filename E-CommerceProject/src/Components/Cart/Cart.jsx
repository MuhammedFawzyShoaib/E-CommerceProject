// src/components/Cart.jsx
import React, { useMemo } from "react";
import { Container, Row, Col, ListGroup, Badge, Button } from "react-bootstrap";
import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeItem, clearCart, checkout } = useCart();
  const shippingFee = 8;

  const { itemCount, subtotal } = useMemo(() => {
    const count = cart.reduce((sum, it) => sum + (it.quantity || 0), 0);
    const sub = cart.reduce(
      (sum, it) => sum + (it.price || 0) * (it.quantity || 0),
      0
    );
    return { itemCount: count, subtotal: sub };
  }, [cart]);

  const total = subtotal + (itemCount > 0 ? shippingFee : 0);

  return (
    <Container className="my-4">
      <Row>
        <Col md={8}>
          <h3 className="mb-3">
            Your Cart{" "}
            <Badge bg="warning" text="dark">
              {itemCount}
            </Badge>
          </h3>
          {cart.length === 0 ? (
            <p className="text-muted">Your cart is empty.</p>
          ) : (
            <ListGroup variant="flush">
              {cart.map((it) => (
                <CartItem key={it.id} item={it} />
              ))}
            </ListGroup>
          )}

          {cart.length > 0 && (
            <div className="d-flex gap-2 mt-3">
              <Button variant="danger" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button variant="success" onClick={checkout}>
                Checkout
              </Button>
            </div>
          )}
        </Col>
        <Col md={4}>
          <div className="p-3 border rounded-3 bg-light">
            <div className="d-flex justify-content-between mb-2">
              <span>Products</span>
              <span className="fw-semibold">{itemCount}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span className="fw-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Shipping</span>
              <span className="fw-semibold">
                ${itemCount > 0 ? shippingFee.toFixed(2) : (0).toFixed(2)}
              </span>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <span className="fw-bold">Total</span>
              <span className="fw-bold">${total.toFixed(2)}</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
