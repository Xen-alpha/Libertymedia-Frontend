import React, { Component } from "react";

export class NormalSection extends Component {
  render() {
    return (
      <div className="normalsection">
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
