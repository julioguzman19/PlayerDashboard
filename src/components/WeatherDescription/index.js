import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

function WeatherDescription(props) {
  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>{props.description}</Card.Title>
        <Card.Text>{props.result}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WeatherDescription;
