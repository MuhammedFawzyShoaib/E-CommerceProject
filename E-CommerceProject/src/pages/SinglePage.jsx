// pages/SinglePage.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Alert,
  ListGroup,
} from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const SinglePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load product");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="m-4">
        {error}
      </Alert>
    );
  }

  if (!product) return null;

  return (
    <Container className="my-4">
      <Row className="g-4">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Img
              variant="top"
              src={product.thumbnail}
              alt={product.title}
              style={{ height: "400px", objectFit: "contain" }}
            />
          </Card>
        </Col>
        <Col md={6}>
          <h2 className="fw-bold">{product.title}</h2>
          <p className="text-muted">{product.description}</p>

          <div className="d-flex align-items-center mb-3">
            <span className="fs-4 fw-bold me-3">${product.price}</span>
            <span className="badge bg-warning text-dark">
              Rating: {product.rating}
            </span>
          </div>

          <ListGroup className="mb-3">
            <ListGroup.Item>
              <strong>Brand:</strong> {product.brand}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Category:</strong> {product.category}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Stock:</strong> {product.stock}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Warranty:</strong> {product.warrantyInformation}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Shipping:</strong> {product.shippingInformation}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Return Policy:</strong> {product.returnPolicy}
            </ListGroup.Item>
          </ListGroup>

          <div className="d-flex gap-2 mb-3">
            <Button variant="warning" onClick={() => addToCart(product, 1)}>
              Add to Cart
            </Button>
            <Button
              variant={isInWishlist(product.id) ? "danger" : "outline-danger"}
              onClick={() => toggleWishlist(product)}
            >
              {isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
            </Button>
            <Button variant="outline-dark" as={Link} to="/">
              Back to Home
            </Button>
          </div>
        </Col>
      </Row>

      {product.reviews && product.reviews.length > 0 && (
        <Row className="mt-5">
          <Col>
            <h4 className="fw-bold mb-3">Customer Reviews</h4>
            <ListGroup>
              {product.reviews.map((review, idx) => (
                <ListGroup.Item key={idx}>
                  <strong>{review.reviewerName}</strong> ({review.rating}★) <br />
                  <span>{review.comment}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default SinglePage;
