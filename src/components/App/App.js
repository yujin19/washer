import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../Home";
// import Order from "../Order";
// import Edit from "../../Edit/Edit.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Route path="/" exact={true} component={Home} />
          {/*<Route path="/order" component={Order} />*/}
          {/*<Route path="/edit/:id" component={Edit} />*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
