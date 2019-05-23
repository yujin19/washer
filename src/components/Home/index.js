import React from "react";
import WasherList from "./WasherList";
import Search from "./Search";
import { Button, AutoComplete } from "antd";
// import bg from "../../images/bg.png";
import { isAbsolute } from "path";

const title = {
  color: "#110A33",
  margin: 0,
  marginTop: 50,
  marginLeft: 40,
  fontSize: 50
};

class Home extends React.Component {
  render() {
    const { machineId } = this.props;
    return (
      <div className="home">
        {/* <img src={bg} /> */}
        <h1 style={title}>
          <span> Laundry Room Service</span>
        </h1>

        {/* <Search /> */}

        <WasherList />
        <Button type="primary">prime</Button>
      </div>
    );
  }
}
export default Home;
