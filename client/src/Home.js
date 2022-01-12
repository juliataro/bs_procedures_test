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
          fontSize: "4rem",
          fontWeight: "800",
          justifyContent: "center",
          marginTop: "3rem",
          marginBottom: "2rem",
          
        }}
      >
        3 places to visit in New York City
      </h1>
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

