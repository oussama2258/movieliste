import React from "react";
import { Card, Button } from "react-bootstrap";
import Ratec from "../Rate/rate";

const MovieCardNew = ({ el, Addfilm, Deletefilm, i }) => {
  return (
    <div>
      <Card style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          src={el.posterUrle}
          height="250px"
          alt="image"
        />
        <Card.Body>
          <Card.Title>
            <h1 className="listaffichage"> {el.title}</h1>
          </Card.Title>
          <Card.Text>
            <p className="listaffichage">{el.description}</p>
          </Card.Text>
          <Button
            onClick={() => Deletefilm(i)}
            className="listaffichage"
            variant="primary"
          >
            Delete
          </Button>
          <Card.Text>
            <Ratec />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCardNew;
