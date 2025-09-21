// src/components/TestimonialsCarousel.jsx
import React from "react";
import { Carousel, Container } from "react-bootstrap";

const TestimonialsCarousel = () => {
  return (
    <section className="py-5 bg-white">
      <Container data-aos="fade-up">
        <h2 className="text-center mb-4 fw-bold text-warning">
          What Our Customers Say
        </h2>

        <Carousel
          interval={4000}
          pause="hover"
          prevIcon={
            <i className="bi bi-arrow-left-circle-fill fs-2 text-dark"></i>
          }
          nextIcon={
            <i className="bi bi-arrow-right-circle-fill fs-2 text-dark"></i>
          }
        >
          <Carousel.Item>
            <div className="text-center">
              <p className="lead fst-italic">
                "This e-commerce platform is fast and easy to use. Highly
                recommend!"
              </p>
              <h5 className="fw-bold text-secondary">- Sarah M.</h5>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="text-center">
              <p className="lead fst-italic">
                "Amazing products and outstanding customer service. My go-to
                store now."
              </p>
              <h5 className="fw-bold text-secondary">- John D.</h5>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="text-center">
              <p className="lead fst-italic">
                "A smooth shopping experience with secure checkout and fast
                delivery!"
              </p>
              <h5 className="fw-bold text-secondary">- Emma R.</h5>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialsCarousel;
