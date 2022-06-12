import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FiveBehavior.css";

const FiveBehavior = ({ fiveBehavior }) => {
  const { details, _id } = fiveBehavior;
  return (
    <div>
      <Card className="card">
        <Card.Body>
          <Link id="services" to={`/AddItem/${_id}`}>
            <Card.Title
              style={{
                color: "crimson",
                fontSize: "25px",
                fontWeight: "700px",
              }}
            >
              {details}
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FiveBehavior;
