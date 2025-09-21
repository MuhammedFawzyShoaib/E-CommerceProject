import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="container mt-5">
      <h2 className="mb-4">My Wishlist ❤️</h2>
      {wishlist.length === 0 ? (
        <p className="text-muted">Your wishlist is empty.</p>
      ) : (
        <div className="row">
          {wishlist.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <Card className="h-100 shadow-sm border-0 rounded-3">
                <Card.Img
                  variant="top"
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Card.Text className="text-muted">${item.price}</Card.Text>

                  {/* زرار عرض المنتج */}
                  <Link
                    to={`/product/${item.id}`}
                    className="btn btn-outline-primary btn-sm mb-2"
                  >
                    View
                  </Link>

                  {/* زرار إزالة */}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove ❌
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
