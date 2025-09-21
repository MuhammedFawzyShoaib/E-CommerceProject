// src/components/CartItem.jsx
import { ListGroup, Image, Button, InputGroup } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { removeItem, addToCart } = useCart();

  return (
    <ListGroup.Item className="d-flex align-items-center gap-3">
      <Image
        src={item.thumbnail}
        alt={item.title}
        rounded
        style={{ width: 60, height: 60, objectFit: "cover" }}
      />
      <div className="flex-grow-1">
        <div className="fw-semibold">{item.title}</div>
        <InputGroup size="sm" style={{ width: "120px" }}>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => addToCart(item, -1)}
            disabled={item.quantity <= 1}
          >
            -
          </Button>
          <FormControl
            size="sm"
            value={item.quantity}
            readOnly
            className="text-center"
          />
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => addToCart(item, 1)}
          >
            +
          </Button>
        </InputGroup>
      </div>
      <div className="ms-auto d-flex align-items-center gap-3">
        <div className="fw-bold">${(item.price * item.quantity).toFixed(2)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeItem(item.id)}
          title="Remove"
        >
          <i className="bi bi-trash"></i>
        </Button>
      </div>
    </ListGroup.Item>
  );
}

export default CartItem;
