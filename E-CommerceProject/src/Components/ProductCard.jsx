import { useState } from "react";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);

  return (
    <Card className="h-100 shadow-sm border-0 rounded-3 p-2 bg-light text-dark">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={product.thumbnail}
          alt={product.title}
          style={{ height: "250px", objectFit: "contain" }}
        />
        <i
          className={`bi bi-heart-fill position-absolute top-0 end-0 m-2 fs-4 ${
            isInWishlist(product.id) ? "text-danger" : "text-secondary"
          }`}
          role="button"
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
        ></i>
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{product.title}</Card.Title>
        <Card.Text className="text-muted">
          {product.description.length > 60
            ? product.description.slice(0, 60) + "..."
            : product.description}
        </Card.Text>
        <div className="fw-bold mb-2">${product.price}</div>

        <InputGroup className="mb-2" style={{ width: "120px" }}>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            -
          </Button>
          <FormControl
            size="sm"
            value={quantity}
            readOnly
            className="text-center"
          />
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </Button>
        </InputGroup>

        <Button
          size="sm"
          variant="success"
          className="mt-auto"
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, quantity);
          }}
        >
          Add to Cart
        </Button>

        <Link
          to={`/product/${product.id}`}
          className="btn btn-outline-primary btn-sm mt-2"
        >
          View
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
