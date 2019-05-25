import React from "react";
import avaiwasher from "../../images/washer1.png";
import unavaiwasher from "../../images/washer2.png";
import { Button, Popover, Progress, Popconfirm, message } from "antd";
import { API_ROOT } from "./Constants.js";
const images = [avaiwasher, unavaiwasher];
const user_id = "1111";

const imageStyle = {
  height: 100
};

class WasherUnit extends React.Component {
  state = {
    washer: this.props.washer,
    loading: false,
    timepercent: -1,
    interval_id: null
  };
  confirm = e => {
    console.log(e);
    message.success("Pick up successfully");
    this.setState(preState => {
      preState.washer.availability = true;
      const washer = preState.washer;
      return {
        washer: washer,
        loading: false,
        interval_id: null,
        timepercent: -1
      };
    });
  };

  cancel = e => {
    console.log(e);
    message.error("Fail to pick up");
  };

  triggleProgress = () => {
    this.startBtn = (
      <div>
        <Button
          type="primary"
          loading={this.state.loading}
          onClick={() => this.handleReserve(this.state.washer.machine_id)}
        >
          Start
        </Button>
      </div>
    );
    this.progressBtn = (
      <div>
        <Progress percent={this.state.timepercent} />
        <Button type="primary" loading={this.state.loading}>
          Loading
        </Button>
      </div>
    );
    this.finishBtn = (
      <div>
        <Progress percent={100} />
        <Popconfirm
          title="Are you sure pick it up?"
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary">pickup</Button>
        </Popconfirm>
      </div>
    );
    if (this.state.timepercent == -1) {
      return this.startBtn;
    } else {
      if (this.state.timepercent >= 100) {
        clearInterval(this.state.interval_id);
        return this.finishBtn;
      }
      return this.progressBtn;
    }
  };

  handleReserve = washer_id => {
    console.log("machine id", washer_id);
    console.log(this.state.washers);
    this.setState({ loading: true });
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
    const interval_id = setInterval(this.handleProgress, period * 10);

    this.setState(preState => {
      preState.washer.availability = false;
      const washer = preState.washer;
      return {
        washer: washer,
        interval_id: interval_id
      };
    });
    console.log("ss", period / 100);
  };
  handleProgress = () => {
    console.log("eachtime", 111);
    this.setState(preState => ({
      timepercent: preState.timepercent + 1
    }));
  };
  switchButton = () => {
    return (
      <Button
        type="primary"
        onClick={() => this.handleReserve(this.washer.machine_id)}
      >
        Start
      </Button>
    );
  };

  render() {
    const { washer } = this.state;
    // console.log("each:", washer);
    const image = washer.availability ? images[0] : images[1];

    const content = (
      <div>
        {/* <p>{"User Id: " + washer.userId}</p> */}
        <p>{"Availability: " + washer.availability}</p>
        {/* <p>{"Start Time: " + washer.startTime}</p>
      <p>{"End Time: " + washer.endTime}</p> */}
      </div>
    );
    return (
      <div>
        <Popover
          content={content}
          title={"Machine Id: " + washer.machine_id}
          trigger="hover"
        >
          <img className="washer-image" style={imageStyle} src={image} />
        </Popover>
        {this.triggleProgress()}
      </div>
    );
  }
}

export default WasherUnit;
//const id_num = id_string.match(/\d+/g).map(Number) - 1;
