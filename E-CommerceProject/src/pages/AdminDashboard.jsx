import React, { useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";

const AdminDashboard = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1200, sellerId: "seller1" },
    { id: 2, name: "Phone", price: 800, sellerId: "seller2" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState({
    id: null,
    name: "",
    price: "",
    sellerId: "",
  });

  const handleShow = (
    product = { id: null, name: "", price: "", sellerId: "" }
  ) => {
    setCurrent(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setCurrent({ id: null, name: "", price: "", sellerId: "" });
    setShowModal(false);
  };

  const handleSave = () => {
    if (!current.name || !current.price || !current.sellerId) return;

    if (current.id) {
      setProducts((prev) =>
        prev.map((p) => (p.id === current.id ? current : p))
      );
    } else {
      setProducts((prev) => [...prev, { ...current, id: Date.now() }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-4 text-center">📊 Admin Dashboard</h2>
      <div className="d-flex justify-content-end mb-3">
        <Button variant="success" onClick={() => handleShow()}>
          ➕ Add Product
        </Button>
      </div>

      <Table bordered hover responsive className="shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price ($)</th>
            <th>Seller ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((p, idx) => (
              <tr key={p.id}>
                <td>{idx + 1}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.sellerId}</td>
                <td>
                  <Button
                    size="sm"
                    variant="warning"
                    className="me-2"
                    onClick={() => handleShow(p)}
                  >
                    ✏ Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleDelete(p.id)}
                  >
                    🗑 Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-muted">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {current.id ? "Edit Product" : "Add Product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={current.name}
                onChange={(e) =>
                  setCurrent({ ...current, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={current.price}
                onChange={(e) =>
                  setCurrent({ ...current, price: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Seller ID</Form.Label>
              <Form.Control
                type="text"
                value={current.sellerId}
                onChange={(e) =>
                  setCurrent({ ...current, sellerId: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
