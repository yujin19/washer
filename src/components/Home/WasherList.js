import React, { Component } from "react";
import WasherUnit from "./WasherUnit.js";
import { isTSTypeAliasDeclaration } from "@babel/types";

const list = {
  fontsize: 29,
  marginLeft: 70
};

const each = {
  fontsize: 10,
  marginLeft: 50
};

class WasherList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      machineId: "",
      userId: "",
      startTime: "",
      endTime: ""
      //occupied:"",
    };
  }

  render() {
    return (
      <div>
        <h1 style={list}>
          <span>List of Washers</span>
        </h1>
        <h2 style={each}>
          <WasherUnit />
        </h2>
      </div>
    );
  }
}

export default WasherList;
