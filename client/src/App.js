import React from "react";
import "./App.scss";

import NaviBar from "./Components/Navibar";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Siin expordin kõik komponentid mida mulle vaja
import { About } from "./About";
import { Procedures } from "./Procedures";

function App() {
  return (
    <>
      {/* Router ümbritseb teised elementid */}
      <Router>
        <NaviBar />
        <Switch>
          <Route exact path="/" component={Procedures} />

          <Route path="/about" component={About} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
