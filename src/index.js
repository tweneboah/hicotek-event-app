/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./app/layout/App";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store/store";
import ScrollToTop from "./app/common/util/ScrollToTop";

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
