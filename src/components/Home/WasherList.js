import React from "react";
import WasherUnit from "./WasherUnit.js";
// import { isTSTypeAliasDeclaration } from "@babel/types";

import { Button } from "antd";
import { List, Card } from "antd";

const washers = [
  {
    machineId: "1",
    userId: "a",
    availability: true,
    startTime: "1234",
    endTime: "456"
  },
  {
    machineId: "2",
    userId: "b",
    availability: false,
    startTime: "1234",
    endTime: "456"
  },
  {
    machineId: "3",
    userId: "c",
    availability: true,
    startTime: "1234",
    endTime: "456"
  }
];
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
    this.state = {};
  }
  handleReserve = () => {
    console.log("machine id");
  };
  render() {
    return (
      <div>
        <h1 style={list}>
          <span>List of Washers</span>
        </h1>
        <div className="washers-container">
          <List
            grid={{ gutter: 30, column: 5 }}
            dataSource={washers}
            renderItem={washer => (
              <List.Item>
                <div className="washer-card">
                  <WasherUnit washer={washer} />
                  <Button type="primary" onClick={this.handleReserve}>
                    reserve
                  </Button>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default WasherList;
