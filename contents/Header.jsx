import React, { Component } from "react";

import "./Header.css";

import LogoImage from "./LogoImage";

const openMenu = () => {
  console.log("메뉴 버튼 눌림");
}


export default class Header extends Component {
  render() {
    return (
      <span>
        <span id="header">
        <LogoImage />
        <span id="header-text">리버티미디어</span>
        </span>
        <span id="header-button"><button onClick={openMenu}>〓</button></span>
      </span>
    );
  }
}
