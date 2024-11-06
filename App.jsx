import React from "react";
import Header from "./contents/Header";
import PortalSection from "./component/PortalSection";

import Logo from "./assets/Libertymedia.png";

import './App.css';

export default function App() {
  return (
    <div id="root">
      <header>
        <Header />
      </header>
      <main role="main">
        <div id="mainimage"><img src={Logo} alt='리버티미디어 로고'></img></div>
        <span id="introduction">자유로운 창작을 지원하는 위키위키 프로젝트, 리버티미디어 프로젝트입니다!</span>
        <div id="content">
          <PortalSection title="리버티게임" sitename='libertygame' />
          <PortalSection title="리버티책" sitename='libertybook' />
        </div>
      </main>
      <footer>2020, Libertymedia Project</footer>
    </div>
  );
}
