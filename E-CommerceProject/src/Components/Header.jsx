import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function HeroCarousel() {
  return (
    <Carousel fade interval={3000} pause="hover">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/60/1600/600"
          alt="First slide"
        />
        <div className="carousel-overlay"></div>
        <Carousel.Caption>
          <h2 className="fw-bold display-4 text-warning">
            Discover Amazing Products
          </h2>
          <p className="lead text-light">
            Shop the latest trends and enjoy the best deals every day.
          </p>
          <a href="/" className="btn bg-warning btn-lg mt-2">
            Shop Now
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/1019/1600/600"
          alt="Second slide"
        />
        <div className="carousel-overlay"></div>
        <Carousel.Caption>
          <h2 className="fw-bold display-4 text-warning">Unbeatable Prices</h2>
          <p className="lead text-light">
            Save more with exclusive discounts and offers every week.
          </p>
          <a href="/" className="btn bg-warning btn-lg mt-2">
            View Deals
          </a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/id/888/1600/600"
          alt="Third slide"
        />
        <div className="carousel-overlay"></div>
        <Carousel.Caption>
          <h2 className="fw-bold display-4 text-warning">
            Fast & Secure Shopping
          </h2>
          <p className="lead text-light">
            Experience seamless checkout and quick delivery to your doorstep.
          </p>
          <a href="#contact" className="btn bg-warning btn-lg mt-2">
            Learn More
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;
