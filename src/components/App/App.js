import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Login } from "../Login/index.js";
import Home from "../Home";
// import Order from "../Order";
// import Edit from "../../Edit/Edit.js";

class App extends Component {
  getHome = () => {
    return this.props.isLoggedIn ? <Home /> : <Redirect to="/login" />;
  };

  getLogin = () => {
    return this.props.isLoggedIn ? (
      <Redirect to="/home" />
    ) : (
      <Login handleLogin={this.props.handleLogin} />
    );
  };
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Route exact path="/" render={this.getLogin} />
          <Route path="/login" render={this.getLogin} />

          <Route path="/home" exact={true} component={Home} />
          {/*<Route path="/order" component={Order} />*/}
          {/*<Route path="/edit/:id" component={Edit} />*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
