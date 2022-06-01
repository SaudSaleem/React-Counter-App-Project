import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;

class MultiSelect extends Component {
  state = { children: [] };
  render() {
    return (
      <div>
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Please select"
          defaultValue={[this.props.options[0].option]}
          onChange={this.handleChange}
        >
          {this.state.children}
        </Select>
      </div>
    );
  }
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  componentDidMount() {
    let childrenArr = [];
    for (let i = 0; i < this.props.options.length; i++) {
      childrenArr.push(
        <Option key={this.props.options[i].option} className="p-2">
          <img
            src="https://dummyimage.com/600x400/000/fff"
            height="25px"
            width="25px"
            className="mx-2"
          ></img>
          {this.props.options[i].option}
        </Option>
      );
    }
    this.setState({
      children: childrenArr,
    });
  }
}

export default MultiSelect;
