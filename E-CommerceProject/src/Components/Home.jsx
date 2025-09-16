import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function GridExample({ query = "" }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products.slice(0, 28)))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const normalizedQuery = query.trim().toLowerCase();
  const filtered = normalizedQuery
    ? products.filter((p) =>
        [p.title, p.description, p.category]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(normalizedQuery))
      )
    : products;

  return (
    <div className="container mt-4 mb-5">
      <Row xs={1} md={3} lg={4} className="g-4">
        {filtered.map((product) => (
          <Col key={product.id}>
            <Card
              as={Link}
              to={`/product/${product.id}`}
              className="h-100 shadow-sm border-0 rounded-3 p-3 bg-secondary bg-opacity-10 text-decoration-none text-dark"
            >
              <Card.Img
                variant="top"
                src={product.thumbnail}
                alt={product.title}
                style={{
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  backgroundColor: "#ffffff",
                }}
              />
              <Card.Body>
                <Card.Title className="fw-bold">{product.title}</Card.Title>
                <Card.Text className="text-muted">
                  {product.description.length > 60
                    ? product.description.slice(0, 60) + "..."
                    : product.description}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-dark">${product.price}</span>
                  <div></div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default GridExample;
