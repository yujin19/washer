import React from "react";
import WasherUnit from "./WasherUnit.js";
// import { isTSTypeAliasDeclaration } from "@babel/types";

import { Button, message } from "antd";
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
  handleReserve = washer_id => {
    console.log("machine id", washer_id);
    console.log(this.state.washers);
    fetch(
      `${API_ROOT}/initiatetask?user_id=${user_id}&machine_id=${washer_id}`,
      {
        method: "POST"
      }
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed");
      })
      .then(response => {
        console.log("hello", response);
        const startTime = response[0].start_time;
        const endTime = response[0].end_time;
        this.handleBegin(startTime, endTime);
      })
      .catch(e => {
        console.log(e);
      });
  };
  handleBegin = (startTime, endTime) => {
    const period = (Date.parse(endTime) - Date.parse(startTime)) * 0.001;
    console.log(startTime);
    console.log(endTime);
    console.log("period:", period);
  };
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
            // const washers = preState.washers.concat(washer);
            // const machine_id = washer.machine_id[-1];
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
    // console.log(this.state.washers);
    console.log("washer:", this.state.washers[0]);
    if (this.state.washers[0]) {
      console.log(this.state.washers[0].machine_id);
      var numbers = this.state.washers[0].machine_id.match(/\d+/g).map(Number);
    }
    // washers1[0] = 1;
    // console.log(washers1);

    return (
      <div>
        <h1 style={list}>
          <span>List of Washers</span>
        </h1>
        <div className="washers-container">
          <List
            grid={{ gutter: 30, column: 5 }}
            dataSource={this.state.washers}
            renderItem={washer => (
              <List.Item>
                <div className="washer-card">
                  <WasherUnit washer={washer} />
                  <Button
                    type="primary"
                    onClick={() => this.handleReserve(washer.machine_id)}
                  >
                    Start
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
