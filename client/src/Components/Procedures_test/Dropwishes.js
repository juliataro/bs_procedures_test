import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Container, Row, Col, Form } from "react-bootstrap";

import "../../index.css";
import "../../custom.scss";

const dropWishes = () => {
  return (
    <DropdownButton
      id="dropdown-item-button"
      title="Soovitused / Eesmärgid"
      size="sm"
      className="d-flex justify-content-between;"
    >
      <Form>
        {["checkbox"].map((type) => (
          <Container className="mb-3">
            <Row>
              <Col sm={4}>
                {" "}
                <Form.Check
                  inline
                  label="verevarustuse parandamine"
                  name="group1"
                  type={type}
                  variant="primary"
                />{" "}
              </Col>
              <Col sm={4}>
                {" "}
                <Form.Check
                  inline
                  label="ainevahetushäire"
                  name="group1"
                  type={type}
                />{" "}
              </Col>
              <Col sm={4}>
                {" "}
                <Form.Check
                  inline
                  label="jääkaine"
                  name="group1"
                  type={type}
                />{" "}
              </Col>
            </Row>
          </Container>
        ))}
      </Form>
    </DropdownButton>
  );
};

export default dropWishes;
