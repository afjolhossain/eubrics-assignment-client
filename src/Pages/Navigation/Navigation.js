import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar
        style={{ backgroundColor: "#E60E3C" }}
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">ASSIGNMENT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
