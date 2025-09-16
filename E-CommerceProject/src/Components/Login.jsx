import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.email || !formData.password || !formData.userType) {
      setError(
        "❌ All fields are required! Example: email@example.com, Password@123, Role=Customer."
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("❌ Invalid email format. Example: user123@gmail.com");
      return;
    }

    const passwordRegex =
      /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&_])[A-Za-z\d@$!%?&_]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setError(
        "❌ Weak password. Correct way: At least 6 characters, include uppercase, lowercase, number, and special character and underscores. Example: Pass@123"
      );
      return;
    }

    if (!["Admin", "Seller", "Customer"].includes(formData.userType)) {
      setError("❌ Invalid role. Correct options: Customer, Seller, Admin.");
      return;
    }

    // ✅ Save user
    localStorage.setItem("user", JSON.stringify(formData));

    setSuccess(
      `🎉 Welcome ${formData.userType}! You are logged in as ${formData.email}`
    );

    // ✅ Redirect after 1 second
    setTimeout(() => {
      if (formData.userType === "Admin") {
        navigate("/admin/dashboard");
      } else if (formData.userType === "Seller") {
        navigate("/seller/dashboard");
      } else {
        navigate("/shop");
      }
    }, 1200);

    setFormData({ email: "", password: "", userType: "" });
  };

  return (
    <div className="auth-container">
      <Card className="auth-card shadow-lg">
        <h3 className="auth-title text-center">E-Commerce Login</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email (e.g., user123@gmail.com)"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password (e.g., Pass@123)"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Login As</Form.Label>
            <Form.Select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="Customer">Customer</option>
              <option value="Seller">Seller</option>
              <option value="Admin">Admin</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" className="w-100 btn-primary">
            Login
          </Button>
        </Form>

        <div className="mt-3">
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
        </div>

        <div className="text-center mt-3">
          <small>
            Don’t have an account?{" "}
            <Link to="/register" className="btn-link">
              Create one
            </Link>
          </small>
        </div>
      </Card>
    </div>
  );
};

export default Login;
