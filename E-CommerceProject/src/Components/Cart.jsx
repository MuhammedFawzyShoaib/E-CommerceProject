import React, { useMemo } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Badge,
  Button,
} from "react-bootstrap";

function Cart({ items = [], onRemoveItem }) {
  const shippingFee = 8;

  const { itemCount, subtotal } = useMemo(() => {
    const count = items.reduce((sum, it) => sum + it.quantity, 0);
    const sub = items.reduce((sum, it) => sum + it.price * it.quantity, 0);
    return { itemCount: count, subtotal: sub };
  }, [items]);

  const total = subtotal + (itemCount > 0 ? shippingFee : 0);

  return (
    <Container className="my-4">
      <Row>
        <Col md={8}>
          <h3 className="mb-3">
            Your Cart{" "}
            <Badge bg="warning" text="dark">
              {itemCount}
            </Badge>
          </h3>
          {items.length === 0 ? (
            <p className="text-muted">Your cart is empty.</p>
          ) : (
            <ListGroup variant="flush">
              {items.map((it) => (
                <ListGroup.Item
                  key={it.id}
                  className="d-flex align-items-center gap-3"
                >
                  <Image
                    src={it.thumbnail}
                    alt={it.title}
                    rounded
                    style={{ width: 60, height: 60, objectFit: "cover" }}
                  />
                  <div className="flex-grow-1">
                    <div className="fw-semibold">{it.title}</div>
                    <div className="text-muted small">Qty: {it.quantity}</div>
                  </div>
                  <div className="ms-auto d-flex align-items-center gap-3">
                    <div className="fw-bold">
                      ${(it.price * it.quantity).toFixed(2)}
                    </div>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => onRemoveItem && onRemoveItem(it.id)}
                      title="Remove"
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <div className="p-3 border rounded-3 bg-light">
            <div className="d-flex justify-content-between mb-2">
              <span>Products</span>
              <span className="fw-semibold">{itemCount}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span className="fw-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span>Shipping</span>
              <span className="fw-semibold">
                ${itemCount > 0 ? shippingFee.toFixed(2) : (0).toFixed(2)}
              </span>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <span className="fw-bold">Total</span>
              <span className="fw-bold">${total.toFixed(2)}</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
