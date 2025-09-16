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
} from "react-bootstrap";

const SinglePage = ({ onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
              style={{ height: "400px", objectFit: "cover" }}
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
          <div className="mb-3">
            <span className="text-uppercase small text-muted">Category:</span>
            <span className="ms-2 fw-semibold">{product.category}</span>
          </div>
          <div className="d-flex gap-2">
            <Button
              variant="warning"
              onClick={() => onAddToCart && onAddToCart(product)}
            >
              Add to Cart
            </Button>
            <Button variant="outline-dark" as={Link} to="/">
              Back to Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SinglePage;
