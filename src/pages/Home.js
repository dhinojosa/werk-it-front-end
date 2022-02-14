import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import { BsCheck2Circle } from "react-icons/bs";

function Home() {
  return (
    <Container className="m-12 justify-content-center">
      <h1 className="mt-4">
        <BsCheck2Circle /> Objectives
      </h1>
      <Row className="my-5">
        <Card className="m-3" bg="light" style={{ width: "18rem" }}>
          <Card.Img className="mt-2" variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="m-3" bg="light" style={{ width: "18rem" }}>
          <Card.Img className="mt-2" variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="m-3" bg="light" style={{ width: "18rem" }}>
          <Card.Img className="mt-2" variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="m-3" bg="light" style={{ width: "18rem" }}>
          <Card.Img className="mt-2" variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Home;
