import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
    <Navbar expand="lg" bg="dark" variant="dark" className="shadow-sm sticky-top">
        <Container>
        {}
        <Navbar.Brand href="#home" className="fw-bold text-warning">
            <i className="bi bi-shop me-2"></i> E-Commerce
        </Navbar.Brand>

        {}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
        {}
        <Nav className="me-auto">
            <Nav.Link href="#home" className="px-3"><i className="bi bi-house text-warning"></i> Home</Nav.Link>
            <Nav.Link href="#about" className="px-3"><i className="bi bi-info-circle text-warning"></i> About</Nav.Link>
            <Nav.Link href="#contact" className="px-3"><i className="bi bi-envelope text-warning"></i> Contact</Nav.Link>
            <Nav.Link href="#wishlist" className="px-3"><i className="bi bi-heart text-warning"></i> Wishlist</Nav.Link>
            <Nav.Link href="#cart" className="px-3"><i className="bi bi-cart text-warning"></i> Cart</Nav.Link>
        </Nav>

        {}
            <Nav>
            <NavDropdown title="Account" id="basic-nav-dropdown" align="end" className="px-3">
                <NavDropdown.Item href="#login"><i className="bi bi-box-arrow-in-right text-warning"></i> Login</NavDropdown.Item>
                <NavDropdown.Item href="#register"><i className="bi bi-person-plus text-warning"></i> Register</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#dashboard"><i className="bi bi-speedometer2 text-warning"></i> Dashboard</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;
