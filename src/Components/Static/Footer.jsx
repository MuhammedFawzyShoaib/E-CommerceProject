import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // ✅ Fetch categories from API
  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const visibleCategories = showAll ? categories : categories.slice(0, 8);

  return (
    <footer className="text-center text-lg-start bg-dark text-light mt-4 pt-4 position-static translate-bottom-100% w-100">
      <Container className="text-center text-md-start">
        <Row>
          {/* Categories Column */}
          <Col md={6} lg={6} xl={6} className="mb-4">
            <h6 className="text-uppercase fw-bold mb-3 text-warning">
              Categories
            </h6>

            <div
              className="d-grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                display: "grid",
                gap: "8px"
              }}
            >
              {visibleCategories.map((cat, index) => (
                <Link
                  key={index}
                  to={`/?category=${cat}`}
                  className="btn btn-outline-warning btn-sm text-truncate"
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Link>
              ))}
            </div>

            {categories.length > 8 && (
              <div className="mt-3">
                <Button
                  variant="link"
                  className="text-warning text-decoration-none"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "Show Less ↑" : "Show More ↓"}
                </Button>
              </div>
            )}
          </Col>

          {/* Useful Links */}
          <Col md={3} lg={3} xl={3} className="mb-4">
            <h6 className="text-uppercase fw-bold mb-3 text-warning">
              Useful Links
            </h6>
            <p>
              <Link to="/" className="text-reset text-decoration-none">
                Home
              </Link>
            </p>
            <p>
              <Link to="/shop" className="text-reset text-decoration-none">
                Shop
              </Link>
            </p>
            <p>
              <Link to="/about" className="text-reset text-decoration-none">
                About Us
              </Link>
            </p>
            <p>
              <Link to="/contact" className="text-reset text-decoration-none">
                Contact
              </Link>
            </p>
          </Col>

          {/* Contact */}
          <Col md={3} lg={3} xl={3} className="mb-4">
            <h6 className="text-uppercase fw-bold mb-3 text-warning">
              Contact
            </h6>
            <p>
              <i className="bi bi-house-door-fill me-2"></i> Cairo, Egypt
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2"></i> info@shop.com
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i> +20 123 456 789
            </p>
            <p>
              <i className="bi bi-printer-fill me-2"></i> +20 987 654 321
            </p>
          </Col>
        </Row>
      </Container>

      <div className="text-center p-3 bg-black">
        © {new Date().getFullYear()} Your E-Commerce Project
      </div>
    </footer>
  );
};

export default Footer;
