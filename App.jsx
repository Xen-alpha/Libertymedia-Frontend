import React from "react";

import Header from "./header/header";

import Portal from "./presentation/section_portal";

export default function App() {
  return (
    <div id="root">
      <Header />
      <br />
      <div id="content">
        <Portal title="리버티게임" />
        <Portal title="리버티책" />
      </div>
      <footer>2020, Libertymedia Project</footer>
    </div>
  );
}
