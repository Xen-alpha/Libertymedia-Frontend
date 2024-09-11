import React, { Component } from "react";

import "./header.css";

import LogoImg from "./logoimg";

export default class Header extends Component {
  render() {
    return (
      <span id="header">
        <LogoImg />
        <span id="header-text">리버티미디어</span>
      </span>
    );
  }
}
