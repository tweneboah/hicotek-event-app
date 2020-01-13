/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./app/layout/App";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
