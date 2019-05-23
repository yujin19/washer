import React from "react";
import avaiwasher from "../../images/washer1.png";
import unavaiwasher from "../../images/washer2.png";
const images = [avaiwasher, unavaiwasher];

const imageStyle = {
  height: 100
};

const WasherUnit = props => {
  const { washer } = props;
  const image = washer.availability ? images[0] : images[1];
  console.log("washer:", washer);
  return (
    <div>
      <h3>{"Machine Id: " + washer.machineId}</h3>
      <p>{"User Id: " + washer.userId}</p>
      <p>{"Availability: " + washer.availability}</p>
      <p>{"Start Time: " + washer.startTime}</p>
      <p>{"End Time: " + washer.endTime}</p>
      <img className="washer-image" style={imageStyle} src={image} />
    </div>
  );
};

export default WasherUnit;
