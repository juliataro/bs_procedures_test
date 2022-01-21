import React from "react";
import { useState } from "react";

import "../index.css";
import "../custom.scss";

export const Result = () => {
  // Variable to display a bunch of procedures
  const [procedureList, setProcedureList] = useState([]);

  // Button and
  return (
    <Container className="procedures">
      <Button variant="primary" onClick={getProcedures}>
        Otsi
      </Button>
      {procedureList.map((val, key) => {
        return (
          <Row>
            {/* ------------  Fetching out of procedures after "Otsi button " click  -----------------  */}
            <Col>1 of 1</Col>

            {/* ------------  Here to create imail input and button -----------------  */}
          </Row>
        );
      })}
    </Container>
  );
};
