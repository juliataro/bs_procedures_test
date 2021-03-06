import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Container, Row, Col, Form } from "react-bootstrap";

import "../../index.css";
import "../../custom.scss";

const dropSymptoms = () => {
  return (
    <DropdownButton
      as={Col}
      id="dropdown-item-button"
      title="Kaebused"
      size="sm"
      className="mb-4"
    >
      <Form>
        {["checkbox"].map((type) => (
          <Container className="mb-3">
            <Row>
              <Col sm={4}>
                {" "}
                <Form.Check
                  inline
                  label="lihaspinge"
                  name="group1"
                  type={type}
                />{" "}
              </Col>
              <Col sm={4}>
                {" "}
                <Form.Check
                  inline
                  label="tselluliit"
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

export default dropSymptoms;
