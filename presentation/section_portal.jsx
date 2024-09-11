import React, { Component } from "react";

import "./section_portal.css";

export default class Portal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="portal">
        <span id="header-text">{this.props.title}</span>
      </div>
    );
  }
}
