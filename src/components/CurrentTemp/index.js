import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";

function CurrentTemp(props) {
  return (
    <Card id="currentTempCard">
      <Card.Body>
        <Card.Title>{props.description}</Card.Title>
        <Card.Text id="tempResultFont">{props.result}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CurrentTemp;
