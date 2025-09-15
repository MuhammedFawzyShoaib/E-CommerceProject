import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function GridExample() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products.slice(0, 28)))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mt-4 mb-5">
      <Row xs={1} md={3} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm border-0 rounded-3 p-3 bg-secondary bg-opacity-10">
              <Card.Img
                variant="top"
                src={product.thumbnail}
                alt={product.title}
                style={{ height: "300px", objectFit: "cover", borderRadius: "5px", backgroundColor: "#ffffff" }}
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
                  <div>
                    <Button variant="outline-dark" size="sm" className="me-2">
                      <i className="bi bi-heart"></i>
                    </Button>
                    <Button variant="warning opacity-100" size="sm">
                      <i className="bi bi-cart"></i>
                    </Button>
                  </div>
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
