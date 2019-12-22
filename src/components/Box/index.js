import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
/* import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl' */

const Box = props => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Current Weather</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>{props.temperature}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Box;
