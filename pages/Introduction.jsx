import React, { Component } from "react";
import { NormalSection } from "../layout/NormalSection";

export class Introduction extends Component {
  render() {
    return (
      <div className="introduction">
        <span>웹으로 만들어가는 자유로운 표현! 리버티미디어 프로젝트의 꿈입니다.</span>
        <NormalSection />
        <NormalSection />
        <NormalSection />
      </div>
    );
  }
}
