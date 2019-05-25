import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Login } from "../Login/Login.js";
import Home from "../Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
