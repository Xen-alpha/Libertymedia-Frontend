import React, { Component } from "react";

import "./Header.css";

import LogoImage from "./LogoImage";

export default class Header extends Component {
  render() {
    return (
      <span id="header">
        <LogoImage />
        <span id="header-text">리버티미디어</span>
      </span>
    );
  }
}
