import ReactDOM from "react-dom/client";
import App from "./App";

import "./services/firebase";

import "./styles/global.scss";
import React from "react";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
