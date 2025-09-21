// src/components/TopRatedCarousel.jsx
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function TopRatedCarousel() {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5&sort=rating")
      .then((res) => res.json())
      .then((data) => setTopProducts(data.products || []))
      .catch((err) => console.error("Error fetching top rated products:", err));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4 text-center text-warning">
        <i className="bi bi-star-fill me-2"></i> Top Rated Products
      </h2>

      <Carousel fade interval={4000} pause="hover" className="shadow-lg rounded">
        {topProducts.map((product) => (
          <Carousel.Item key={product.id}>
            <div
              className="position-relative d-flex justify-content-center align-items-center"
              style={{
                height: "500px",
                background: "linear-gradient(135deg, #1a1a1a, #333)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  borderRadius: "12px",
                  transition: "transform 0.4s ease-in-out",
                }}
                className="carousel-product-img"
              />

              {/* شارة مميزة للـ top rated */}
              <span
                className="position-absolute top-0 start-0 bg-warning text-dark fw-bold px-3 py-1 rounded-end"
                style={{ margin: "15px", fontSize: "1rem" }}
              >
                ⭐ {product.rating} / 5
              </span>
            </div>

            <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-4">
              <h3 className="fw-bold text-warning">{product.title}</h3>
              <p className="text-light text-truncate">{product.description}</p>
              <div className="d-flex justify-content-center gap-3 mt-2">
                <span className="badge bg-success fs-6 px-3 py-2">
                  ${product.price}
                </span>
                <Button variant="warning" size="sm" href={`/product/${product.id}`}>
                  View Product
                </Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default TopRatedCarousel;
