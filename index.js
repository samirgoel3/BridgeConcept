/** @format */

import { AppRegistry } from "react-native";
import App from "./App";
import React from "react";
import { name as appName } from "./app.json";
import { createStore } from "redux";
import { Provider } from "react-redux";

import allreducres from "./reducers";

const mstore = createStore(allreducres);

const AppContainer = () => (
  <Provider store={mstore}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
