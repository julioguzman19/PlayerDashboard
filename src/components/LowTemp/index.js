import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";

function LowTemp(props) {
  return (
    <Card id="lowTempCard">
      <Card.Body>
        <Card.Title>{props.description}</Card.Title>
        <Card.Text>{props.result}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LowTemp;
