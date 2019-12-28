import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

function CurrentTemp(props) {
  return (
    <div>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>{props.description}</Card.Title>
          <Card.Text>{props.result}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CurrentTemp;
