import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NaviBar from "./Components/Navibar";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Siin expordin kõik komponentid mida mulle vaja
import { Home } from "./Home";
import { Users } from "./Users";
import { About } from "./About";

function App() {
  return (
    <>
      {/* Router ümbritseb teised elementid */}
      <Router>
        <NaviBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
