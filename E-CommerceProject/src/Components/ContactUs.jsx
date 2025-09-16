import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Card,
} from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setSubmitted(true);

    console.log("Message Sent:", formData);
  };

  return (
    <Container fluid className="py-5 bg-light">
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h2 className="fw-bold">Get in Touch</h2>
          <p className="text-muted">
            Have questions about your order or need help? Contact our support
            team anytime.
          </p>
        </Col>
      </Row>

      <Container>
        <Row className="g-4">
          <Col md={5}>
            <Card className="shadow-sm p-4 h-100">
              <h5 className="fw-bold mb-3">Contact Information</h5>
              <p>
                <strong>📍 Address:</strong> 123 Market Street, New York, USA
              </p>
              <p>
                <strong>📞 Phone:</strong> +1 234 567 890
              </p>
              <p>
                <strong>✉ Email:</strong> support@shopmart.com
              </p>
              <p>
                <strong>🕒 Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM
              </p>

              <hr />
              <h6 className="fw-bold">Follow Us</h6>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-dark fs-4">
                  <FaFacebook />
                </a>
                <a href="#" className="text-dark fs-4">
                  <FaInstagram />
                </a>
                <a href="#" className="text-dark fs-4">
                  <FaTwitter />
                </a>
              </div>
            </Card>
          </Col>

          <Col md={7}>
            <Card className="shadow-sm p-4">
              {error && <Alert variant="danger">{error}</Alert>}
              {submitted && (
                <Alert variant="success">Your message has been sent!</Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="name" className="mb-3">
                      <Form.Label>Name*</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email" className="mb-3">
                      <Form.Label>Email*</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="subject" className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Order inquiry, product info..."
                  />
                </Form.Group>

                <Form.Group controlId="message" className="mb-3">
                  <Form.Label>Message*</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <div className="map-container shadow-sm">
              <iframe
                title="store-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3382159683297!2d-73.99156847533067!3d40.710570471393766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2f6666271f%3A0xaee6722eff6583dd!2zMTIzIE1hcmtldCBTdCwgTmV3IFlvcmssIE5ZIDEwMDAy2Iwg2KfZhNmI2YTYp9mK2KfYqiDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1757877890357!5m2!1sar!2seg"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
