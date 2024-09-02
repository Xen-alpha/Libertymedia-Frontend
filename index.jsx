"use client";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "./index.css";

const rootNode = document.getElementById("app");

const root = ReactDOM.createRoot(rootNode);
root.render(<App />);
