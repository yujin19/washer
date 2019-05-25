import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Login } from "../Login/index.js";
import Home from "../Home";
// import Order from "../Order";
// import Edit from "../../Edit/Edit.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />

          <Route path="/home" exact={true} component={Home} />
          {/*<Route path="/order" component={Order} />*/}
          {/*<Route path="/edit/:id" component={Edit} />*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
