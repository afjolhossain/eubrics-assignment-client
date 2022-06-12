import React, { useEffect, useState } from "react";
import FiveBehavior from "./FiveBehavior/FiveBehavior";
import { Row } from "react-bootstrap";

const FiveBehaviors = () => {
  const [FiveBehaviors, setFiveBehaviors] = useState([]);

  useEffect(() => {
    fetch("https://rocky-lake-90720.herokuapp.com/Services")
      .then((res) => res.json())
      .then((data) => setFiveBehaviors(data));
  }, []);
  return (
    <div>
      <Row md={4} style={{ margin: "auto" }}>
        {FiveBehaviors.map((fiveBehavior) => (
          <FiveBehavior fiveBehavior={fiveBehavior}></FiveBehavior>
        ))}
      </Row>
    </div>
  );
};

export default FiveBehaviors;
