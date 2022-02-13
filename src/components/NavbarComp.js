import React, { Component } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Werk-it</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-md-0"
                style={{ maxHeight: "200px" }}
                navbarScroll
              >
                <Nav.Link className="mx-lg-5" href="#action1">
                  Home
                </Nav.Link>
                <Nav.Link className="mx-lg-5" href="#action1">
                  Exercises
                </Nav.Link>
                <Nav.Link className="mx-lg-5" href="#action1">
                  Nutrition
                </Nav.Link>
              </Nav>
              <Nav>
                <Button className="mt-2 mx-lg-3" variant="outline-success">
                  Create a profile
                </Button>
                <Button className="mt-2 mx-lg-5" variant="outline-primary">
                  Profile
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComp;
