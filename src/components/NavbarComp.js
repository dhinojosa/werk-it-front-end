import React, { Component } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
    FaFire,
    FaHome,
    FaDumbbell,
    FaUtensils,
    FaUserPlus,
    FaUser, FaLock,
} from "react-icons/fa";
import PagesRoutes from "./PagesRoutes";
import Footer from "./Footer";

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
                    <Nav.Link className="mx-lg-5" as={Link} to="/werk-it">
                      <FaHome /> Home
                    </Nav.Link>
                      <Nav.Link className="mx-lg-5" as={Link} to="/werk-it/login">
                          <FaLock /> Login
                      </Nav.Link>
                    <Nav.Link className="mx-lg-5" as={Link} to="/werk-it/exercises">
                      <FaDumbbell /> Exercises
                    </Nav.Link>
                    <Nav.Link className="mx-lg-5" as={Link} to="/werk-it/nutrition">
                      <FaUtensils /> Nutrition
                    </Nav.Link>
                  </Nav>
                  <Nav>
                    <Button
                      className="mt-2 mx-lg-3"
                      variant="outline-success"
                      as={Link}
                      to="/werk-it/register"
                    >
                      <FaUserPlus /> Create a profile
                    </Button>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <PagesRoutes />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default NavbarComp;
