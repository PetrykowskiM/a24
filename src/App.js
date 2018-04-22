import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Landingpage from "./pages/Landingpage";
import ClaimCheck from "./pages/ClaimCheck";
import Success from "./pages/Success";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route path="/check" component={ClaimCheck} />
          <Route path="/success" component={Success} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
