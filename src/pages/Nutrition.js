import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import { GiMeal } from "react-icons/gi";

function Nutrition() {
  return (
    <Container className="m-12 justify-content-center">
      <h1 className="mt-4">
        <GiMeal /> Nutrition
      </h1>
      <Row className="my-5">
        <Card className="m-3" bg="light" style={{ width: "18rem" }}>
          <Card.Img className="mt-2" variant="top" src="../images/jpg/Fist.png" />
          <Card.Body>
            <Card.Title>Freedom Diet</Card.Title>
            <Card.Text>
              In this diet you eat what you want. Live free, eat well and enjoy.<br/><br/>
              Anything can be added to your bascet.
            </Card.Text>
            <Button variant="primary">Select</Button>
          </Card.Body>
        </Card>

        <Card className="m-3" bg="light" style={{ width: "18rem" }}>
          <Card.Img className="mt-2" variant="top" src="../images/jpg/Bio.png" />
          <Card.Body>
            <Card.Title>Organic diet</Card.Title>
            <Card.Text>
              With this diet you are making a huge difference for you and the planet.<br/><br/>
              Only organic items can be added to your basket.
            </Card.Text>
            <Button variant="primary">Select</Button>
          </Card.Body>
        </Card>

        <Card className="m-3" bg="light" style={{ width: "18rem" }}>
          <Card.Img className="mt-2" variant="top" src="../images/jpg/Leaf.png" />
          <Card.Body>
            <Card.Title>Vegetarian diet</Card.Title>
            <Card.Text>
              Meat is always getting more expensive. Save yourself money, eat healthy.<br/><br/>
              Any meat product cannot be added to your basket.
            </Card.Text>
            <Button variant="primary">Select</Button>
          </Card.Body>
        </Card>

        <Card className="m-3" bg="light" style={{ width: "18rem" }}>
          <Card.Img className="mt-2" variant="top" src="../images/jpg/Vegan.png" />
          <Card.Body>
            <Card.Title>Vegan Diet</Card.Title>
            <Card.Text>
              This is the diet for those against any animal life edible products.<br/><br/>
              You cannot add meat, dairy and honey to your basket.
            </Card.Text>
            <Button variant="primary">Select</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Nutrition;
