import React, { Component } from "react";
import MultiSelect from "./multiSelect";
class Parent extends Component {
  state = {
    options: [
      { option: "option 1" },
      { option: "option 2" },
      { option: "option 3" },
      { option: "option 4" },
      { option: "option 5" },
      { option: "option 6" },
    ],
  };
  render() {
    return (
      <div>
        <MultiSelect options={this.state.options} />
      </div>
    );
  }
}

export default Parent;
