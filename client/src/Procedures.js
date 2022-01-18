import Dropwishes from "./Components/Procedures_view/Dropwishes";
import Dropsypmtom from "./Components/Procedures_view/Dropsypmtom";
import Dropcontraindications from "./Components/Procedures_view/Dropcontraindications";
import MultiRangeSlider from "./Components/Procedures_view/MultiRangeSlider";
import "./Components/Procedures_view/MultiRangeSlider.css";

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
        Meil töötavad kogenud arstid ja spetsialistid
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
