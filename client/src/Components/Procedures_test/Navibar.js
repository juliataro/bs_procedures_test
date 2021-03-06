import React, { useState } from "react"; // import useState dlya hukove
import { Container, Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import styled from "styled-components";
import { Modal } from "react-bootstrap";
import Logo from "../../Images/Loodus-BioSpa-Logo-300.png"; //  src/images

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
  // Funktions that will open modal window of login
  const [show, setShow] = useState(false); // method and funktion of setShow
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bgcolor="white" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to="/home">
                <img
                  width="70px"
                  height="auto"
                  className="img-responsive"
                  src={Logo}
                  alt="logo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/">Protseduurite eelvalik</Link>
                </Nav.Link>
                {/* <Nav.Link>
                  <Link to="/about">Meist</Link>
                </Nav.Link> */}
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Et</Nav.Link>
                <Nav.Link href="#deets">Ru</Nav.Link>
                <Nav.Link href="#deets">En</Nav.Link>
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
