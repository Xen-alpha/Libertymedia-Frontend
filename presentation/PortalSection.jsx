import React, { Component } from "react";

import "./PortalSection.css";
import { IMAGELIST, DESCRIPTION } from "../container/Constant";

export default class PortalSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="portal">
        <div className="section-title">{this.props.title}</div>
        <div className="section-description">
          <img src={IMAGELIST[this.props.sitename]} alt={this.props.sitename}></img>
          <p>{DESCRIPTION[this.props.sitename]}</p>
        </div>
        <div className="section-link">
          <a href={this.props.url}>바로 가기</a>
        </div>
      </div>
    );
  }
}
