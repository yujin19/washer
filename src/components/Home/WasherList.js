import React from "react";
import WasherUnit from "./WasherUnit.js";
// import { isTSTypeAliasDeclaration } from "@babel/types";

import { Button, message, Alert, Progress } from "antd";
import { List, Card } from "antd";
import { API_ROOT } from "./Constants.js";

const user_id = "1111";
const list = {
  fontsize: 29,
  marginLeft: 70
};

class WasherList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      washers: []
    };
  }

  componentWillMount() {
    //checkavailability
    fetch(`${API_ROOT}/checkavailability`, {
      method: "GET"
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed");
      })
      .then(response =>
        response.map(washer => {
          this.setState(preState => {
            const washers = preState.washers.concat(washer);
            return {
              washers
            };
          });
        })
      );
    //user infor
    // fetch(`${API_ROOT}/checkavailability`, {
    //   method: "GET"
    // })
    //   .then(response => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     throw new Error("Failed");
    //   })
    //   .then(response =>
    //     response.map(washer => {
    //       this.setState(preState => {
    //         const washers = preState.washers.concat(washer);
    //         return {
    //           washers
    //         };
    //       });
    //     })
    //   );
  }
  render() {
    const washers = this.state.washers;

    return (
      <div>
        <h1 style={list}>
          <span>List of Washers</span>
        </h1>
        <div className="washers-container">
          <List
            grid={{ gutter: 30, column: 4 }}
            dataSource={washers}
            renderItem={washer => (
              <List.Item>
                <div className="washer-card">
                  <WasherUnit washer={washer} />
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
