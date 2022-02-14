import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Footer() {
  return (
    <div className="fixed-bottom">
      <Navbar bg="light">
        <Container fluid>
          <Navbar.Brand>© Seritha</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
