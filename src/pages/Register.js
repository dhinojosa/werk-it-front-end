import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function Register() {
  return (
    <Container className="mt-5">
      <Form>
        <Row className="mb-1">
          <Col className="mb-2" md={4}>
            <Form.Group controlId="formGridUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>
          </Col>
          <Col className="mb-2" md={8}>
            <Form.Group controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-1">
          <Form.Group className="mb-2" as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select>
              <option>Quebec</option>
              <option>Ontario</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-2" as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control placeholder="A1A 1A1" />
          </Form.Group>
        </Row>

        <Row className="mb-1">
          <Col className="mb-2" md={6}>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
          <Col className="mb-2" md={6}>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Verify Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password verification"
              />
            </Form.Group>
          </Col>
        </Row>
        
        <Button className="m-3" variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Register;
