import React from "react";
import { Container, Form, Button, Stack } from "react-bootstrap";

function Login() {
  return (
    <Container className="m-6">
      <Form className="m-5">
        <Form.Group className="m-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="m-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mx-1" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Stack direction="horizontal">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button className="my-3 mx-5 ms-auto" variant="link">
            Forgot your password?
          </Button>
        </Stack>
      </Form>
    </Container>
  );
}

export default Login;
