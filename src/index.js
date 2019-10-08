import dotenv from "dotenv";
import React from "react";
import { render } from "react-dom";
import "./index.scss";
import App from "./App";
import configureStore from "./configureStore";
import { Provider as ReduxProvider } from "react-redux";
dotenv.config();

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);
