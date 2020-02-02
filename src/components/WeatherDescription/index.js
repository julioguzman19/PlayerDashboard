import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";

function WeatherDescription(props) {
  return (
    <Card id="weatherDescriptionCard">
      <Card.Body>
        <Card.Title>{props.description}</Card.Title>
        <Card.Text id="weatherDescriptionResultFont">{props.result}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WeatherDescription;
