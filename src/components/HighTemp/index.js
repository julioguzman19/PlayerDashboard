import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";

function HighTemp(props) {
  return (
    <Card id="highTempCard">
      <Card.Body>
        <Card.Title>{props.description}</Card.Title>
        <Card.Text id="highTempResultFont">{props.result}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HighTemp;
