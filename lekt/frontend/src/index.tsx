import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store, { persistor } from "./store";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";

// csrf double submit via header
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "x-csrftoken";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
