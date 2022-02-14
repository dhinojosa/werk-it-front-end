import React, { Component } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  FaFire,
  FaHome,
  FaDumbbell,
  FaUtensils,
  FaUserPlus,
  FaUser,
} from "react-icons/fa";
import PagesRoutes from "./PagesRoutes";

class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand>
                  <FaFire />
                  Werk-it
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-md-0"
                    style={{ maxHeight: "200px" }}
                    navbarScroll
                  >
                    <Nav.Link className="mx-lg-5" as={Link} to="/">
                      <FaHome /> Home
                    </Nav.Link>
                    <Nav.Link className="mx-lg-5" as={Link} to="/exercises">
                      <FaDumbbell /> Exercises
                    </Nav.Link>
                    <Nav.Link className="mx-lg-5" as={Link} to="/nutrition">
                      <FaUtensils /> Nutrition
                    </Nav.Link>
                  </Nav>
                  <Nav>
                    <Button
                      className="mt-2 mx-lg-3"
                      variant="outline-success"
                      as={Link}
                      to="/register"
                    >
                      <FaUserPlus /> Create a profile
                    </Button>
                    <Button
                      className="mt-2 mx-lg-5"
                      variant="outline-primary"
                      as={Link}
                      to="/login"
                    >
                      <FaUser /> Profile
                    </Button>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <PagesRoutes />
        </Router>
      </div>
    );
  }
}

export default NavbarComp;
