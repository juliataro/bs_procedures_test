import React, { useState } from "react"; // import useState dlya hukove
import { Container, Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import styled from "styled-components";
import { Modal } from "react-bootstrap";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #adb1b8;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
`;

// ne zabivat propisivat  "export default"
export default function NaviBar() {
  // funksii kotorie budut otkrivat modalnoe okno
  const [show, setShow] = useState(false); // metod i funksija setShow

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ne zabivat stavit "return"
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/users">Users</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">Parallax</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                {/* metod otslezivanija sobitiy onClick */}
                <Button variant="primary" className="m-2" onClick={handleShow}>
                  Log In
                </Button>
                <Button
                  variant="secondary"
                  className="m-2"
                  onClick={handleShow}
                >
                  Sign Out
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>

      {/* Pop upping Modal window view construction for login in*/}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fromBasicEmail">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            {/* Password */}
            <Form.Group controlId="fromBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" placeholder="Enter password" />
            </Form.Group>
            {/* Checkbox */}
            <Form.Group controlId="fromBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
