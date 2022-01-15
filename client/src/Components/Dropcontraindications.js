import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Container, Row, Col, Form } from "react-bootstrap";

import "../index.css";
import "../custom.scss";

const gridExamplesPage = () => {
  return (
    <DropdownButton id="dropdown-item-button" title="Dropdown button" size="sm" className="mb-4">
      <Form>
        {["checkbox"].map((type) => (
          <Container className="mb-3">
            <Row>
              <Col sm={4}>
                {" "}
                <Form.Check
                  inline
                  label="sööma"
                  name="group1"
                  type={type}
                />{" "}
              </Col>
              <Col sm={4}>
                {" "}
                <Form.Check
                  inline
                  label="jooma"
                  name="group1"
                  type={type}
                />{" "}
              </Col>
              <Col sm={4}>
                {" "}
                <Form.Check
                  inline
                  label="magama"
                  name="group1"
                  type={type}
                />{" "}
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                {" "}
                <Form.Check
                  inline
                  label="sööma"
                  name="group1"
                  type={type}
                />{" "}
              </Col>
              <Col sm={4}>
                {" "}
                <Form.Check
                  inline
                  label="jooma"
                  name="group1"
                  type={type}
                />{" "}
              </Col>
              <Col sm={4}>
                {" "}
                <Form.Check
                  inline
                  label="magama"
                  name="group1"
                  type={type}
                />{" "}
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                {" "}
                <Form.Check
                  inline
                  label="sööma"
                  name="group1"
                  type={type}
                />{" "}
              </Col>
              <Col sm={4}>
                {" "}
                <Form.Check
                  inline
                  label="jooma"
                  name="group1"
                  type={type}
                />{" "}
              </Col>
              <Col sm={4}>
                {" "}
                <Form.Check
                  inline
                  label="magama"
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

export default gridExamplesPage;
