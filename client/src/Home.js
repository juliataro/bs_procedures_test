import aaronsebastian from "./aaronsebastian.jpg";
import Slider from "./Components/Slider";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./App.css";

export const Home = () => (
  <>
    <Slider /> {/** Slider component */}
    <Container>
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "800",
          justifyContent: "center",
          marginTop: "3rem",
          marginBottom: "2rem",
          
        }}
      >
        3 places to visit in New York City
      </h1>
      <Row className="justify-content-md-center">
        {/* First Card */}
        <Col sm style={{ marginRight: "1rem" }}>
          <Card style={{ border: "none", marginBottom: "3rem" }}>
            <Card.Img
              variant="top"
              src={aaronsebastian}
              style={{ borderTopRightRadius: "15px", marginBottom: "1rem" }}
            />
            <Card.Title>New York blog</Card.Title>
            <Card.Text>Here is</Card.Text>
            <Button variant="primary">Learn more</Button>
          </Card>
        </Col>
        {/* Second Card */}
        <Col sm>
          <Card style={{ border: "none" }}>
            <Card.Img
              variant="top"
              src={aaronsebastian}
              style={{ borderTopRightRadius: "15px", marginBottom: "1rem" }}
            />
            <Card.Title>New York blog</Card.Title>
            <Card.Text>Here is</Card.Text>
            <Button variant="primary">Learn more</Button>
          </Card>
        </Col>
        {/* Third Card */}
        <Col sm style={{ marginLeft: "1rem" }}>
          <Card style={{ border: "none" }}>
            <Card.Img
              variant="top"
              src={aaronsebastian}
              style={{ borderTopRightRadius: "15px", marginBottom: "1rem" }}
            />
            <Card.Title>New York blog</Card.Title>
            <Card.Text>Here is</Card.Text>
            <Button variant="primary">Learn more</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
);
