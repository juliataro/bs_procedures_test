import Dropwishes from "./Components/Dropwishes";
import Dropsypmtom from "./Components/Dropsypmtom";
import Dropcontraindications from "./Components/Dropcontraindications";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './index.css';


import "./App.css";

export const Home = () => {
  return (
    <MDBContainer>
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
      <h6 style={{
        fontSize: "16px",
        fontWeight: "400",
        justifyContent: "centlefter",
        marginTop: "1rem",
        marginBottom: "2rem",
      }}>Meil töötavad kogenud arstid ja spetsialistid</h6>
      <MDBRow>
      <MDBCol sm="6"> <Dropwishes /> </MDBCol> {/** Dropwishes component */}
      <MDBCol sm="6"> <Dropsypmtom /> </MDBCol> {/** Dropkaebused component */}
      </MDBRow>
      <MDBRow>
      <MDBCol sm="6"> <Dropcontraindications /> {/** Slider component */}</MDBCol>
      <MDBCol sm="6">One of three columns</MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

