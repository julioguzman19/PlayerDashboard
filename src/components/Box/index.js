import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

const Box = props => {
  return (
    <div>
      <Card className="mt-2">
        <Card.Body className="cards">
          <Card.Title>Current Weather</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>{props.result}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Box;
