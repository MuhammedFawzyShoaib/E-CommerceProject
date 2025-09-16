import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    userType: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [hint, setHint] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setHint("");
    setSuccess("");

    for (let key in formData) {
      if (!formData[key]) {
        setError(`${key.charAt(0).toUpperCase() + key.slice(1)} is required!`);
        setHint(`👉 Please enter your ${key} before submitting.`);
        return;
      }
    }

    const nameRegex = /^[a-zA-Z_]{3,}$/;
    if (!nameRegex.test(formData.name)) {
      setError(
        "Full name must be at least 3 characters (letters and underscores only)."
      );
      setHint("👉 Example: John_Doe");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email format.");
      setHint("👉 Example: user@example.com");
      return;
    }

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Phone number must be 10–15 digits only.");
      setHint("👉 Example: 0123456789");
      return;
    }

    if (formData.address.length < 10) {
      setError("Address must be at least 10 characters long.");
      setHint("👉 Example: 123 Main Street, City");
      return;
    }

    if (!["Male", "Female"].includes(formData.gender)) {
      setError("Please select your gender.");
      setHint("👉 Choose Male or Female.");
      return;
    }

    if (!["Admin", "Customer", "Seller"].includes(formData.userType)) {
      setError("Please select a valid user type.");
      setHint("👉 Choose Admin, Customer, or Seller.");
      return;
    }

    const passwordRegex =
      /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&_])[A-Za-z\d@$!%?&_]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setError(
        "Password must include uppercase, lowercase, number, and special character and underscores."
      );
      setHint("👉 Example: StrongP@ss123");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setHint("👉 Make sure both password fields are the same.");
      return;
    }

    // 🔹 Save user data in localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess(`🎉 Registered Successfully! Welcome, ${formData.name}.`);

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      gender: "",
      userType: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <h3 className="auth-title">Create Account</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Enter full address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <div>
              <Form.Check
                inline
                label="Male"
                name="gender"
                value="Male"
                type="radio"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              <Form.Check
                inline
                label="Female"
                name="gender"
                value="Female"
                type="radio"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>User Type</Form.Label>
            <Form.Select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
            >
              <option value="">Select User Type</option>
              <option value="Admin">Admin</option>
              <option value="Customer">Customer</option>
              <option value="Seller">Seller</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" className="w-100 btn-success">
            Register
          </Button>
        </Form>

        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
            <br />
            <small>{hint}</small>
          </Alert>
        )}
        {success && (
          <Alert variant="success" className="mt-3">
            {success}
          </Alert>
        )}

        <div className="text-center mt-3">
          <small>
            Already have an account?{" "}
            <Link to="/login" className="btn-link">
              Login
            </Link>
          </small>
        </div>
      </Card>
    </div>
  );
};

export default Register;
