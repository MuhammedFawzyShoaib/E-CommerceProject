// src/components/CartPage.jsx
import { Table, Button, InputGroup } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeItem, clearCart, addToCart, checkout } = useCart();

  // ✅ المجموع الكلي
  const grandTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-4">
      <h2 className="mb-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr className="text-center">
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="align-middle text-center">
                  <td className="text-start">{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <InputGroup style={{ width: "120px", margin: "auto" }}>
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
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <h4>Total: ${grandTotal.toFixed(2)}</h4>
            <div>
              <Button
                variant="secondary"
                className="me-2"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
              <Button variant="primary" onClick={checkout}>
                Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
