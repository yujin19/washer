import React from "react";
import avaiwasher from "../../images/washer1.png";
import unavaiwasher from "../../images/washer2.png";
import { Button, Popover } from "antd";
const images = [avaiwasher, unavaiwasher];

const imageStyle = {
  height: 100
};

const WasherUnit = props => {
  const { washer } = props;
  const image = washer.availability ? images[0] : images[1];
  console.log("washer:", washer);
  var handleOpen = () => {
    console.log("hello");
  };
  const content = (
    <div>
      <p>{"User Id: " + washer.userId}</p>
      <p>{"Availability: " + washer.availability}</p>
      <p>{"Start Time: " + washer.startTime}</p>
      <p>{"End Time: " + washer.endTime}</p>
    </div>
  );

  return (
    <div>
      <Popover content={content} title={"Machine Id: " + washer.machineId}>
        <img className="washer-image" style={imageStyle} src={image} />
      </Popover>
    </div>
  );
};

export default WasherUnit;
