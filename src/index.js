import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./styles/index.css";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <div className={"container"}>
        <App />
      </div>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
