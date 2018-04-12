import React, { Component } from "react";
import { PropTypes } from "prop-types";
import "./DrawField.css";

export default class DrawField extends Component {
  static PropTypes = {
    selectedColor: PropTypes.string
  };

  static defaultProps = {
    selectedColor: "black"
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedColor: props.selectedColor || "black",
      isDrawing: false
    };
  }

  render() {
    return (
      <div
        onMouseDown={event => this.mouseDown(event)}
        onMouseMove={event => this.mouseMove(event)}
        onMouseUp={() => this.mouseUp()}
        className={"field"}
      >
        <canvas
          ref={canvas => (this.canvas = canvas)}
          width={600}
          height={400}
        />
      </div>
    );
  }

  mouseMove = event => {
    if (this.state.isDrawing) {
      const canvasCoords = this.canvas.getBoundingClientRect();
      const ctx = this.canvas && this.canvas.getContext("2d");
      const { clientX, clientY } = event;

      if (!ctx) return;

      ctx.strokeStyle = this.props.selectedColor;
      ctx.lineTo(clientX - canvasCoords.left, clientY - canvasCoords.top);
      ctx.stroke();
    }
  };

  mouseDown = event => {
    const ctx = this.canvas && this.canvas.getContext("2d");
    const canvasCoords = this.canvas.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (!ctx) return;

    this.setState({ isDrawing: true });
    ctx.beginPath();
    ctx.moveTo(clientX - canvasCoords.left, clientY - canvasCoords.top);
  };

  mouseUp = () => {
    const ctx = this.canvas && this.canvas.getContext("2d");
    if (!ctx) return;
    ctx.closePath();
    this.setState({ isDrawing: false });
  };
}
