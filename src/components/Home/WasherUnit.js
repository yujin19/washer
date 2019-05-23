import React from "react";
import Washer from "../../images/washer.png";
import { Link } from "react-router-dom";

const WasherUnit = props => {
  return (
    <li>
      <span>Washer #</span>
      <span>Occupied</span>
      <span>Time</span>
      <span>Report issue</span>
      {/* <img src={Washer} /> */}
    </li>
  );
};

export default WasherUnit;
