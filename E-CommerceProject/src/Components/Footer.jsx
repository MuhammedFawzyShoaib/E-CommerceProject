import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-white">
      {/* Social Section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-secondary">

        <div className="m-auto">
          <a href="#!" className="me-4 text-warning me-5">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#!" className="me-4 text-warning me-5">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#!" className="me-4 text-warning me-5">
            <i className="bi bi-google"></i>
          </a>
          <a href="#!" className="me-4 text-warning me-5">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#!" className="me-4 text-warning me-5">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#!" className="me-4 text-warning me-5">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </section>

      {/* Links Section */}
      <section>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            {/* Brand Column */}
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-warning">
                <i className="bi bi-shop me-2 text-warning"></i>
                E-Commerce
              </h6>
              <p className="text-light">
                Your one-stop shop for fashion, electronics, and more. Quality products
                delivered to your doorstep with love .
              </p>
            </MDBCol>

            {/* Products Column */}
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-warning">Products</h6>
              <p><a href="#!" className="text-reset text-decoration-none">Clothing</a></p>
              <p><a href="#!" className="text-reset text-decoration-none">Electronics</a></p>
              <p><a href="#!" className="text-reset text-decoration-none">Shoes</a></p>
              <p><a href="#!" className="text-reset text-decoration-none">Accessories</a></p>
            </MDBCol>

            {/* Useful Links Column */}
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-warning">Useful Links</h6>
              <p><a href="#!" className="text-reset text-decoration-none">Pricing</a></p>
              <p><a href="#!" className="text-reset text-decoration-none">Settings</a></p>
              <p><a href="#!" className="text-reset text-decoration-none">Orders</a></p>
              <p><a href="#!" className="text-reset text-decoration-none">Help</a></p>
            </MDBCol>

            {/* Contact Column */}
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-warning">Contact</h6>
              <p><MDBIcon icon="home" className="me-2" /> Egypt , Cairo , 12345</p>
              <p><MDBIcon icon="envelope" className="me-2" /> Support@Ecommerce.com</p>
              <p><MDBIcon icon="phone" className="me-2" /> +1 234 567 89</p>
              <p><MDBIcon icon="print" className="me-2" /> +1 234 567 89</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Copyright */}
      <div className="text-center p-4 bg-secondary bg-opacity-10">
        <i className="bi bi-c-circle text-warning"></i> {new Date().getFullYear()} Copyright :
        <a className="fw-bold ms-1 text-decoration-none text-warning" href="#!">
          E-Commerce.com
        </a>
      </div>
    </MDBFooter>
  );
}
