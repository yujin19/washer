import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Login } from "../Login/Login.js";
import Home from "../Home";
import { Switch } from "antd";

class App extends Component {
  // getHome = () => {
  //   return this.props.isLoggedIn ? <Home /> : <Redirect to="/Login" />;
  // };

  // getLogin = () => {
  //   return this.props.isLoggedIn ? (
  //     <Redirect to="/home" />
  //   ) : (
  //     <Login handleLogin={this.props.handleLogin} />
  //   );
  // };
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
