// import { Link } from "react-router-dom";
import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", timeSlot: [] };
  }
  handleInput = e => {
    this.setState({ input: e.target.value });
    //this.props.onSearch(e.target.value);
  };
  getTimeSlot = () => {
    var hour = new Date().getHours();
    let timeslot = [];
    for (let i = 0; i < 22 - hour; i++) {
      timeslot.push(hour + i + 1);
    }
    this.setState({
      timeSlot: timeslot
    });
  };
  submit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.input);
    this.setState({ input: "" });
  };
  render() {
    return (
      <div>
        <label>Select time slot</label>
        <select
          className="form-control"
          id="sex"
          onChange={this.sexChange}
          value={this.state.sex}
        >
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
      </div>
    );
  }
}

export default Search;
