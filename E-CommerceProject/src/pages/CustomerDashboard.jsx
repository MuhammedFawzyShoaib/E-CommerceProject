import React, { useState } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const CustomerDashboard = ({ onAddToCart }) => {
  const location = useLocation();
  const { email } = location.state || {};

  const [products] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 1200,
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Phone",
      price: 800,
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Headphones",
      price: 200,
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 300,
      thumbnail: "https://via.placeholder.com/150",
    },
  ]);

  return (
    <Container className="mt-4">
      <h2 className="text-center fw-bold mb-4">🛍 Customer Dashboard</h2>

      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <h5>👤 Welcome, {email || "Customer"}!</h5>
          <p className="text-muted">
            You are logged in as <strong>Customer</strong>.
          </p>
          <p>
            ✅ Your permissions: You can only browse products and add them to
            the cart.
          </p>
        </Card.Body>
      </Card>

      <Row>
        {products.map((product) => (
          <Col md={3} sm={6} xs={12} key={product.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={product.thumbnail}
                alt={product.name}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>💲 {product.price}</Card.Text>
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={() => onAddToCart && onAddToCart(product)}
                >
                  ➕ Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerDashboard;
