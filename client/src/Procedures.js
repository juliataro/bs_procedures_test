import Dropwishes from "./Components/Procedures_test/Dropwishes";
import Dropsypmtom from "./Components/Procedures_test/Dropsypmtom";
import Dropcontraindications from "./Components/Procedures_test/Dropcontraindications";
import MultiRangeSlider from "./Components/Procedures_test/MultiRangeSlider";
import "./Components/Procedures_test/MultiRangeSlider.css";

import { Container, Row, Col } from "react-bootstrap";

import "./index.css";
import "./App.scss";

export const Procedures = () => {
  return (
    <Container fluid="md">
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "800",
          justifyContent: "left",
          marginTop: "3rem",
          marginBottom: "2rem",
        }}
      >
        Tartu kaasaegseim biokliinik.
      </h1>
      <h6
        style={{
          fontSize: "16px",
          fontWeight: "400",
          justifyContent: "centlefter",
          marginTop: "1rem",
          marginBottom: "2rem",
        }}
      >
        Tekst sellisest testist ja selgitus et saab saada kõik või ainult osa
        tulemusest oma mailile.
      </h6>
      <Row className="justify-content-md-center">
        <Col>
          {" "}
          <Dropwishes />{" "}
        </Col>
        <Col>
          {" "}
          <Dropsypmtom />{" "}
        </Col>
      </Row>
      <Row>
        <Col>
          {" "}
          <Dropcontraindications />{" "}
        </Col>
        <Col>
          {" "}
          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </Col>
      </Row>
    </Container>
  );
};
