import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-primary fw-bold">My Wishlist</h2>
      <Row>
        {wishlist.length === 0 ? (
          <p>No items in your wishlist yet.</p>
        ) : (
          wishlist.map(item => (
            <Col key={item.id} md={4} className="mb-4">
              <Card className="shadow-sm">
                <Card.Img variant="top" src={item.image} alt={item.title} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Trash /> Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}
