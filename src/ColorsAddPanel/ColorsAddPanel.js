import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "./ColorsAddPanel.css";

export default class ColorsAddPanel extends Component {
  static PropTypes = {
    addColor: PropTypes.func
  };

  static defaultProps = {
    addColor: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      visibleColor: "black",
      red: "0",
      green: "0",
      blue: "0"
    };
  }

  render() {
    const { addColor } = this.props;
    const { visibleColor } = this.state;

    return (
      <div className="add-color">
        <div style={{ background: visibleColor }} className="visible-color" />
        <div className="color-settings">
          {["red", "green", "blue"].map((color, index) => (
            <div key={color + index} className={"switch"}>
              <input
                onChange={event => this.updateColor(event.target.value, color)}
                min="0"
                max="255"
                type="range"
                value={this.state[color]}
              />
              <span className={"label"}>{color}</span>
            </div>
          ))}
          <div className={"button"} onClick={() => addColor(visibleColor)}>
            Add Color
          </div>
        </div>
      </div>
    );
  }

  componentToHex(c) {
    const hex = c.toString(16);

    return hex.length == 1 ? "0" + hex : hex;
  }

  rgbToHex(r, g, b) {
    var rgb = b | (g << 8) | (r << 16);

    return (
      "#" + ((b | (g << 8) | (r << 16)) / 0x1000000).toString(16).substring(2)
    );
  }

  updateColor = (value, color) => {
    const { red, green, blue } = this.state;
    let newColor;

    switch (color) {
      case "red":
        newColor = this.rgbToHex(+value, green, blue);
      case "green":
        newColor = this.rgbToHex(red, +value, blue);
      case "blue":
        newColor = this.rgbToHex(red, green, +value);
    }

    this.setState({ visibleColor: newColor, [color]: value });
  };
}
