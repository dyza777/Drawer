import React, { Component } from "react";
import DrawField from "../DrawField/DrawField";
import "./MainContent.css";
import ColorsChoose from "../ColorsChoose/ColorsChoose";
import ColorsAddPanel from "../ColorsAddPanel/ColorsAddPanel";
import { uniq } from "lodash";

export default class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedColor: "black",
      colors: ["black"]
    };
  }

  render() {
    const { selectedColor, colors } = this.state;

    return (
      <div className={"basic"}>
        <DrawField selectedColor={selectedColor} />
        <ColorsChoose
          selectedColor={selectedColor}
          selectColor={this.selectColor}
          colors={colors}
        />
        <ColorsAddPanel addColor={this.addColor} />
      </div>
    );
  }

  selectColor = color => {
    this.setState({ selectedColor: color });
  };

  addColor = color => {
    this.setState({
      colors: uniq(this.state.colors.concat(color))
    });
  };
}
