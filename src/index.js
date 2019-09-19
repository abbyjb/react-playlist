import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import configureStore from "./configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);
