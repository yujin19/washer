import React from "react";
import avaiwasher from "../../images/washer1.png";
import unavaiwasher from "../../images/washer2.png";
import { Button, Popover } from "antd";
const images = [avaiwasher, unavaiwasher];

const imageStyle = {
  height: 100
};

class WasherUnit extends React.Component {
  state = { washer: this.props.washer };

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
          {/* <Button type="primary" onClick={handleReserve}>
            Start
          </Button> */}
        </Popover>
      </div>
    );
  }
}

export default WasherUnit;
//const id_num = id_string.match(/\d+/g).map(Number) - 1;
