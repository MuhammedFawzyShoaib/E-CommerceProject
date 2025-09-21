import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

function HeroCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        const discounted = data.products.filter(
          (p) => p.discountPercentage > 10
        );
        setOffers(discounted);
      });
  }, []);

  return (
    <section className="hero-carousel">
      <Carousel fade interval={4000} pause="hover">
        {offers.map((item, index) => (
          <Carousel.Item key={index} className="text-center position-relative">
            {/* الصورة + الظل */}
            <div
              style={{
                width: "100%",
                height: "600px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#000",
                position: "relative",
              }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  zIndex: 1,
                }}
              />
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(135deg, #1A1A1A7D, #7D7B7B7D)",
                  zIndex: 2,
                }}
              ></div>
            </div>

            {/* الكتابة فوق الـ overlay */}
            <Carousel.Caption
              style={{
                zIndex: 3,
                bottom: "20%",
              }}
            >
              <Badge bg="danger" className="mb-3 fs-5 px-3 py-2 shadow">
                Sale {item.discountPercentage}%
              </Badge>
              <h2 className="fw-bold display-4 text-warning text-shadow">
                {item.title}
              </h2>
              <p className="lead text-light mb-4 text-shadow">
                {item.description}
              </p>
              <a
                href={`/product/${item.id}`}
                className="btn btn-warning btn-lg fw-bold px-4 py-2 shadow"
              >
                Shop Now
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default HeroCarousel;
