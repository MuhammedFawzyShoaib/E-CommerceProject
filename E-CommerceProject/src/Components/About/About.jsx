// src/components/About.jsx
import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { teamMembers } from "./data";
import { Container, Row, Col, Button } from "react-bootstrap";
import TestimonialsCarousel from "../Testimonials/TestimonialsCarousel.jsx"; // Reuse styles if needed

const About = () => {
  return (
    <section className="about-page py-5">
      <Container>
        {/* Hero Section */}
        <Row className="align-items-center mb-5">
          <Col md={6} data-aos="fade-right">
            <h1 className="fw-bold text-warning mb-4">Our Story</h1>
            <p className="lead">
              We started with a simple mission: to make online shopping seamless
              and enjoyable. From day one, we’ve been focused on delivering
              products you love with the best possible experience.
            </p>
            <Button variant="warning" size="lg" className="mt-3">
              Learn More
            </Button>
          </Col>
          <Col md={6} data-aos="fade-left">
            <img
              src="https://www.hubspot.com/hs-fs/hubfs/Rangan-Halligan.jpg?width=851&height=567&name=Rangan-Halligan.jpg"
              alt="Our Story"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="align-items-center my-5">
          <Col md={6} data-aos="fade-right">
            <img
              src="https://www.hubspot.com/hs-fs/hubfs/grow-better.jpg?width=851&height=567&name=grow-better.jpg"
              alt="Our Mission"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2 className="fw-bold text-warning mb-3">Our Mission</h2>
            <p>
              Our mission is to redefine how people shop online by blending
              technology, trust, and style. We are passionate about building a
              platform that’s fast, secure, and easy to use for everyone.
            </p>
          </Col>
        </Row>

        {/* Vision Section */}
        <Row className="align-items-center my-5">
          <Col md={6} data-aos="fade-right">
            <h2 className="fw-bold text-warning mb-3">Our Vision</h2>
            <p>
              We believe in creating a future where shopping is not just about
              transactions, but about experiences. We are continuously innovating
              to make your journey simpler and more enjoyable.
            </p>
          </Col>
          <Col md={6} data-aos="fade-left">
            <img
              src="https://www.hubspot.com/hs-fs/hubfs/Imported%20sitepage%20images/Hubspotters.jpg?width=1448&height=966&name=Hubspotters.jpg"
              alt="Our Vision"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
    {/* Team Section */}
        <Row className="text-center mb-4">
            <Col>
            <h2 className="fw-semibold text-warning">Meet the Team</h2>
            </Col>
        </Row>
        <Row className="g-4">
            {teamMembers.map((member) => (
            <Col key={member.id} md={4}>
                <TeamMemberCard {...member} />
            </Col>
            ))}
        </Row>
        {/* Values Section */}
        <Row className="my-5 text-center" data-aos="zoom-in-up">
          <h2 className="fw-bold text-warning mb-4">Our Values</h2>
          <Col md={4} className="mb-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h4 className="fw-bold text-secondary">Integrity</h4>
              <p>We are transparent, honest, and always put our customers first.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h4 className="fw-bold text-secondary">Innovation</h4>
              <p>We constantly push boundaries to bring modern solutions to e-commerce.</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h4 className="fw-bold text-secondary">Customer Focus</h4>
              <p>Your satisfaction is at the heart of everything we do.</p>
            </div>
          </Col>
        </Row>
      </Container>
        {/* Testimonials Section */}
      <TestimonialsCarousel />
    </section>
  );
};

export default About;