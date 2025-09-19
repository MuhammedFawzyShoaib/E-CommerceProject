import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

function NavBar({ cartCount = 0 }) {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      className="shadow-sm sticky-top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-warning">
          <i className="bi bi-shop me-2"></i> E-Commerce
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="px-3">
              <i className="bi bi-house text-warning"></i> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="px-3">
              <i className="bi bi-info-circle text-warning"></i> About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="px-3">
              <i className="bi bi-envelope text-warning"></i> Contact
            </Nav.Link>
            <Nav.Link href="#wishlist" className="px-3">
              <i className="bi bi-heart text-warning"></i> Wishlist
            </Nav.Link>
          </Nav>

          <Nav>
            <NavDropdown
              title="Account"
              id="basic-nav-dropdown"
              align="end"
              className="px-3"
            >
              <NavDropdown.Item as={Link} to="/login">
                <i className="bi bi-box-arrow-in-right text-warning"></i> Login
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register">
                <i className="bi bi-person-plus text-warning"></i> Register
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/dashboard">
                <i className="bi bi-speedometer2 text-warning"></i> Dashboard
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/cart" className="px-3">
              <i className="bi bi-cart text-warning"></i>
              <Badge bg="warning" text="dark" pill className="ms-1">
                {cartCount}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
