import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "./ColorsChoose.css";
import ColorWidget from "../ColorWidget/ColorWidget";

export default class ColorsChoose extends Component {
  static PropTypes = {
    selectedColor: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    selectColor: PropTypes.func
  };

  static defaultProps = {
    selectedColor: "black",
    colors: ["red", "blue", "green"],
    selectColor: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedColor: "black",
      isDrawing: false
    };
  }

  render() {
    return <div className="colors-choose">{this.renderColors()}</div>;
  }

  renderColors = () => {
    const { colors, selectColor, selectedColor } = this.props;

    return colors.map(color => {
      const isSelected = color === selectedColor;

      return (
        <ColorWidget
          color={color}
          selectColor={selectColor}
          isSelected={isSelected}
          key={color}
        />
      );
    });
  };
}
