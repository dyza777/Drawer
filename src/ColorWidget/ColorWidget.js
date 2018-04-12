import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "./ColorWidget.css";

export default class ColorWidget extends Component {
  static PropTypes = {
    isSelected: PropTypes.bool,
    color: PropTypes.string,
    selectColor: PropTypes.func
  };

  static defaultProps = {
    isSelected: false,
    color: "red",
    selectColor: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedColor: "black"
    };
  }

  render() {
    const { isSelected, color, selectColor } = this.props;

    return (
      <div
        style={{
          background: this.props.color,
          border: isSelected ? "5px solid white" : "",
          width: isSelected ? 45 : 50,
          height: isSelected ? 45 : 50
        }}
        className="widget"
        onClick={() => selectColor(color)}
      />
    );
  }
}
